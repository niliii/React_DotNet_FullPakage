import React, { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";

function AddDestination() {
  const [newName, setNewName] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newFact, setNewFact] = useState("");
  const [addDestination] = useAddDestinationMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      id: Math.floor(Math.random() * 100000),
      name: newName,
      country: newCountry,
      days: parseInt(Math.random() * 10 + 1),
      fact: newFact,
    };

    addDestination(newDestination)
      .unwrap()
      .then(() => {
        setNewName("");
        setNewCountry("");
        setNewFact("");
      })
      .catch((err) => {
        console.error("Add failed:", err);
      });
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>ثبت مقصد جدید</h4>
          <div className="col-4 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="نام شهر"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="col-4 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="کشور"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
          </div>
          <div className="col-4 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="اطلاعات جالب"
              value={newFact}
              onChange={(e) => setNewFact(e.target.value)}
            />
          </div>
          <div className="col-4 p-1">
            <button className="btn btn-success form-control">افزودن</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
