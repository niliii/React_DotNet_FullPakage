import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Student from "./Student";
import Header from "./components/Layout/Header";
import Mainbody from "./MainBody";
import Counter from "./Counter";
import ContactsIndex from "./components/contactPages/ContactsIndex";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Proudact from "./Pages/Proudact";
import CreatProudact from "./Pages/CreatProudact";
import ProudactList from "./Pages/ProudactList";
import ProductDeteails from "./Pages/ProductDeteails";
import Layout from "./components/Layout/Layout";
import NotFound from "./NotFount";
import CryptoDetail from "./CryptoDetail"
import { Outlet } from "react-router-dom";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Footer() {
  return <p>Happy coding</p>;
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cryptodetail/:cryptoSymbol" element={<CryptoDetail />} />
          <Route path="Proudact" element={<Proudact />}>
            <Route index element={<ProudactList />} />
            <Route path="creat" element={<CreatProudact />} />
            <Route path="list" element={<ProudactList />} />
            <Route path="deteails" element={<ProductDeteails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
