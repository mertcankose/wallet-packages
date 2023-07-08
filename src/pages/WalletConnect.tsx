import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { WalletConnectProfile } from "../components";
import { WALLETCONNECT_PROJECT_ID } from "../utils";

const chains = [arbitrum, mainnet, polygon];
const projectId = WALLETCONNECT_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletConnect = () => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <WalletConnectProfile />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default WalletConnect;
