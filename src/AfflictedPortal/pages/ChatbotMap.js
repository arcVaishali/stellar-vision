import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../RescuePortal/components/Navbar";

const ChatbotMap = () => {
  // window.Trengo = window.Trengo || {};
  // window.Trengo.key = "1UaTZfpBwbkiQEoSCIf3";
  // (function (d, script, t) {
  //   script = d.createElement("script");
  //   script.type = "text/javascript";
  //   script.async = true;
  //   script.src = "https://cdn.widget.trengo.eu/embed.js";
  //   d.getElementsByTagName("head")[0].appendChild(script);
  // })(document);
  // useEffect(() => {
  //   window.Trengo = window.Trengo || {};
  //   window.Trengo.key = "865mZppwDbFAvBctO1Wg";

  //   const script = document.createElement("script");
  //   // (function (d, script, t) {
  //   //   script = d.createElement("script");
  //   //   script.type = "text/javascript";
  //   //   script.async = true;
  //   //   script.src = "https://cdn.widget.trengo.eu/embed.js";
  //   //   d.getElementsByTagName("head")[0].appendChild(script);
  //   // })(document);

  //   script.src = "https://cdn.widget.trengo.eu/embed.js";
  //   script.type = "text/javascript";
  //   script.async = true;

  // script.integrity =
  //   "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";

  // script.crossOrigin = "anonymous";

  //   document.body.appendChild(script);

  //   return () => {
  //     // clean up the script when the component in unmounted
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-bl from-[#BAAC9A] to-white min-h-screen flex flex-col md:flex-row  items-center ">
        <iframe
          src="https://interfaces.zapier.com/embed/page/cln8u9sdc126100omji5mstydq?noBackground=true"
          className="shadow-md h-[450px] shadow-[#62553B] rounded-xl border-2 border-[#c7aa8b] bg-gradient-to-t from-[#2F2D29] to-[#47433D] transition ease-in-out delay-50 hover:-translate-y-2 duration-500"
          style={{
            position: "relative",
            left: "50px",
            backgroundColor: "#2F2D29",
            maxWidth: "600px",
            width: "100%",
            height: "400px",
          }}
        ></iframe>
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <span
            className="border-2 border-[#c7aa8b] bg-[#323232] text-center hover:bg-transparent hover:border-[#323232] hover:shadow-md hover:shadow-gray-500 hover:text-[#323232] shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500 text-[#c7aa8b] uppercase"
            style={{
              position: "relative",
              left: "250px",
              bottom: "30px",
            }}
          >
            Your live location
          </span>
          <iframe
            width="400px"
            height="400px"
            src="https://api.mapbox.com/styles/v1/vaishali0xe/clk19r14k00cz01pf1o4a4zhw.html?title=false&access_token=pk.eyJ1IjoidmFpc2hhbGkweGUiLCJhIjoiY2xrMThpb21sMDU3bDNncnljY2lob3ZrZyJ9.7duGj5Vt6Q4gSgTT9d4b6Q&zoomwheel=false#8.05/28.658/77.481"
            title="Outdoors-copy"
            style={{
              position: "relative",
              left: "100px",
              maxWidth: "500px",
              width: "100%",
              height: "400px",
            }}
            className="border-2 border-[#c7aa8b] bg-[#323232] rounded-xl  shadow-md shadow-[#62553B] px-4 py-4 transition ease-in-out delay-50 hover:-translate-y-2 duration-500"
          >
            {" "}
          </iframe>
        </div>
      </div>
    </>
  );
};

export default ChatbotMap;
