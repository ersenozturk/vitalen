import { createContext, useContext } from "react";

//! create context
const AppContext = createContext();

//! create provide
export const AppContextProvider = ({children}) => {
  const deneme = "context-deneme";
 const value = { deneme };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//! consume context via custom hook
export const useAppContext = () => useContext(AppContext);
