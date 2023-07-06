/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FC,
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useCallback,
} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance } from "../utils";
import { errorMessage } from "../helpers/toast";

interface IMetaMaskContext {
  wallet: WalletState;
  hasProvider: boolean | null;
  isConnecting: boolean;
  connectMetaMask: () => void;
}

const disconnectedState: WalletState = {
  accounts: [],
  balance: "",
  chainId: "",
};

export const MetaMaskContext = createContext<IMetaMaskContext>(
  {} as IMetaMaskContext
);

export const MetaMaskProvider: FC<PropsWithChildren> = ({ children }) => {
  const [wallet, setWallet] = useState(disconnectedState);
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const _updateWallet = useCallback(async (providedAccounts?: any) => {
    const accounts =
      providedAccounts ||
      (await window.ethereum.request({ method: "eth_accounts" }));

    if (accounts.length === 0) {
      // If there are no accounts, then the user is disconnected
      setWallet(disconnectedState);
      return;
    }

    const walletBalance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [accounts[0], "latest"],
    });
    const balance = formatBalance(walletBalance);

    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    setWallet({ accounts, balance, chainId });
  }, []);

  const updateWalletAndAccounts = useCallback(
    () => _updateWallet(),
    [_updateWallet]
  );
  const updateWallet = useCallback(
    (accounts: any) => _updateWallet(accounts),
    [_updateWallet]
  );

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log("provider", provider);
      setHasProvider(Boolean(provider));

      if (provider) {
        updateWalletAndAccounts();
        window.ethereum.on("accountsChanged", updateWallet);
        window.ethereum.on("chainChanged", updateWalletAndAccounts);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener("accountsChanged", updateWallet);
      window.ethereum?.removeListener("chainChanged", updateWalletAndAccounts);
    };
  }, [updateWallet, updateWalletAndAccounts]);

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      updateWallet(accounts);
    } catch (err: any) {
      errorMessage(err.message);
    }
    setIsConnecting(false);
  };

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        isConnecting,
        connectMetaMask,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};
