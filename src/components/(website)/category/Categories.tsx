import React, { useContext } from "react";

import { Category as iCategory } from "../../../types/category";
import { CategoryCT } from "../../../context/category";
import Category from "./Category";

type Props = {
  categories: iCategory[];
};

const Categories = () => {
  const { categories } = useContext(CategoryCT);
  return (
    <div className="mt-[30px]">
      <h3 className="text-[30px] font-bold pl-[113px] text-[#505F4E]">
        Kategorien
      </h3>
      <hr />

      <div className="grid grid-cols-4 mx-32 mt-5 ">
        {categories.map((category: iCategory) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
