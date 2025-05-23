import React, { useState } from "react";

const AddContact = ({ handleAddContact }) => {
   const [  , setErrorMessage] = useState(undefined);
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
     const response= handleAddContact(newContact);
   
    if (response.status==="success"){
       setSuccessMessage(response.msg)
      document.querySelector(".contact-form").reset()
      }else{
      setErrorMessage(response.msg)
          }
  }
  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleAddContactFormSubmit} className="contact-form">
        <div className="row p-2">
          <div className="col-12 text-black">Add New Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Name..."
              name="contactName"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Email..."
              name="contactEmail"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Phone..."
              name="contactPhone"
            />
          </div>
          {setErrorMessage==undefined?(<div> </div>):
       (   <div className="col-12 text-center text-denger">
            {setErrorMessage}
             </div>)}
              {setSuccessMessage==undefined?(<div> </div>):
          (<div className="col-12 text-center text-Success">
            {setSuccessMessage }
             </div>)}
             
          
          
          <div className="col-12 col-md-6 offset-md-3 p-1">
            <button className="btn btn-primary btn-sm form-control">Create</button>
          </div>
        </div>
        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}
        {setErrorMessage && (
          <div className="alert alert-danger mt-2">{setErrorMessage}</div>
        )}
      </form>
    </div>
  );
};
export default AddContact;
