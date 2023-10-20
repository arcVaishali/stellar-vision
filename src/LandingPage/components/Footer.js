import React from "react";
import { img } from "../../../public/relief-connect-logo-removebg-preview.ico";

function Footer2() {
  return (
    <div>
      <div className="container bg-[#333333] h-24 max-w-full flex justify-around items-center">
        <div className="text-[#858585] flex gap-3">
          <img src={img} alt="ds" />
          <p>Relif Connect</p>
        </div>

        <button className="btn py-2 px-32 rounded-none bg-[#323232] border-2 border-[#C7AA8B] text-[#C7AA8B] font-medium hover:bg-[#C7AA8B] hover:text-[#323232] hover:border-[#323232] hover:border-2">
          Facts
        </button>

        <div className="text-[#858585]">© 2023,All right reserved</div>
      </div>
    </div>
  );
}

export default Footer2;
