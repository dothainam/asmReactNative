import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/product";
import { formData } from "../../../types/product";
import { ProductCT } from "../../../context/product";
import { CategoryCT } from "../../../context/category";
import { Category } from "../../../types/category";

type Props = {
  onUpdate: (data: formData, id: number | string) => void;
};

const ProductEdit = () => {
  const { onUpdate } = useContext(ProductCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();
  const { categories } = useContext(CategoryCT);
  const params = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProductById(params?.id as number | string);
      reset({
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
      });
    })();
  }, []);
  const onSubmit = (data: formData) => {
    onUpdate(data, params?.id as number | string);
  };
  return (
    <div>
      <section className="bg-[#f8f4f0] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Edit a product
          </h2>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  {...register("name", {
                    required: "Please enter a valid name",
                    minLength: {
                      value: 6,
                      message: "Product name must be longer than 6 characters",
                    },
                  })}
                />
                {errors?.name && (
                  <div className="text-red-600">{errors?.name?.message}</div>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product image"
                  {...register("image", {
                    required: "Please enter a valid image",
                  })}
                />
                {errors?.image && (
                  <div className="text-red-600">{errors?.image?.message}</div>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  {...register("price", {
                    required: "Please enter a valid price",
                    pattern: {
                      value: /^\d*$/,
                      message: "Must be number",
                    },
                    min: {
                      value: 0,
                      message: "Must be larger than 0",
                    },
                  })}
                />
                {errors?.price && (
                  <div className="text-red-600">{errors?.price?.message}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Please enter a valid category",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="">Select category</option>
                  {categories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors?.category && (
                  <div className="text-red-600">
                    {errors?.category?.message}
                  </div>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  defaultValue={""}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductEdit;
