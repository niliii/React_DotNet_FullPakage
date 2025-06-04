import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                درباره ما
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                محصولات
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Proudact/creat">
                    افزودن محصول
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Proudact/list">
                    لیست محصولات
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Proudact/deteails">
                    جزئیات محصول
                  </Link>
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
      </div>
    </nav>
  );
}
