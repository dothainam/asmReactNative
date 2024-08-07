import React from "react";
import Header from "../components/(website)/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/(website)/Footer";
import Banner from "../components/(website)/Banner";

type Props = {};

const Client = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Client;
