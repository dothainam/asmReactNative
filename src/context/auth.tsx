import React, { createContext, useContext, useState } from "react";
import { AuthForm } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { Login, Register } from "../services/auth";
import { AppCT } from "./appContext";

type Props = { children: React.ReactNode };
export const AuthCT = createContext({} as any);
const AuthContext = ({ children }: Props) => {
  const [userId, setUserId] = useState(1);
  const navigate = useNavigate();
  const { dispatch } = useContext(AppCT);

  const onLogin = async (userData: AuthForm) => {
    try {
      const data = await Login(userData);
      alert("Thanh cong");
      sessionStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "login", value: false });
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = async (userData: AuthForm) => {
    try {
      const data = await Register(userData);
      alert("Thanh cong");
      dispatch({ type: "register", value: false });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthCT.Provider value={{ userId, setUserId, onRegister, onLogin }}>
      {children}
    </AuthCT.Provider>
  );
};

export default AuthContext;
