import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Product } from "../../types/product";
import api from "../../configs/axios";
import { Category } from "../../types/category";

type Props = {};

const Search = (props: Props) => {
  const [search] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [keywords, setKeywords] = useState<string>("");
  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        "products?name_like=" + search.get("keyword")
      );
      setProducts(data);
      setKeywords(search.get("keyword") as string);
    })();
  }, [search.get("keyword") as string]);
  return (
    <div>
      <h1 className="text-center text-[32px] mt-[30px]">
        Ket qua cua tim kiem: <strong>{keywords}</strong>
      </h1>
      <section className="mb-[200px] ">
        <div className="">
          <div className="">
            <div className="mt-[100px] flex gap-[200px]">
              <div className="">
                <div className="grid grid-cols-3 gap-[100px] ml-[35px] mt-[30px]">
                  {products.map((product: Product) => (
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
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
          <div className="w-[30px]">1</div>
          <div className="">2</div>
          <div className="">3</div>
        </div>
      </section>
    </div>
  );
};

export default Search;
