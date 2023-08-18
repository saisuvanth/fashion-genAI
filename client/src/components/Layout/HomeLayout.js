import React from "react";
import { Outlet } from "react-router";

import NavBar from "../Navigation/NavBar";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />l
    </>
  );
};

export default HomeLayout;
