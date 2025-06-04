// Layout.tsx
import React from "react";
import Header from "./Header"
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
