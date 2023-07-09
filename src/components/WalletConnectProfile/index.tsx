import { MouseEventHandler } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { Web3Button } from "@web3modal/react";
import styles from "./style.module.css";

const WalletConnectProfile = () => {
  const { address, isConnected } = useAccount();
  const { error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  const disconnectWallet: MouseEventHandler<HTMLButtonElement> = () => {
    disconnect();
  };

  if (isConnected) {
    return (
      <div className={styles.walletconnectContainer}>
        <h2 className={styles.title}>WALLET CONNECT</h2>
        <div className={styles.address}>
          {ensName ? `${ensName} (${address})` : address}
        </div>
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  return (
    <div className={styles.walletconnectContainer}>
      <h2 className={styles.title}>WALLET CONNECT</h2>
      <Web3Button />

      {error && <div className={styles.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default WalletConnectProfile;
