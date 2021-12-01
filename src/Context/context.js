import React, { useState } from "react";

const context = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <context.Provider>
      {children}
    </context.Provider>
  );
};

// custom hook to distructure context's values
export const useGlobalContext = () => {
  return React.useContext(context);
};
