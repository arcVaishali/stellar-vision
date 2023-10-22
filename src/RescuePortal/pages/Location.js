import React from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"

const Location = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gradient-to-bl from-[#BAAC9A] to-white flex flex-col items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 absolute top-4 right-4 cursor-pointer"
        >
          <path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
        </svg>

        <div className="grid grid-cols-3 gap-4 mt-12">
          <Link to="/requirements" className="relative border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
            <div className="absolute top-2 left-2 cursor-pointer">
              {/* Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <p className="mt-2">kerela</p>
          </Link>

          {/* Location Square 2 */}
          <div className="relative border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
            <div className="absolute top-2 left-2 cursor-pointer">
              {/* Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <p className="mt-2">West Bengal</p>
          </div>

          {/* Location Square 3 */}
          <div className="relative border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
            <div className="absolute top-2 left-2 cursor-pointer">
              {/* Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <p className="mt-2">Orissa</p>
          </div>
          {/* Location Square 4 */}
          <div className="relative border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
            <div className="absolute top-2 left-2 cursor-pointer">
              {/* Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <p className="mt-2">Andhra Pradesh</p>
          </div>
          {/* Location Square 5 */}

          <div className="relative border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
            <div className="absolute top-2 left-2 cursor-pointer">
              {/* Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <p className="mt-2">Gujrat</p>
          </div>
          {/* Location Square 6 */}
          <div className="relative border-2 border-[#c7aa8b] bg-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500">
            <div className="absolute top-2 left-2 cursor-pointer">
              {/* Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <iframe
              width="100%"
              height="400px"
              src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
              title="Outdoors-copy"
              style={{ border: "none" }}
            ></iframe>
            <p className="mt-2">Assam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
