import api from "../configs/axios";
import { Cart } from "../types/cart";

export const getCart = async () => {
  try {
    const { data } = await api.get("cart");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (cartData: Cart) => {
  try {
    const { data } = await api.post("cart");
    return data;
  } catch (error) {
    console.log(error);
  }
};
