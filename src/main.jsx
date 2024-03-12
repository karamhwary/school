import React from "react";

import ReactDOM from "react-dom/client";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Teachers from "../src/modules/Teachers/pages/Teachers";
import Students from "../src/modules/students/pages/Student";
import Main from "./modules/main/pages/Main";
import "./index.css";
import GuradedRoutes from "./routes/GuradedRoutes";

// import { routes } from "./routes/Router";
const isAuthenticated = localStorage.getItem("user");
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {" "}
      <Route
        path="/teachers"
        element={
          <GuradedRoutes
            isAccessable={isAuthenticated}
            OnSucces={() => {
              <Teachers />;
            }}
          />
        }
      ></Route>
      <Route path="/students" element={<Students />}></Route>
      <Route path="/" element={<Main />}></Route>
    </Route>
  )
);

// const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
