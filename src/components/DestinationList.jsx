import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { destinationClicked } from "../redux/slice/destinationSlice";

function DestinationList() {
  const destinationList = useSelector(
    (state) => state.destinationStore.destinations
  );
  const dispatch=useDispatch()
  return destinationList.map((destination, index) => {
    return (
      <div className="text-center text-balck row border" key={index}>
        <div className="col-8 col-md-3 offset-md-3 pt-2">
          {destination.name}
        </div>
        <div className="col-4 col-md-2">
          <button
            className="btn btn-success form-control m-1 border"
            onClick={() => dispatch(destinationClicked(destination))}
          >
            Details
          </button>
        </div>
      </div>
    );
  });
}

export default DestinationList;
