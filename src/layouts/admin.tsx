import React from "react";
import Dashboard from "../components/(admin)/Dashboard";
import { Outlet } from "react-router-dom";

type Props = {};

const Admin = (props: Props) => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Admin;
