export {};

declare global {
  interface WalletState {
    accounts: string[];
    balance: string;
    chainId: string;
  }
}
