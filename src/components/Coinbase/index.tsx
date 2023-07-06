import { FC } from "react";
import styles from "./style.module.css";

interface CoinbaseProps {
  className?: string;
}

const Coinbase: FC<CoinbaseProps> = ({ className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}></div>
  );
};

export default Coinbase;
