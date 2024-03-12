import React from "react";
import NotAuthorized from "../components/NotAuthorized";

const GuradedRoutes = ({ isAccessable, OnSucces }) => {
  return isAccessable ? <OnSucces /> : <NotAuthorized />;
};

export default GuradedRoutes;
