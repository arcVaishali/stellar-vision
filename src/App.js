import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import Navbar from "./LandingPage/components/Navbar";
import Home from "./RescuePortal/pages/Home"
import Register from "./RescuePortal/pages/Register";
import Location from "./RescuePortal/pages/Location";
import First from "./RescuePortal/pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
