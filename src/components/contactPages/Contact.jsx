import React from "react";
import akhbar from "../../images/akhbar.png";

const Contact = ({ contact }) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555 " }}
    >
      <div className="col-2 col-md-1 pt-2 pt-md-1">
        <img src={akhbar} alt="" style={{ width: "100px" }} />
      </div>
      <button className="btn btn-secondary form-control">
        {/* <h5>{contact.name}</h5>
          <h3>{contact.email}</h3> */}
        <div className="col-6 col-md-5 text-warning pt-0">
          <span className="h4">{contact.name}</span>
          <br />
          <div className="text-white-50 ">
            {contact.email}
            <br />
            {contact.phone}
          </div>
        </div>
        <div className="col-6 col-md-5 text-warning pt-0">
          <button className={`btn btn-sm m-1 ${
            contact.isFaverite? "btn-warning":"btn-outline-warning"
          }`}>
            <i class="bi bi-star" style={{fontSize:"1rem"}}></i>
          </button>
        </div>
      </button>
    </div>
  );
};
export default Contact;
