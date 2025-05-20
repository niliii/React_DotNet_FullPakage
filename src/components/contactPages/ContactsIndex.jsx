import React, { useState } from "react";
import Header from "../Layout/Header";
import AddRandomComponents from "./AddRandomComponents";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GenerallContacts from "./GenerallContacts";
import Footer from "../Layout/Footer";

export default function ContactsIndex() {
 // const [name, setname] = useState("1");

const contactListe = [
  {
    name: "Ali",
    email: "johndoe@gmail.com",
    phone: "1234588888",
    favorite: false,
  },
  {
     name: "reza" ,
     email: "rezae@gmail.com" ,
     phone: "1234599999" ,
     favorite: true ,
  }
];
function handelAddContact(newcontact){
  alert("hello")
}



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
            <AddContact handelAddContact={handelAddContact}/>
          </div>
          <div className="row py-2">
            <FavoriteContacts contactListe={contactListe} />
          </div>
          <div className="row py-2">
            <GenerallContacts onclick={contactListe} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}