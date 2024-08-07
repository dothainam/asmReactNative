import { useRoutes } from "react-router-dom";
import "./App.css";
import "./index.css";

import Client from "./layouts/client";
import Home from "./components/(website)/Home";
import ProductsWebsite from "./components/(website)/ProductsWebsite";
import Detail from "./components/(website)/Detail";
import Admin from "./layouts/admin";
import ProductContext from "./context/product";
import ProductAdd from "./components/(admin)/product/ProductAdd";
import ProductEdit from "./components/(admin)/product/ProductEdit";
import Products from "./components/(admin)/product/Products";
import Categories from "./components/(admin)/category/Categories";
import CategoryAdd from "./components/(admin)/category/CategoryAdd";
import CategoryEdit from "./components/(admin)/category/CategoryEdit";
import CategoryContext, { CategoryCT } from "./context/category";
import Search from "./components/(website)/Search";
import Register from "./components/(website)/Register";
import Login from "./components/(website)/Login";
import AppContext from "./context/appContext";
import AuthContext from "./context/auth";

function App() {
  const routes = useRoutes([
    {
      path: "",
      element: (
        <ProductContext>
          <CategoryContext>
            <AppContext>
              <AuthContext>
                <Client />
              </AuthContext>
            </AppContext>
          </CategoryContext>
        </ProductContext>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
        { path: "detail/:id", element: <Detail /> },
        { path: "categories/:id", element: <ProductsWebsite /> },
        { path: "search", element: <Search /> },
        { path: "products", element: <ProductsWebsite /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "admin",
      element: (
        <ProductContext>
          <CategoryContext>
            <Admin />
          </CategoryContext>
        </ProductContext>
      ),
      children: [
        //Products
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/add",
          element: <ProductAdd />,
        },
        {
          path: "products/edit/:id",
          element: <ProductEdit />,
        },
        //Categories
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/add",
          element: <CategoryAdd />,
        },
        {
          path: "categories/edit/:id",
          element: <CategoryEdit />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
