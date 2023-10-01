import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    { navi: "About", to: "/" },
    { navi: "Features", to: "/features" },
    { navi: "Team", to: "/team" },
  ];
  const socials = [
    { soc: "ri-notification-line", src: "" },
    { soc: "ri-facebook-circle-fill", src: "https://www.instagram.com" },
    { soc: "ri-twitter-fill", src: "https://www.instagram.com" },
  ];
  return (
    <nav className="sticky top-0 left-0 grid justify-between items-center bg-[#333] px-2 z-50"
    >
      <div className="grid grid-cols-4 col-start-3 px-2 ">
        <div className="flex justify-center items-center px-4 py-2 border-r-[1px] border-[#47433D] hover:bg-[#000]">
          <img
            src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png"
            className="w-[90px]"
          />
        </div>
        {navigation.map((element) => (
          <div className="flex justify-center items-center px-8 border-r-[1px] border-[#47433D] hover:bg-[#000]">
            <Link
              to={element.to}
              className="text-white text-base uppercase font-[300]"
            >
              {element.navi}
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 col-start-10 col-span-3">
        {socials.map((element) => (
          <div className="flex justify-center items-center px-2 border-[#47433D] hover:bg-[#000] hover:rounded-3xl">
            <Link to={element.src} className="text-white text-xl uppercase">
              <i class={element.soc}></i>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
