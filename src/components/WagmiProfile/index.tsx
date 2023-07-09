import { MouseEventHandler } from "react";
import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import styles from "./style.module.css";
import { Coinbase, MetaMask, WalletConnect } from "..";

const WagmiProfile = () => {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  /*
  connector ids
  - metaMask
  - coinbaseWallet
  - walletConnect
  */

  const disconnectWallet: MouseEventHandler<HTMLButtonElement> = () => {
    disconnect();
  };

  const getWalletComp = (connector: Connector) => {
    switch (connector.id) {
      case "metaMask":
        return (
          <MetaMask
            connector={connector}
            isLoading={isLoading}
            pendingConnector={pendingConnector}
          />
        );
      case "coinbaseWallet":
        return (
          <Coinbase
            connector={connector}
            isLoading={isLoading}
            pendingConnector={pendingConnector}
          />
        );
      case "walletConnect":
        return (
          <WalletConnect
            connector={connector}
            isLoading={isLoading}
            pendingConnector={pendingConnector}
          />
        );
      default:
        break;
    }
  };

  const controlEnsAvatar = (avatar: string | undefined | null) => {
    if (avatar === null || avatar === undefined) {
      return false;
    } else {
      return true;
    }
  };

  if (isConnected) {
    return (
      <div className={styles.wagmiContainer}>
        <h2 className={styles.title}>WAGMI (CUSTOM)</h2>
        {controlEnsAvatar(ensAvatar) && (
          <img src={ensAvatar || undefined} alt="ENS Avatar" width={180} />
        )}

        <div className={styles.address}>
          <p>{ensName && ensName}</p>
          <p>{address}</p>
          {/* {ensName ? `${ensName} (${address})` : address} */}
        </div>
        <div>Connected to {connector?.name}</div>
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  return (
    <div className={styles.wagmiContainer}>
      <h2 className={styles.title}>WAGMI (CUSTOM)</h2>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {getWalletComp(connector)}
        </button>
      ))}

      {error && <div className={styles.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default WagmiProfile;
