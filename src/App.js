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
import ReqmtDetail from "./RescuePortal/pages/ReqmtDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/requirements" element={<Requirements />}></Route>
        <Route path="/check-requests" element={<CheckReqmt />}></Route>
        <Route path="/req-detail" element={<ReqmtDetail />}></Route>
      </Routes>
      {/* <Requirements/> */}
      {/* <CheckReqmt/> */}
      {/* <ReqmtDetail/>
       <CheckReqmt/> */}
    </BrowserRouter>
  );
}


export default App;
