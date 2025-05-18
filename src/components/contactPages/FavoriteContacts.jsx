import React from "react";
import Contact from "./Contact"

const FavoriteContacts = (props) => {
  const contacts = props.contacts || [];

  return (
    <div>
      {contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};


export default FavoriteContacts;
