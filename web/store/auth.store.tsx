'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean | undefined;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

  const logout = () => setIsLoggedIn(false);

  return <AuthContext.Provider value={{ isLoggedIn, logout }}>
  {children}
  </AuthContext.Provider>
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}