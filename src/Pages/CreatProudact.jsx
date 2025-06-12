import React from 'react'
import { useNavigate, Outlet, Link } from "react-router-dom";
function CreatProudact() {
    const navigate = useNavigate();

  return (
    <div>
         <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  )
}

export default CreatProudact