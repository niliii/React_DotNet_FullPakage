import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import Destination from "./Destination";

function DestinationList() {
  const { isLoading, error, isSuccess, isError, data } = useGetAllDestinationQuery();

  let content;

  if (isLoading) {
    content = <p>در حال بارگذاری...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => (
      <Destination destination={destination} key={destination.id} />
    ));
  } else if (isError) {
    content = <p className="text-danger">خطا در دریافت اطلاعات</p>;
  }

  return <div className="pt-3 text-black">{content}</div>;
}

export default DestinationList;
