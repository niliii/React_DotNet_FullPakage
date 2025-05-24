import React from "react";
import Contact from "./Contact";

const GeneralContacts = ({ contacts }) => {
  const contactList = contacts || [];
   

  return (
    <div className="col-12 py-2">
      <div className="text-center text-black">General Contacts</div>
      <div className="row">
        {contactList.map((contact, index) => (
          <Contact contact={contact} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GeneralContacts;
