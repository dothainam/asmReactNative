import React, {
  Children,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import api from "../configs/axios";
import { Cart } from "../types/cart";

type Props = {
  children: React.ReactNode;
};
export const CartCT = createContext({} as any);
const CartContext = ({ children }: Props) => {
  const [cart, setCart] = useState<Cart>({} as Cart);
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString as string);
  console.log(user.email);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`cart/${user.id}`);
        if (data) {
          setCart(data);
        }
      } catch (error) {}
    })();
  }, []);
  return (
    <CartCT.Provider value={{ cart, setCart }}>{children}</CartCT.Provider>
  );
};

export default CartContext;
