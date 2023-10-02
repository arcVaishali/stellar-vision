import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const CheckReqmt = () => {
  const categories = [
    { cat: "Food" },
    { cat: "Water" },
    { cat: "Food" },
    { cat: "Water" },
  ];
  const loc = [
    {
      src: "https://images.unsplash.com/photo-1604275689235-fdc521556c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Food",
      sub: "Help! I'm stranded in my house due to the flood. Water is rising, and I'm running out of supplies. Urgently need food, water, and shelter. Please send help!",
    },
    {
      src: "https://images.unsplash.com/photo-1609520778163-a16fb3862581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Gasoline",
      sub: "Lost everything in the hurricane. No food, no clean water. Stranded at home. Desperate for help. Please bring supplies. It's getting unbearable.",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661962476059-13543ea45d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Rescue",
      sub: "SOS! Floods have cut us off. No electricity, no way to cook. Kids are hungry, and water supply is contaminated. Begging for food, clean water, and blankets. It's freezing.",
    },
    {
      src: "https://images.unsplash.com/photo-1580974511812-4b7196fa5098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Clean Water",
      sub: "Hurricane aftermath: Stranded, no food, no power. Elderly at home. We're in desperate need of food, water, and medicine. Please send aid. Time is running out.",
    },
    {
      src: "https://images.unsplash.com/photo-1580974511812-4b7196fa5098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Food and Water",
      sub: "Hello, trapped in my house due to the earthquake. Running low on food and water. Can't get out. Please, if anyone can hear me, send essentials. Need immediate assistance.",
    },
    {
      src: "https://images.unsplash.com/photo-1580974511812-4b7196fa5098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Supplies",
      sub: "Stuck in my house after the storm. Can't find food or water anywhere. Please, if there's anyone out there, bring supplies. We're scared and hungry.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 justify-between items-center px-20 py-20 bg-gradient-to-bl from-[#BAAC9A] to-white">
        <div className="grid col-span-7 col-start-2">
          <span
            className="text-4xl uppercase font-semibold"
            style={{
              fontFamily: "'Paytone One', sans-serif",
            }}
          >
            Check Requests
          </span>
        </div>
        <span className="flex col-span-3">
          <input
            id="search"
            type="search"
            placeholder="search here..."
            className="flex bg-white text-gray-500 font-thin px-2 py-2 hover:shadow-[0_0px_12px_12px_rgba(0,0,0,0.2)] rounded-md border-gray-100 shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)]"
          />
          <i class="ri-search-line bg-[#2F2D29] text-white px-4 py-2 rounded-r-md -ml-2 hover:bg-[#c7aa8b] hover:text-[#2F2D29] shadow-[0_2px_10px_10px_rgba(0,0,0,0.1)]"></i>
        </span>
        <div className="grid grid-cols-12 gap-4 col-span-10 justify-center items-center col-start-4 mt-32">
          {categories.map((element) => (
            <div className="grid col-span-2">
              <span className="col-span-3 text-xl text-center uppercase bg-[#2F2D29] text-[#c7aa8b] border-2 border-[#c7aa8b] px-2 py-2 hover:bg-[#c7aa8b] hover:text-[#2F2D29] hover:border-[#2F2D29]">
                {element.cat}
              </span>
            </div>
          ))}
        </div>
        <div className="grid my-16 grid-cols-12 gap-4 col-start-2 col-span-10 justify-center items-center rounded-sm">
          {loc.map((element) => (
            <Link
              to={element.src}
              className="flex flex-col col-span-3 px-4 py-4 shadow-md h-[450px] shadow-[#62553B] rounded-sm border-2 border-[#c7aa8b] bg-gradient-to-t from-[#2F2D29] to-[#47433D] transition ease-in-out delay-50 hover:-translate-y-2 duration-500"
            >
              <div className="flex relative overflow-visible">
                <img
                  src={element.src}
                  className="inset-0 w-64 object-fill object-right z-10 rounded-sm border-2 border-[#c7aa8b]"
                />
                <div className="bg-gray-300 absolute inset-0 z-20 opacity-30 rounded-sm"></div>
                <Link className="flex absolute z-30" to="">
                  <i className="ri-map-pin-user-line text-2xl my-2 mx-2 rounded-md text-[#2F2D29]"></i>
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-gray-100 my-2">
                  {element.req}
                </span>
                <span className="text-sm text-gray-400">{element.sub}</span>
                <div className="px-2 py-2 my-4 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b]">
                  <Link
                    to=""
                    className="text-center uppercase text-inherit"
                  >
                    Active
                  </Link>
                </div>
                <div className="px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b]">
                  <Link
                    to="/req-detail"
                    className="text-center uppercase text-inherit"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckReqmt;
