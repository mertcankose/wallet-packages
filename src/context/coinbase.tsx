import { FC, useState, createContext, PropsWithChildren } from "react";

interface ICoinbaseContext {
  address: string;
  setAddress: (address: string) => void;
}

export const CoinbaseContext = createContext({} as ICoinbaseContext);

export const CoinbaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [address, setAddress] = useState<string>("");

  return (
    <CoinbaseContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </CoinbaseContext.Provider>
  );
};
