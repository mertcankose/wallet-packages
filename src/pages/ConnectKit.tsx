import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ALCHEMY_ID, WALLETCONNECT_PROJECT_ID } from "../utils";
import { ConnectkitProfile } from "../components";

const config = createConfig(
  getDefaultConfig({
    alchemyId: ALCHEMY_ID,
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    appName: "Wallet Packages",

    appDescription: "Wallet Packages Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const ConnectKit = () => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ConnectkitProfile />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default ConnectKit;
