import React, { createContext, useReducer } from "react";
import { AppReducer } from "../reducer/app";

export const AppCT = createContext({} as any);
const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [AppState, dispatch] = useReducer(AppReducer, {
    isLogin: false,
    isRegister: false,
    Message: { status: false, message: { type: "", text: "" } },
  });
  return (
    <AppCT.Provider value={{ AppState, dispatch }}>{children}</AppCT.Provider>
  );
};

export default AppContext;
