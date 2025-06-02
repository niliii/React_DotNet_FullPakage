import React, { useEffect } from "react";
import { getRandomUser } from "../../Utility/api";

export default function Exercis() {
  useEffect(() => {
    console.log("component did mount");
    const fetchData = async () => {
      const response = await getRandomUser();
      console.log(response);
    };
    fetchData();

    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("component did update");
  });

  return <div>Exercis</div>;
}
