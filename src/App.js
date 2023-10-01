import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import Navbar from "./LandingPage/components/Navbar";
import Requirements from "./RescuePortal/pages/Requirements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />}></Route> */}
      </Routes>
      <Requirements/>
    </BrowserRouter>
  );
}

export default App;
