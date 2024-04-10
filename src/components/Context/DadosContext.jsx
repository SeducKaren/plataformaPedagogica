import React, { createContext, useState } from "react";

export const DadosContext = createContext();

export const DadosProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <DadosContext.Provider value={{ userData, setUserData }}>
      {children}
    </DadosContext.Provider>
  );
};