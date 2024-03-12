import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./components/Navs/HomeNavbar";
import { Outlet } from "react-router-dom";
import Homefooter from "./components/Footers/Homefooter";
function App() {
  return (
    <>
      <HomeNavbar />
      <Outlet />
      <Homefooter />
    </>
  );
}
export default App;
