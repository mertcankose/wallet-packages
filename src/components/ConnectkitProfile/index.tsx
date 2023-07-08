// @ts-nocheck
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { ConnectKitButton } from "connectkit";
import styles from "./style.module.css";

const ConnectkitProfile = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  if (isConnected) {
    return (
      <div className={styles.connectkitContainer}>
        <h2 className={styles.title}>CONNECTKIT</h2>
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div className={styles.connectkitContainer}>
      <h2 className={styles.title}>CONNECTKIT</h2>
      <ConnectKitButton />

      {error && <div className={styles.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default ConnectkitProfile;
