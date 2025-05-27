import React from "react";
import Contact from "./Contact";

const GeneralContacts = ({contacts, favoriteClick,handleDeleteContact}) => {
  const contactList = contacts || [];

  return (
    <div className="col-12 py-2">
      <div className="text-center text-black">General Contacts</div>
      <div className="row">
        {contactList.map((c) => (
          <Contact key={c.id} contact={c} favoriteClick={favoriteClick} deleteContact={handleDeleteContact} />
        ))}
      </div>
    </div>
  );
};

export default GeneralContacts;
