import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ReqmtDetail = () => {
  const loc = [
    {
      src: "https://images.unsplash.com/photo-1604275689235-fdc521556c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb2QlMjBsb2NhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      req: "Food",
      sub: "Help! I'm stranded in my house due to the flood. Water is rising, and I'm running out of supplies. Urgently need food, water, and shelter. Please send help!",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 justify-center items-center px-12 py-12">
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
              <span className="text-xl text-gray-100 my-2">{element.req}</span>
              <span className="text-sm text-gray-400">{element.sub}</span>
              <div className="px-2 py-2 my-4 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b]">
                <Link
                  to="/signup"
                  className="text-center uppercase text-inherit"
                >
                  Active
                </Link>
              </div>
              <div className="px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b]">
                <Link
                  to="/signup"
                  className="text-center uppercase text-inherit"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </Link>
        ))}
        <div className="grid ml-4 col-span-9 justify-center items-center gap-4 bg-[#c7aa8b] border-2 border-[#2F2D29]">
            <div className="grid grid-cols-12 justify-center items-center px-4 py-4">
                <div className="grid grid-cols-4 col-start-2 bg-gradient-to-t from-[#47433D] to-[#BAAC9A]">
                    <span className="text-2xl">Teams Allocated</span>
                    <span className="text-gray-300"></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReqmtDetail;
