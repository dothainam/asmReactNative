import api from "../configs/axios";
import { formData } from "../types/product";

export const getProducts = async () => {
  try {
    const { data } = await api.get("products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: number | string) => {
  try {
    const { data } = await api.get("products/" + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product: formData) => {
  try {
    const { data } = await api.post("products", product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (product: formData, id: number | string) => {
  try {
    const { data } = await api.put(`products/${id}`, product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (id: number | string) => {
  try {
    const { data } = await api.delete(`products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
