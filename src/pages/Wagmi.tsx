import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WagmiProfile } from "../components";
import { ALCHEMY_ID, WALLETCONNECT_PROJECT_ID } from "../utils";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: ALCHEMY_ID }), publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WALLETCONNECT_PROJECT_ID,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),

    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: "Injected",
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  publicClient,
  webSocketPublicClient,
});

const Wagmi = () => {
  return (
    <WagmiConfig config={config}>
      <WagmiProfile />
    </WagmiConfig>
  );
};

export default Wagmi;
