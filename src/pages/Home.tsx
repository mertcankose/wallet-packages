import { MetaMask, WalletConnect } from "../components";
import { useMetaMask } from "../hooks/useMetaMask";
import { formatChainAsNumber } from "../utils";

const Home = () => {
  const { wallet } = useMetaMask();

  return (
    <div className="flex flex-col place-items-center gap-10 min-h-screen py-8">
      <MetaMask />

      <div>
        {wallet.accounts.length > 0 && (
          <>
            <div>Wallet Accounts: {wallet.accounts[0]}</div>
            <div>Wallet Balance: {wallet.balance}</div>
            <div>Hex ChainId: {wallet.chainId}</div>
            <div>Numeric ChainId: {formatChainAsNumber(wallet.chainId)}</div>
          </>
        )}
      </div>

      <p>------------</p>

      <WalletConnect />
    </div>
  );
};

export default Home;
