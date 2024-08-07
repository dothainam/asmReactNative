import React from "react";
import { Product as iProduct } from "../../../types/product";
import { Link } from "react-router-dom";

type Props = {
  product: iProduct;
};

const Product = ({ product }: Props) => {
  return (
    <section>
      <Link to={`detail/${product.id}`}>
        <div className="w-[270px] py-[60px]">
          <img src={product.image} alt="" />
          <p className="font-semibold text-[#665345] text-[13.64px] pt-2">
            {product.name}
          </p>
          <div className="flex justify-between pt-1">
            <p className="font-[12px] text-[#777777] ">{product.category}</p>
            <p className="font-[12px] text-[#665345] ">{product.price}$</p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Product;
