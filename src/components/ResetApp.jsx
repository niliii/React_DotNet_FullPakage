import React from "react";
import { useDispatch } from "react-redux";
import { resetDestination } from "../redux/slice/destinationSlice";
function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterAndDestinaton=()=>{
    dispatch(resetDestination());
  }
  return (
    <div className="text-center pt-5">
      <button
        className="btn btn-warning text-center"
        onClick={resetCounterAndDestinaton}
      >
        ResetApp
      </button>
    </div>
  );
}

export default ResetApp;
