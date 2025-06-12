import React from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
function ProudactList() {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          navigate("creat");
        }}
      >
        Add Product{" "}
      </button>
    </div>
  );
}

export default ProudactList;
