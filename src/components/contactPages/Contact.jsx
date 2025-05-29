import React from "react";
import akhbar from "../../images/akhbar.png";
import { useState } from "react";
const Contact = ({
  contact,
  favoriteClick,
  props,
  deleteContact,
  updateClick,
}) => {
  // const [favoriteClick, setfavoriteClick]=useState("")
  return (
    <div
      className="row align-items-center p-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 col-md-1">
        <img src={akhbar} alt="" style={{ width: "60px" }} />
      </div>

      <div className="col-6 col-md-5 text-warning">
        <span className="h5">{contact.name}</span>
        <div className="text-black">
          {contact.email}
          <br />
          {contact.phone}
        </div>
      </div>

      <div className="col-1 text-center">
        <button
          className={`btn btn-sm ${
            contact.isFaverite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => favoriteClick(contact)}
        >
          <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
        </button>
      </div>

      <div className="col-1 text-center">
        <button className="btn btn-sm btn-primary">
          <i
            className="bi bi-pencil"
            style={{ fontSize: "1rem" }}
            onClick={() => updateClick(contact)}
          ></i>
        </button>
      </div>

      <div className="col-1 text-center">
        <button
          className={`btn btn-sm btn-danger ${
            contact.isDelete ? "btn-danger " : "btn-outline-warning"
          }`}
        >
          <i
            className="bi bi-trash-fill"
            style={{ fontSize: "1rem" }}
            onClick={() => deleteContact(contact.id)}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
