import React, { useState } from "react";
import Contact from "./Contact";
const AddContact = ({ handleAddContact ,isUpdating, selectedContact}) => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const handleAddContactFormSubmit = (props) => {
    props.preventDefault();

    const name = props.target.elements.contactName.value.trim();
    const email = props.target.elements.contactEmail.value.trim();
    const phone = props.target.elements.contactPhone.value.trim();

    const newContact = {
      name,
      email,
      phone,
    };
    const response = handleAddContact(newContact);

    if (response.status === "success") {
      setSuccessMessage(response.msg);
      setErrorMessage(undefined);

      props.target.reset();
    } else {
      setErrorMessage(response.msg);
      setSuccessMessage(undefined);
    }
  };
  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleAddContactFormSubmit} className="contact-form">
        <div className="row p-2">
          <div className="col-12 text-black">
            {isUpdating ? "Update Contact" : "Add New Contact"}
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Name..."
              name="contactName"
              defaultValue={selectedContact?.name || ""}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Email..."
              name="contactEmail"
              defaultValue={selectedContact?.email || ""}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Phone..."
              name="contactPhone"
              defaultValue={selectedContact?.phone || ""}
            />
          </div>
          {/* {setErrorMessage === undefined ? (
            <div> </div>
          ) : (
            <div className="col-12 text-center text-denger">
              {setErrorMessage}
            </div>
          )}
          {setSuccessMessage === undefined ? (
            <div> </div>
          ) : (
            <div className="col-12 text-center text-Success">
              {setSuccessMessage}
            </div>
          )} */}

           <div className="col-md-6 offset-md-3 p-1">
          <button className="btn btn-primary form-control" type="submit">
            {isUpdating ? "Update" : "Create"}
          </button>
        </div>
        </div>
        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}
        {setErrorMessage && (
          <div className="alert alert-danger mt-2">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};
export default AddContact;
