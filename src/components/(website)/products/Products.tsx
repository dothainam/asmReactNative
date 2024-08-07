import React, { useContext, useEffect } from "react";

import Product from "./Product";
import { ProductCT } from "../../../context/product";
import { Link } from "react-router-dom";
import { getProducts } from "../../../services/product";
import { Product as iProduct } from "../../../types/product";

type Props = {};

const Products = () => {
  const { products } = useContext(ProductCT);
  const bestSellers = products.slice(0, 4);
  return (
    <div>
      <div className="mt-[50px]">
        <h3 className="text-[30px] font-bold pl-[113px] text-[#505F4E]">
          Best sellers
        </h3>
        <hr />
        <div className="flex space-x-[70px] justify-center bg-white mt-3">
          {bestSellers.map((product: iProduct) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
