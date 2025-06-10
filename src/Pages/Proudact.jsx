import React, { useState,useEffect } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

const Proudact = () => {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(false);
    useEffect(() => {
    if (goToProduct) {
      navigate("deteails/3");
    }
  }, [goToProduct, navigate]);
  return (
    <div>
      product
      <button
        onClick={() => {
          navigate("creat");
        }}
      >
        Add Product{" "}
      </button>
      <Link to={`/Proudact/deteails/5`}>
        <button>navigate to product details-5</button>
      </Link>
      ~
      <button
        onClick={() => {
          setGoToProduct(true);
        }}
      >
        Navigate to product-3(useState)
      </button>
      <Outlet />
    </div>
  );
};

export default Proudact;
