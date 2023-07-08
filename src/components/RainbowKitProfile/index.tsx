// @ts-nocheck
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./style.module.css";

const RainbowKitProfile = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  if (isConnected) {
    return (
      <div className={styles.rainbowkitContainer}>
        <h2 className={styles.title}>RAINBOWKIT</h2>
        <div className={styles.address}>
          {ensName ? `${ensName} (${address})` : address}
        </div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div className={styles.rainbowkitContainer}>
      <h2 className={styles.title}>RAINBOWKIT</h2>
      <ConnectButton />

      {error && <div className={styles.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default RainbowKitProfile;
