import React, { createContext, useEffect, useState } from "react";

export interface MyContextData {
  name: string;
  updateName: (name: string) => void;
}

export const MyContext = createContext<MyContextData>({} as MyContextData);

interface MyProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [name, setName] = useState("")

  const updateName = (name: string) => {
    setName(name)
  }
  
  return (
    <MyContext.Provider value={{name, updateName}}>
      {children}
    </MyContext.Provider>
  );
};

export default AuthProvider;
