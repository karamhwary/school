import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Teachers = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((res) => setData(res.products));
  // }, []);
  return (
    <div className="row">
      {data.map((item, index) => {
        return (
          <div key={index} className="col-lg-4">
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Teachers;
