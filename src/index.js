import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import DestinationIndex from "./components/DestinationIndex";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { destinationApi } from "./api/destinationApi";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Footer() {
  return <p>Happy coding</p>;
}
root.render(
  <div className="text-balck">
    <ApiProvider api={destinationApi}>
      <DestinationIndex />
    </ApiProvider>
  </div>
);
