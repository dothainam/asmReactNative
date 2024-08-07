import React, { useContext } from "react";
import { Product as iProduct } from "../../../types/product";
import { Link } from "react-router-dom";
import { ProductCT } from "../../../context/product";

type Props = {};

const Products = () => {
  const { products, onRemove } = useContext(ProductCT);
  return (
    <div>
      <h3 className="text-center text-[30px]">Products</h3>
      <section className=" dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 ">
                <Link
                  to={"/admin/products/add"}
                  id="createProductModalButton"
                  data-modal-target="createProductModal"
                  data-modal-toggle="createProductModal"
                  className="flex items-center justify-center bg-gray-300 text-black font-medium no-underline rounded-lg text-sm px-4 py-2 "
                >
                  Add product
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4 text-center">
                      Id
                    </th>
                    <th scope="col" className="px-4 py-4 text-center">
                      Product name
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Image
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Description
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product: iProduct, index: number) => (
                    <tr className="border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                      >
                        {index + 1}
                      </th>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                      >
                        {product.name}
                      </th>
                      <td className="px-4 py-3">
                        <img
                          src={product.image}
                          className="mx-auto w-20 h-20"
                        />
                      </td>
                      <td className="px-4 py-3 text-center ">
                        {product.price} $
                      </td>
                      <td className="px-4 py-3 text-center">
                        {product.category}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {product.description}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          className="btn btn-danger w-[50px] mr-[10px] h-[30px]  bg-red-400"
                          onClick={() => onRemove(product.id)}
                        >
                          Delete
                        </button>
                        <Link to={`edit/${product.id}`}>
                          <button className="btn btn-danger w-[50px] h-[30px] bg-gray-400">
                            Update
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
