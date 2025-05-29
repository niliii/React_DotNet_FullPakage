// import React from 'react'
import { handelRemoveAllContact } from "./ContactsIndex";

export default function RemoveAllContact(props) {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.handelRemoveAllContact()}
      >
        Remove All
      </button>
    </div>
  );
}
