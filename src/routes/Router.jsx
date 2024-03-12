// import React from "react";
// import { Route } from "react-router-dom";
// import App from "../App";
// const Router = () => {
//   return <Route path="/Route" element={<App />}></Route>;
// };
// export default Router;
import App from "../App";
import Main from "../modules/main/pages/Main";
import { teacherRoutes } from "../modules/Teachers/routes/TeachersRoutes";
import { StudentRoutes } from "../modules/students/routes/StudentsRoutes";
export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      ...StudentRoutes,
      ...teacherRoutes,
    ],
  },
];
