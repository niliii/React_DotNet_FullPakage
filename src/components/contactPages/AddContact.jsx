import React, { useState } from "react";

export default function AddContact() {
  const[errorMesage,seterrorMesage]=useState();
  const [successMessage,setSuccessMesage]=useState()
  return (
    <div className="border row  text-white p-2">
      <div className="col-12 text-white-50">Add Nee Contact</div>
      <div className="col-12 col-md-4 p-1">
        <input
          type="text"
          className="form-control form -control-sm"
          placeholder="Name..."
        />
      </div>
      <div className="col-12 col-md-4 p-1">
        <input
          type="text"
          className="form-control form -control-sm"
          placeholder="Email..."
        />
      </div>
      <div className="col-12 col-md-4 p-1">
        <input
          type="text"
          className="form-control form -control-sm"
          placeholder="Phone..."
        />
      </div>
      <div className="col-12 col-md-6 offset-md-3 p-1">
        <button className="btn btn-primary btm-sm form-control">Creat</button>
      </div>
    </div>
  );
}
