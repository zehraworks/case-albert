import React from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(GlobalContext);
};

export { useGlobal, GlobalProvider };
