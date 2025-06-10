import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "30px", verticalAlign: "top", width: "40px" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "nav-link active text-danger" : "nav-link"
              }
            >
              خانه
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active text-danger" : "nav-link"
              }
            >
              درباره ما
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink
              to="/CryptoDetail/BTC"
              className="nav-link "
            >
              CryptoDetail
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              محصولات
            </NavLink>
            <ul className="dropdown-menu">
                <li>
                <NavLink className="dropdown-item" to="/Proudact/creat">
                 محصول
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/Proudact/creat">
                  افزودن محصول
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/Proudact/list">
                  لیست محصولات
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/Proudact/deteails/3">
                  جزئیات محصول
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <span className="nav-link disabled" aria-disabled="true">
              غیرفعال
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
