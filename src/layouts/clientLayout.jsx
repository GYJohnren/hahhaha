import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Header from "../components/header";

export default function ClientLayout() {
  return (
    <>
      <div className="container">
        <NavBar />

        <div id="food-container">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
