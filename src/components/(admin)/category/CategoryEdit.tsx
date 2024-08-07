import React, { useContext, useEffect } from "react";
import { formDataCategory } from "../../../types/category";
import { useForm } from "react-hook-form";
import { CategoryCT } from "../../../context/category";
import { useParams } from "react-router-dom";
import { getCategoriesById } from "../../../services/category";

type Props = {};

const CategoryEdit = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formDataCategory>();

  const params = useParams();
  useEffect(() => {
    (async () => {
      const category = await getCategoriesById(params?.id as number | string);
      reset({
        name: category.name,
        image: category.image,
      });
    })();
  }, []);
  const { onUpdateCategory } = useContext(CategoryCT);

  const onSubmit = (data: formDataCategory) => {
    onUpdateCategory(data, params?.id as number | string);
  };
  return (
    <div>
      <section className="bg-[#f8f4f0] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update a category
          </h2>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type category name"
                  {...register("name", {
                    required: "Please enter a valid name",
                    minLength: {
                      value: 6,
                      message: "Category name must be longer than 6 characters",
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
                  placeholder="Category image"
                  {...register("image")}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Update category
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CategoryEdit;
