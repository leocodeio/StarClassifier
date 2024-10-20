import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

export const useAccountContext = () => {
  return useContext(AccountContext);
};

export const AccountProvider = ({ children }) => {
  const [id, setId] = useState(null);
  return (
    <AccountContext.Provider value={{ id, setId }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
