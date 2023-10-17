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
      <div className="flex flex-col md:flex-row justify-center items-center px-12 py-12 bg-gradient-to-bl from-[#BAAC9A] to-white">
        {loc.map((element) => (
          <Link
            to={element.src}
            className="flex flex-col col-span-4 col-start-2 px-4 py-4 shadow-md h-full shadow-[#62553B] rounded-sm border-2 border-[#c7aa8b] bg-gradient-to-t from-[#2F2D29] to-[#47433D] transition ease-in-out delay-50 hover:-translate-y-2 duration-500"
          >
            <div className="flex relative overflow-visible">
              <img
                src={element.src}
                className="inset-0 w-128 object-fill object-right z-10 rounded-sm border-2 border-[#c7aa8b]"
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
                <Link to="/" className="text-center uppercase text-inherit">
                  Active
                </Link>
              </div>
              <div className="px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b]">
                <Link to="/" className="text-center uppercase text-inherit">
                  Join
                </Link>
              </div>
            </div>
          </Link>
        ))}
        <div className="grid ml-4 col-span-6 justify-center items-center gap-4 border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
          <div className="flex relative overflow-visible">
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <div className="bg-gray-300 absolute inset-0 z-20 opacity-30 rounded-sm"></div>
            <Link className="flex absolute z-30" to="">
              <i className="ri-map-pin-user-line text-2xl my-2 mx-2 rounded-md text-[#2F2D29]"></i>
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-4 justify-center items-center px-4 py-4">
            <div className="grid col-span-3 justify-center items-center px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center h-[100px]">
              <span className="text-xl text-[#323232]">Teams Allocated</span>
              <span className="text-[#323232] font-extralight font-sm">
                Team A
              </span>
              <span className="text-[#323232] font-extralight font-sm">
                Team B
              </span>
            </div>
            <div className="grid col-span-3 justify-center items-center px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center h-[100px]">
              <span className="text-xl text-[#323232]">Personnels lead by</span>
              <span className="text-[#323232] font-extralight font-sm">
                Shruti
              </span>
              <span className="text-[#323232] font-extralight font-sm">
                Shreya
              </span>
            </div>

            <div className="px-2 py-2 my-4 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b] w-[150px] col-span-2 col-start-2">
              <Link to="/signup" className="text-center uppercase text-inherit">
                Success
              </Link>
            </div>
            <div className="px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b] w-[150px]">
              <Link to="/signup" className="text-center uppercase text-inherit">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqmtDetail;
