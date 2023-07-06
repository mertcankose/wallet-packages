import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import {
  Home,
  Wagmi,
  ConnectKit,
  Web3Modal,
  Dynamic,
  RainbowKit,
} from "./pages/";

const WalletRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/wagmi" element={<Wagmi />} />
        <Route path="/connectkit" element={<ConnectKit />} />
        <Route path="/web3modal" element={<Web3Modal />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/rainbowkit" element={<RainbowKit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <WalletRoutes />
      </BrowserRouter>

      <Toaster />
    </>
  );
};

export default App;
