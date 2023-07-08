export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(5);
  return balance;
};

export const formatChainAsNumber = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const ALCHEMY_ID = import.meta.env.VITE_ALCHEMY_ID;
export const WALLETCONNECT_PROJECT_ID = import.meta.env
  .VITE_WALLETCONNECT_PROJECT_ID;
export const DYNAMIC_ENVIRONMENT_ID = import.meta.env
  .VITE_DYNAMIC_ENVIRONMENT_ID;
