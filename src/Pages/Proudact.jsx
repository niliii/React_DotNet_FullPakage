// Pages/Proudact.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Proudact = () => {
  return (
    <div>
      <h1>محصولات</h1>
      <nav>
        <Link to="creat" className="btn btn-primary m-1">افزودن محصول</Link>
        <Link to="list" className="btn btn-secondary m-1">لیست محصولات</Link>
        <Link to="deteails" className="btn btn-info m-1">جزئیات</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Proudact;
