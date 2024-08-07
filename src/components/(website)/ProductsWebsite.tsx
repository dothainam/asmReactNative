import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCT } from "../../context/product";
import { CategoryCT } from "../../context/category";
import { Category } from "../../types/category";
import { Product } from "../../types/product";

const ProductsWebsite = () => {
  const { products } = useContext(ProductCT);
  const { categories } = useContext(CategoryCT);
  const BestCategories = categories.slice(0, 3);
  const categoryId = useParams();

  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | number | null
  >(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (selectedCategoryId) {
      setFilteredProducts(
        products.filter(
          (product: Product) => product.category === selectedCategoryId
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategoryId, products, categoryId]);

  useEffect(() => {
    if (categoryId?.id) {
      setSelectedCategoryId(categoryId?.id);
    }
  }, [categoryId?.id]);
  return (
    <section className="mb-[200px]">
      <h3 className="text-[30px] text-[#505F4E] font-semibold bg-gradient-to-r from-[#B5DCB0] to-[#F9F3EE] w-full py-[50px] pl-[40px]">
        Töpfe & Behälter
      </h3>
      <div className="">
        <div className="mt-[30px] flex justify-center items-center space-x-[100px]">
          {BestCategories.map((category: Category) => (
            <div
              key={category.id}
              className={`w-[193px] h-[62px] flex justify-center items-center cursor-pointer ${
                selectedCategoryId === category.id.toString()
                  ? "bg-[#9BCC8C]"
                  : "bg-[#B5DCB0]"
              }`}
              onClick={() => setSelectedCategoryId(category.id.toString())}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-[72px] h-[44.92px] mr-3"
              />
              <p className="text-[15.83px] font-semibold text-[#505F4E]">
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <div className="">
          <div className="mt-[100px] flex gap-[200px]">
            <div className="">
              <div className="flex ml-[170px] ">
                <div className="flex justify-center items-center pr-[70px]">
                  <p className="text-[18.8px] font-semibold pr-[15px]">
                    Sort by:
                  </p>
                  <select
                    name=""
                    id=""
                    className="w-[221.89px] h-[43.25px] text-[16.92px] text-[#BDBDBD] pl-[10px]  border-[#BDBDBD] border rounded-[7px]"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-[18.8px] font-semibold pr-[15px]">Show:</p>
                  <select
                    name=""
                    id=""
                    className="w-[221.89px] h-[43.25px] pl-[10px] text-[#BDBDBD]  border-[#BDBDBD] border rounded-[7px]"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-[30px] ml-[35px] mt-[30px]">
                {filteredProducts.map((product: Product) => (
                  <Link to={`/detail/${product.id}`} key={product.id}>
                    <div className="relative">
                      <img
                        src={product.image}
                        alt=""
                        className="w-[300px] h-[300px] transition ease-in-out duration-500"
                      />

                      <div className="absolute inset-0  flex items-center justify-center opacity-0 transition ease-in-out duration-500 hover:opacity-100">
                        <div className=" text-white text-2xl flex justify-center items-center gap-10">
                          <a
                            href="#"
                            className="hover:scale-125 transform transition ease-in-out duration-300 w-[40.14px] h-[34px] bg-white flex justify-center items-center rounded-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-5 text-[#4E7C32]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="hover:scale-125 transform transition ease-in-out duration-300 w-[40.14px] h-[34px] bg-[#4E7C32] flex justify-center items-center rounded-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="hover:scale-125 transform transition ease-in-out duration-300 w-[40.14px] h-[34px] bg-white flex justify-center items-center rounded-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-5 text-[#4E7C32]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <p className="text-[16.92px] font-bold mt-2">
                        {product.name}
                      </p>
                      <div className="flex pt-[3px]">
                        <p className="pr-[10px] text-[16.04px] text-[#505F4E]">
                          ${product.price}.00
                        </p>
                        <p className="line-through text-[#505F4E]">$45.00</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-[100px] mt-[20px]">
              <p className="text-[30px] font-bold text-[#505F4E]">Kategorien</p>
              <nav className="pl-[20px] pt-[10px]">
                <ul className="*:py-[4px]">
                  {categories.map((category: Category) => (
                    <li key={category.id} className="flex">
                      <input
                        type="checkbox"
                        checked={selectedCategoryId === category.id.toString()}
                        onChange={() =>
                          setSelectedCategoryId(
                            selectedCategoryId === category.id.toString()
                              ? null
                              : category.id.toString()
                          )
                        }
                      />
                      <p className="text-[15px] pl-[6px]">{category.name}</p>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="bg-[url('https://fastly.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA')] w-[213px] h-[262px] bg-cover mt-[30px]">
                <p className="text-[18.9px] font-bold text-white pl-[20px] pt-[15px]">
                  Grow your own favourite plant
                </p>
                <div className="flex items-center pt-[140px] pl-[20px]">
                  <p className="text-[18.9px] font-extralight text-white pr-[5px]">
                    Shop Now{" "}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-[40px]">
                <div className="">
                  <p className="text-[18.8px] font-bold text-[#333333]">
                    Filter By Price
                  </p>
                  <input
                    type="range"
                    className="bg-[#4E7C32] w-[228.68px] h-[4.42px] "
                  />

                  <div className="text-[15.04px] font-medium text-[#0D0D0D] flex justify-between">
                    <p className="">From $0 to $8000</p>
                    <p className="">Filter</p>
                  </div>
                </div>
                <div className="pt-[15px]">
                  <p className="text-[18.8px] font-bold text-[#333333]">
                    Filter By Size
                  </p>
                  <input
                    type="range"
                    className="bg-[#4E7C32] w-[228.68px] h-[4.42px] "
                  />

                  <div className="text-[15.04px] font-medium text-[#0D0D0D] flex justify-between">
                    <p className="">2 mm by 50</p>
                    <p className="">Filter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[50px]">
        <div className="w-[30px]">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
    </section>
  );
};

export default ProductsWebsite;
