import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-5 bg-[#333]">
      <div className="mx-auto max-w-5xl flex flex-col justify-between items-center md:flex-row gap-4">
        <div className="p-4">
          <img
            src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png"
            alt="footerlogoomg"
            className="w-24 mx-auto"
          />
          <p className="text-sm text-[#999]"> Unite Disaster Relief </p>
        </div>
        <button
          type="button"
          className="factsfooter border border-[#c7aa8b] px-12 py-3 text-[#c7aa8b] hover:bg-[#c7aa8b] hover:text-[#333] uppercase"
        >
          <NavLink to="/contact"> Contact Us</NavLink>
        </button>
        <p className="footerlast text-[#999]">
          4434 University Drive #170-117, Houston TX, 77204
        </p>
      </div>
    </footer>
  );
};

export default Footer;
