import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/";
import {
  WalletConnectProvider,
  MetaMaskProvider,
  WalletProvider,
  CoinbaseProvider,
} from "./context/";

// wallet connect
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, bsc } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon, bsc];
const projectId = "f608b705c2677fbd420aa76786028d1b";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <WalletProvider>
      <MetaMaskProvider>
        <WalletConnectProvider>
          <CoinbaseProvider>
            <WagmiConfig config={wagmiConfig}>
              <BrowserRouter>
                <WalletRoutes />
              </BrowserRouter>
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            <Toaster />
          </CoinbaseProvider>
        </WalletConnectProvider>
      </MetaMaskProvider>
    </WalletProvider>
  );
};

export default App;
