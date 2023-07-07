import { FC, HTMLAttributes } from "react";
import styles from "./style.module.css";
import { ReactComponent as MetaMaskIcon } from "../../assets/icons/metamask.svg";
import { Loading } from "..";

interface MetamaskProps extends HTMLAttributes<HTMLDivElement> {
  connector: any;
  isLoading: boolean;
  pendingConnector: any;
}

const MetaMask: FC<MetamaskProps> = ({
  className,
  connector,
  isLoading,
  pendingConnector,
  ...props
}) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}>
      <MetaMaskIcon className={styles.walletIcon} />

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

export default MetaMask;
