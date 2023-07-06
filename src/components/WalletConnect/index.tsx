import { FC, HTMLAttributes } from "react";
import styles from "./style.module.css";
import { Web3Button } from "@web3modal/react";
import { Web3NetworkSwitch } from "@web3modal/react";
import { W3mQrCode } from "@web3modal/react";

interface WalletConnectProps extends HTMLAttributes<HTMLDivElement> {}

const WalletConnect: FC<WalletConnectProps> = ({ className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}>
      <Web3Button />
      <Web3NetworkSwitch />
      <W3mQrCode size={200} imageUrl="url/to/image" uri="data" />
    </div>
  );
};

export default WalletConnect;
