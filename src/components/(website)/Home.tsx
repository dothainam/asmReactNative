import { useContext } from "react";
import { Category as iCategory } from "../../types/category";

import Banner from "./Banner";
import Categories from "./category/Categories";
import Contact from "./Contact";
import Products from "./products/Products";
import Services from "./Services";
import { ProductCT } from "../../context/product";

type Props = {};

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <Services />
      <Categories />
    </>
  );
};

export default Home;
