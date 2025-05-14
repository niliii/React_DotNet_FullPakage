import React from "react";
import Header from "../Layout/Header";
import AddRandomComponents from "./AddRandomComponents";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GenerallContacts from "./GenerallContacts";
import Footer from "../Layout/Footer"

export default function ContactsIndex() {
    const contactListe=[
        id:1; 

    ];
  return (
    <div>
      <Header />
      <div className="container" style={{ minheight: "85pxvh" }}>
        <div className="row py-3">
          <div className="col-4 offset-2">
            <AddRandomComponents />
          </div>
          <div className="col-4 ">
            <RemoveAllContact />
          </div>
          <div className="row py-2">
            <AddContact/>

          </div>
           <div className="row py-2">
            <FavoriteContacts/>

          </div>
           <div className="row py-2">
            <GenerallContacts/>

          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
