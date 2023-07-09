import { MouseEventHandler } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { ConnectKitButton } from "connectkit";
import styles from "./style.module.css";

const ConnectkitProfile = () => {
  const { address, isConnected } = useAccount();
  const { error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  const disconnectWallet: MouseEventHandler<HTMLButtonElement> = () => {
    disconnect();
  };

  if (isConnected) {
    return (
      <div className={styles.connectkitContainer}>
        <h2 className={styles.title}>CONNECTKIT</h2>
        <div className={styles.address}>
          <p>{ensName && ensName}</p>
          <p>{address}</p>
          {/* {ensName ? `${ensName} (${address})` : address} */}
        </div>
        <button onClick={disconnectWallet}>Disconnect</button>
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
