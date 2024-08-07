import React from "react";
import { Category as iCategory } from "../../../types/category";
import { Link } from "react-router-dom";

type Props = {
  category: iCategory;
};

const Category = ({ category }: Props) => {
  return (
    <Link to={`categories/${category.id}`}>
      <div
        style={{ backgroundImage: `url(${category.image})` }}
        className="w-[303px] h-[368px] bg-cover mt-2"
        key={category.id}
      >
        <div className="pl-[180px] pt-[25px]">
          <p className="font-semibold text-[18px] text-[#FFFFFF]">
            {category.name}
          </p>
          <p className="text-[16px] font-normal text-[#FFFFFF]">
            {category.quatity} items
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Category;
