// @ts-nocheck
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { Web3Button } from "@web3modal/react";
import styles from "./style.module.css";

const WalletConnectProfile = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  if (isConnected) {
    return (
      <div className={styles.walletconnectContainer}>
        <h2 className={styles.title}>WALLET CONNECT</h2>
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <button onClick={disconnect}>Disconnect</button>
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
