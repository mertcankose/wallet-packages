import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col place-items-center gap-10 min-h-screen py-8">
      <Link to="/wagmi">Wagmi</Link>
      <Link to="/connectkit">ConnectKit</Link>
      <Link to="/web3modal">Web3Modal</Link>
      <Link to="/dynamic">Dynamic</Link>
      <Link to="/rainbowkit">RainbowKit</Link>
    </div>
  );
};

export default Home;
