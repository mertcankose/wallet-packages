import { FC, useState, createContext, PropsWithChildren } from "react";

interface IWalletConnectContext {
  address: string;
  setAddress: (address: string) => void;
}

export const WalletConnectContext = createContext({} as IWalletConnectContext);

export const WalletConnectProvider: FC<PropsWithChildren> = ({ children }) => {
  const [address, setAddress] = useState<string>("");

  return (
    <WalletConnectContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </WalletConnectContext.Provider>
  );
};
