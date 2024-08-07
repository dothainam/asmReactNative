import React, { createContext, useEffect, useState } from "react";
import { Category, formDataCategory } from "../types/category";
import {
  addCategory,
  getCategories,
  removeCategory,
  updateCategory,
} from "../services/category";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export const CategoryCT = createContext({} as any);
const CategoryContext = ({ children }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useNavigate();
  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  const onRemoveCategory = async (id: number | string) => {
    const confirm = window.confirm("Xoa ?");
    if (confirm) {
      try {
        await removeCategory(id);
        alert("Thanh cong");
        const newCategoriesAfterDelete = categories.filter(
          (category) => category.id !== id
        );
        setCategories(newCategoriesAfterDelete);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onAddCategory = async (data: formDataCategory) => {
    try {
      const category = await addCategory(data);
      alert("Thanh cong");
      setCategories([...categories, category]);
      router("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateCategory = async (
    data: formDataCategory,
    id: number | string
  ) => {
    try {
      const product = await updateCategory(data, id);
      alert("Thanh cong");
      const newCategoriesAfterUpdate = categories.map((cate) =>
        cate.id == id ? product : cate
      );
      setCategories(newCategoriesAfterUpdate);
      router("/admin/categories");
    } catch (error) {}
  };

  return (
    <CategoryCT.Provider
      value={{ categories, onRemoveCategory, onAddCategory, onUpdateCategory }}
    >
      {children}
    </CategoryCT.Provider>
  );
};

export default CategoryContext;
