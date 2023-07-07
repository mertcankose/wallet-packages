import { FC, HTMLAttributes } from "react";
import styles from "./style.module.css";
import { ReactComponent as WalletConnectIcon } from "../../assets/icons/walletconnect.svg";
import { Loading } from "..";

interface WalletConnectProps extends HTMLAttributes<HTMLDivElement> {
  connector: any;
  isLoading: boolean;
  pendingConnector: any;
}

const WalletConnect: FC<WalletConnectProps> = ({
  className,
  connector,
  isLoading,
  pendingConnector,
  ...props
}) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}>
      <WalletConnectIcon className={styles.walletIcon} />

      <div className={styles.textSection}>
        <span>{connector.name}</span>
        {!connector.ready && (
          <span className={styles.unsupportedText}>Unsupported</span>
        )}
        {isLoading && connector.id === pendingConnector?.id && <Loading />}
      </div>
    </div>
  );
};

export default WalletConnect;
