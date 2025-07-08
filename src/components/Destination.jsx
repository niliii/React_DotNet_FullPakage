import React, { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationApi";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [isupdating, setIsUpdating] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [updateDestination] = useUpdateDestinationMutation();
  const handleDelete = () => {
    deleteDestination(destination.id)
      .unwrap()
      .then(() => {
        console.log("حذف شد:", destination.id);
      })
      .catch((err) => {
        console.error("حذف ناموفق:", err);
      });
  };

  const handelUpdate = () => {
    let name = "",
      country = "";
    if (newName === "") {
      name = destination.name;
    } else {
      name = newName;
    }
    if (newCountry === "") {
      country = destination.country;
    } else {
      country = newCountry;
    }
    updateDestination({
      id: destination.id,
      name: name,
      country: country,
      days: destination.days,
    });

    setNewCountry("", setNewName(""), setIsUpdating(!isupdating));
  };

  return (
    <div className="row py-1" style={{ borderBottom: "1px solid #333" }}>
      <div className="col-1 offset-2">
        <strong>{destination.name}</strong>
        {destination.name}
      </div>
      <div className="col-3 text-muted">
        {isupdating ? (
          <input
            type="text"
            placeholder="name..."
            className="form-control"
            defaultValue={destination.name}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          ></input>
        ) : (
          <span>{destination.name}</span>
        )}
        {/* {destination.fact} (⏱ {destination.days} روز) */}
      </div>
      <div className="col-2">
        {isupdating ? (
          <input
            type="text"
            placeholder="country..."
            className="form-control"
            defaultValue={destination.country}
            onChange={(e) => {
              setNewCountry(e.target.value);
            }}
          ></input>
        ) : (
          <span>{destination.country}</span>
        )}
      </div>
      <div className="col-2">
        {" "}
        {destination.fact} (⏱ {destination.days} روز)
      </div>

      <div className="col-2">
        {" "}
        <button
          className="btn btn-warning m-1"
          onClick={() => setIsUpdating(!isupdating)}
        >
          {isupdating ? "کنسل" : "ویرایش"}
        </button>
        {isupdating ? (
          <button className="btn btn-primary" onClick={() => handelUpdate()}>
            update
          </button>
        ) : (
          ""
        )}
        <button className="btn btn-danger m-1" onClick={handleDelete}>
          حذف
        </button>
      </div>
    </div>
  );
}

export default Destination;
