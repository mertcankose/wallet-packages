import { FC, useState, createContext, PropsWithChildren } from "react";

interface IWalletContext {
  address: string;
  setAddress: (address: string) => void;
}

export const WalletContext = createContext({} as IWalletContext);

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  const [address, setAddress] = useState<string>("");

  return (
    <WalletContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
