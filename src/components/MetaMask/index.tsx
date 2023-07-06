import { FC, HTMLAttributes } from "react";
import { useMetaMask } from "../../hooks/useMetaMask";
import { formatAddress } from "../../utils";
import styles from "./style.module.css";

interface MetamaskProps extends HTMLAttributes<HTMLDivElement> {}

const MetaMask: FC<MetamaskProps> = ({ className, ...props }) => {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();

  return (
    <div className={[styles.navigation, className].join(" ")} {...props}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav}>MetaMask Section</div>
        <div className={styles.rightNav}>
          {!hasProvider && (
            <a href="https://metamask.io" target="_blank">
              Install MetaMask
            </a>
          )}
          {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
            <button disabled={isConnecting} onClick={connectMetaMask}>
              Connect MetaMask
            </button>
          )}
          {hasProvider && wallet.accounts.length > 0 && (
            <a
              className="text_link tooltip-bottom"
              href={`https://etherscan.io/address/${wallet.accounts[0]}`}
              target="_blank"
              data-tooltip="Open in Block Explorer"
            >
              {formatAddress(wallet.accounts[0])}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetaMask;
