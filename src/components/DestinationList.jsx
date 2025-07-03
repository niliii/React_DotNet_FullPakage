import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function DestinationList() {
  const { isLoading, error, isSuccess, isError, data } = useGetAllDestinationQuery();
  const [deleteDestination] = useDeleteDestinationMutation();

  let content;
  
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    // بررسی نوع داده‌ها
    console.log(data); // بررسی داده‌ها
    if (Array.isArray(data)) {
      content = data.map((destination) => {
        return (
          <div className="row py-1" key={destination.id} style={{ borderBottom: "1px solid #333" }}>
            <div className="col-3 offset-3">
              {destination.daysNeeded}, {destination.city}
            </div>
            <div className="col-1 text-warning">{destination.country} days</div>
            <div className="col-2">
              <button
                className="btn form-control btn-danger"
                onClick={() => deleteDestination(destination.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      });
    } else {
      content = <p>No destinations found.</p>; // اگر داده‌ها آرایه نیستند
    }
  } else if (isError) {
    content = <p>{error?.message || "An error occurred"}</p>; // پیام خطا را رندر کنید
  }

  return <div className="pt-3 text-black">{content}</div>;
}

export default DestinationList;
