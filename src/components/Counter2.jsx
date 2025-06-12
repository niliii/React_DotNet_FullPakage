import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { increment, decrement ,incrementMultiplier,decrementMultiplier} from "../redux/slice/counterSlice";

import { useState } from "react";


function Counter2() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [muitiPLayer,setMuitiPLayer]=useState(10)

  return (
    <div className="container mt-4 ">
      <div className="row align-items-center border">
        <h4>basic Counter</h4>
        <div className="row">
          <div className="col-4 p-1">
            <input
              type="text"
              placeholder="muitiPLayer"
              className="form-control"
              value={muitiPLayer}
              onChange={(e)=>muitiPLayer(e.target.value)}
            ></input>
          </div>
          <div className="col-4 p-1">
            <button
              className="btn btn-primary form-control"
              onClick={() => dispatch(decrementMultiplier(muitiPLayer))}
            >
              افزودن
            </button>
          </div>

          <div className="col-4 p-1">
            <button
              className="btn btn-danger form-control"
              onClick={() => dispatch(decrementMultiplier(muitiPLayer))}
            >
              کاهش
            </button>
          </div>
          <div className="col-4 p-1"></div>
        </div>

        <div className="col-md-6">
          <h4>Counter: {count}</h4>
        </div>

        <div className="col-md-6 d-flex gap-2"></div>
      </div>{" "}
      &nbsp;
      <div className="row align-items-center border">
        <h4>multi Counter</h4>

        <div className="col-md-6">
          <h4>Counter: {count}</h4>
        </div>

        <div className="col-md-6 d-flex gap-2">
          <button
            className="btn btn-primary form-control"
            onClick={() => dispatch(increment())}
          >
            افزودن
          </button>
          <button
            className="btn btn-danger form-control"
            onClick={() => dispatch(decrement())}
          >
            کاهش
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter2;
