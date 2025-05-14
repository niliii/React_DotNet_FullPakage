import 'bootstrap/dist/css/bootstrap.min.css';  
import React from "react";
import ReactDOM from "react-dom/client";
import Student from "./Student";
import Header from "./components/Layout/Header";
import Mainbody from './MainBody';
import Counter from './Counter';
import ContactsIndex from './components/contactPages/ContactsIndex';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));



function Footer() {
  return <p>Happy coding</p>;
}

root.render(
  <div>
 <ContactsIndex/>
  </div>
);

// reportWebVitals();
