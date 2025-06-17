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
import CryptoDetail from "./CryptoDetail";
import { Outlet } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useReducer } from "react";
import { reducer } from "@testing-library/react";
import Counter2 from "./components/Counter2";
import DestinationList from "./components/DestinationList";
import DestinationFact from "./components/DestinationFact";
import ResetApp from "./components/ResetApp";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Footer() {
  return <p>Happy coding</p>;
}
root.render(
  <div className="text-balck">
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cryptodetail/:cryptoSymbol" element={<CryptoDetail />} />
          <Route path="Proudact" element={<Proudact />}>
            <Route index element={<ProudactList />} />
            <Route path="creat" element={<CreatProudact />} />
            <Route path="list" element={<ProudactList />} />
            <Route path="deteails/:productId" element={<ProductDeteails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}

    <Provider store={store}>
      <ResetApp/>
      <Counter2 />
      <div className="pt-4 border text-center">
        <h4 className="text-  ">Destination List</h4>
        <DestinationList />
        <DestinationFact/>
      </div>
      {/* <Header/> */}
    </Provider>
  </div>
);
