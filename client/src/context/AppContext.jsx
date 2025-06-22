import { createContext } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    return <AppContext.Provider>{children}</AppContext.Provider>;
};
  