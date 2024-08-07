import api from "../configs/axios";
import { AuthForm } from "../types/auth";

export const Register = async (userData: AuthForm) => {
  try {
    const { data } = await api.post("register", userData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (userData: AuthForm) => {
  try {
    const { data } = await api.post("login", userData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
