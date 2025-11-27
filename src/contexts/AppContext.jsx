import { createContext, useContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Error get AppContext");
  }
  return context;
};
