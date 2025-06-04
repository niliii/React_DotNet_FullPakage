import React, { useState, setState } from "react";
import Header from "../Layout/Header";
import AddRandomComponents from "./AddRandomComponents";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GenerallContacts from "./GenerallContacts";
import Footer from "../Layout/Footer";
import Exercis from "./Exercis";

export default function ContactsIndex(
  componentdidmount,
  componentdidupdate,
  componentwillunmount
  ) {
  // const [contactListe, setContactListe] = useState([
  //   {
  //     id: 1,
  //     name: "Ali",
  //     email: "johndoe@gmail.com",
  //     phone: "1234588888",
  //     favorite: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Reza",
  //     email: "rezae@gmail.com",
  //     phone: "1234599999",
  //     favorite: true,
  //   },
  // ]);

  // const [selectedContact, setSelectedContact] = useState(null);
  // const [isUpdating, setIsUpdating] = useState(false);

  // const handleAddContact = (newContact) => {
  //   const duplicateRecord = contactListe.filter((x) => {
  //     return x.name === newContact.name && x.phone === newContact.phone;
  //   });

  //   if (duplicateRecord.length > 0) {
  //     return { status: "failure", msg: "Duplicate Record" };
  //   }

  //   if (isUpdating && selectedContact) {
  //     const updatedList = contactListe.map((obj) => {
  //       if (obj.id === selectedContact.id) {
  //         return {
  //           ...obj,
  //           name: newContact.name,
  //           email: newContact.email,
  //           phone: newContact.phone,
  //         };
  //       }
  //       return obj;
  //     });

  //     setContactListe(updatedList);
  //     setIsUpdating(false);
  //     setSelectedContact(null);
  //     return { status: "success", msg: "Contact updated successfully" };
  //   } else {
  //     const newFinalContact = {
  //       ...newContact,
  //       id:
  //         contactListe.length > 0
  //           ? contactListe[contactListe.length - 1].id + 1
  //           : 1,
  //       favorite: false,
  //     };
  //     setContactListe((prevContacts) => [...prevContacts, newFinalContact]);
  //     return { status: "success", msg: "Contact added successfully" };
  //   }
  // };

  // const handleUpdateContact = (updatedContact) => {
  //   console.log(handleUpdateContact)
  //   // const duplicateRecord = contactListe.filter((x) => {
  //   //   return x.name === updatedContact.name && x.phone === updatedContact.phone;
  //   // });

  //   // if (duplicateRecord.length > 0) {
  //   //   return { status: "failure", msg: "Duplicate Record" };
  //   // }
  //   if (updatedContact.name === "") {
  //     return { status: "failure", msg: "plz enter a valid number" };
  //   } else if (updatedContact.phone === "") {
  //     return { status: "failure", msg: "plz enter a valid phone number" };
  //   }
  //   if (isUpdating && selectedContact) {
  //     const updatedList = contactListe.map((obj) => {
  //       if (obj.id === selectedContact.id) {
  //         return {
  //           ...obj,
  //           name: updatedContact.name,
  //           email: updatedContact.email,
  //           phone: updatedContact.phone,

  //         };
  //       }
  //       return obj;
  //     });

  //     setContactListe(updatedList);
  //     setIsUpdating(false);
  //     setSelectedContact(null);
  //     return { status: "success", msg: "Contact updated successfully" };
  //   } else {
  //     const newFinalContact = {
  //       ...updatedContact,
  //       id:
  //         contactListe.length > 0
  //           ? contactListe[contactListe.length - 1].id + 1
  //           : 1,
  //       favorite: false,
  //     };
  //     setContactListe((prevContacts) => [...prevContacts, newFinalContact]);
  //     return { status: "success", msg: "Contact added successfully" };
  //   }
  // };

  // const handleDeleteContact = (contactId) => {
  //   setContactListe((prevContacts) =>
  //     prevContacts.filter((obj) => obj.id !== contactId)
  //   );
  // };
  // const handelUpdateClick = (contact) => {
  //   setSelectedContact(contact);
  //   setIsUpdating(true);
  // };
  // const handelCancelUpdateClick = (contact) => {
  //   setSelectedContact(contact);
  //   setIsUpdating(false);
  // };
  // const handleToggelFavorite = (contact) => {
  //   setContactListe((prevContacts) =>
  //     prevContacts.map((obj) =>
  //       obj.id === contact.id ? { ...obj, favorite: !obj.favorite } : obj
  //     )
  //   );
  // };
  // const handleAddRandomContact = (newContact) => {
  //   const newFinalContact = {
  //     ...newContact,
  //     id:
  //       contactListe.length > 0
  //         ? contactListe[contactListe.length - 1].id + 1
  //         : 1,
  //     favorite: false,
  //   };
  //   setContactListe((prevContacts) => [...prevContacts, newFinalContact]);
  // };
  // const handelRemoveAllContact = () => {
  //   setContactListe([]);
  // };

  return (
    <div>
      <Header />
      <div
        className="row text-black"
        style={{ minHeight: "85vh", overflow: "auto" }}
      >
        {/* <div className="col-6">
          <span className="h1 text-warning text-center">class components</span>
          <Exercis
            componentdidmount={componentdidmount}
            componentdidupdate={componentdidupdate}
            componentwillunmount={componentwillunmount}
          />
        </div> */}
        {/* <div className="row py-3">
          <div className="col-4 offset-2 row">
            <AddRandomComponents
              handleAddRandomContact={handleAddRandomContact}
            />
          </div>
          <div className="col-4 row">
            <RemoveAllContact handelRemoveAllContact={handelRemoveAllContact} />
          </div>

          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <AddContact
                handleAddContact={handleAddContact}
                isUpdating={isUpdating}
                selectedContact={selectedContact}
                handelCancelUpdateClick={handelCancelUpdateClick}
                handleUpdateContact={handleUpdateContact}
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <FavoriteContacts
                contacts={contactListe}
                favoriteClick={handleToggelFavorite}
                handleDeleteContact={handleDeleteContact}
                handelUpdateClick={handelUpdateClick}
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <GenerallContacts
                contacts={contactListe}
                favoriteClick={handleToggelFavorite}
                handleDeleteContact={handleDeleteContact}
                handelUpdateClick={handelUpdateClick}
              />
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
