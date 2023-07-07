import { FC, HTMLAttributes } from "react";
import styles from "./style.module.css";
import { ReactComponent as CoinbaseIcon } from "../../assets/icons/coinbase.svg";
import { Loading } from "..";

interface CoinbaseProps extends HTMLAttributes<HTMLDivElement> {
  connector: any;
  isLoading: boolean;
  pendingConnector: any;
}

const Coinbase: FC<CoinbaseProps> = ({
  className,
  connector,
  isLoading,
  pendingConnector,
  ...props
}) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}>
      <CoinbaseIcon className={styles.walletIcon} />

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

export default Coinbase;
