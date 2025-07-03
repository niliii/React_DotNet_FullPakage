import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../redux/action/action";
function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterAndDestinaton=()=>{
    dispatch(resetReduxOPedia());
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
