import React, { useState, setState } from "react";
import Header from "../Layout/Header";
import AddRandomComponents from "./AddRandomComponents";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GenerallContacts from "./GenerallContacts";
import Footer from "../Layout/Footer";

export default function ContactsIndex() {
  const [contactListe, setContactListe] = useState([
    {
      id: 1,
      name: "Ali",
      email: "johndoe@gmail.com",
      phone: "1234588888",
      favorite: false,
    },
    {
      id: 2,
      name: "Reza",
      email: "rezae@gmail.com",
      phone: "1234599999",
      favorite: true,
    },
  ]);

  const handleAddContact = (newContact) => {
    const duplicateRecord = contactListe.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id:
          contactListe.length > 0
            ? contactListe[contactListe.length - 1].id + 1
            : 1,
        favorite: false,
      };
      setContactListe((prevContacts) => [...prevContacts, newFinalContact]);
      return { status: "success", msg: "contact was add ok" };
    }
  };

  const handleToggelFavorite = (contact) => {
    setContactListe((prevContacts) =>
      prevContacts.map((obj) => {
        if (obj.id === contact.id) {
          return { ...obj, favorite: !obj.favorite };
        }
        return obj;
      })
    );
  };

  const handleDeleteContact = (contactId) => {
    setContactListe((prevContacts) =>
      prevContacts.filter((obj) => obj.id !== contactId)
    );
  };
  const handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id:
        contactListe.length > 0
          ? contactListe[contactListe.length - 1].id + 1
          : 1,
      favorite: false,
    };
    setContactListe((prevContacts) => [...prevContacts, newFinalContact]);
  };
  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ minHeight: "85vh", overflow: "auto" }}
      >
        <div className="row py-3">
          <div className="col-4 offset-2 row">
            <AddRandomComponents
              handleAddRandomContact={handleAddRandomContact}
            />
          </div>
          <div className="col-4 row">
            <RemoveAllContact />
          </div>

          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <AddContact handleAddContact={handleAddContact} />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <FavoriteContacts
                contacts={contactListe}
                favoriteClick={handleToggelFavorite}
                handleDeleteContact={handleDeleteContact}
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <GenerallContacts
                contacts={contactListe}
                favoriteClick={handleToggelFavorite}
                handleDeleteContact={handleDeleteContact}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
