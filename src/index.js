import 'bootstrap/dist/css/bootstrap.min.css';  
import React from "react";
import ReactDOM from "react-dom/client";
import Student from "./Student";
import Header from "./Header";
import Mainbody from './MainBody';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));



function Footer() {
  return <p>Happy coding</p>;
}

root.render(
  <div>
    <Header />
    <Mainbody/>
    <Footer />
  </div>
);

// reportWebVitals();
