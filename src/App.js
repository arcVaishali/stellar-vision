import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import Navbar from "./LandingPage/components/Navbar";

import Home from "./RescuePortal/pages/Home"
import Register from "./RescuePortal/pages/Register";
import Location from "./RescuePortal/pages/Location";
import First from "./RescuePortal/pages/Home";


import Requirements from "./RescuePortal/pages/Requirements";
import CheckReqmt from "./RescuePortal/pages/CheckReqmt";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}></Route>

        {/* <Route path="/" element={<Landing />}></Route> */}
      </Routes>
      {/* <Requirements/> */}
       <CheckReqmt/>
    </BrowserRouter>
  );
}


export default App;
