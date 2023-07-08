// @ts-nocheck

import {
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
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  /*
  connector ids
  - metaMask
  - coinbaseWallet
  - walletConnect
  */

  const getWalletComp = (connector) => {
    switch (connector.id) {
      case "metaMask":
        return <MetaMask connector={connector} isLoading={isLoading} />;
      case "coinbaseWallet":
        return <Coinbase connector={connector} isLoading={isLoading} />;
      case "walletConnect":
        return <WalletConnect connector={connector} isLoading={isLoading} />;
      default:
        break;
    }
  };

  if (isConnected) {
    return (
      <div className={styles.wagmiContainer}>
        <h2 className={styles.title}>WAGMI (CUSTOM)</h2>
        {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
        <div className={styles.address}>
          {ensName ? `${ensName} (${address})` : address}
        </div>
        <div>Connected to {connector?.name}</div>
        <button onClick={disconnect}>Disconnect</button>
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
