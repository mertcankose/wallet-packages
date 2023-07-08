import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora, bsc } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ALCHEMY_ID, WALLETCONNECT_PROJECT_ID } from "../utils";
import { RainbowKitProfile } from "../components";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora, bsc],
  [alchemyProvider({ apiKey: ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: WALLETCONNECT_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const RainbowKit = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <RainbowKitProfile />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowKit;
