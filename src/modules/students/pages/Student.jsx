import { useLoaderData } from "react-router-dom";
import React from "react";
const Student = () => {
  const data = useLoaderData();
  return (
    <div className="row">
      {data.map((item, index) => {
        return (
          <div key={index} className="col-lg-4">
            {item.firstName}
          </div>
        );
      })}
    </div>
  );
};

export default Student;
