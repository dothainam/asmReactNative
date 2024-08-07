import React, { createContext, useContext, useEffect, useState } from "react";
import { formData, Product } from "../types/product";
import {
  addProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "../services/product";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export const ProductCT = createContext({} as any);
const ProductContext = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useNavigate();
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const onRemove = async (id: number | string) => {
    const confirm = window.confirm("Xoa ?");
    if (confirm) {
      try {
        await removeProduct(id);
        alert("Thanh cong");
        const newProductsAfterDelete = products.filter(
          (product) => product.id !== id
        );
        setProducts(newProductsAfterDelete);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onAdd = async (data: formData) => {
    try {
      const product = await addProduct(data);
      alert("Thanh cong");
      setProducts([...products, product]);
      router("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate = async (data: formData, id: number | string) => {
    try {
      const product = await updateProduct(data, id);
      alert("Thanh cong");
      const newProductsAfterUpdate = products.map((pro) =>
        pro.id == id ? product : pro
      );
      setProducts(newProductsAfterUpdate);
      router("/admin/products");
    } catch (error) {}
  };
  return (
    <div>
      <ProductCT.Provider value={{ onAdd, onRemove, onUpdate, products }}>
        {children}
      </ProductCT.Provider>
    </div>
  );
};

export default ProductContext;
