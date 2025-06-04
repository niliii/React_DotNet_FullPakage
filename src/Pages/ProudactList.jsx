// Proudact.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Proudact = () => {
  return (
    <div>
      <h2>صفحه محصولات</h2>
      <nav>
        <Link to="creat" className="btn btn-primary m-1">افزودن محصول</Link>
        <Link to="list" className="btn btn-secondary m-1">لیست محصولات</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Proudact;
