import React from "react";
import Navbar from "./components/Navbar";
import MyCarousel from "./components/MyCarousel";
import { TeamCard } from "./components/TeamCard";
import HistoryDiv from "./components/HistoryDiv";


const navigation = [
  { id: 1, navi: "Home", to: "/" },
  { id: 2, navi: "Work", to: "/register" },
  { id: 3, navi: "Contact", to: "/contact" },
];
const socials = [
  { id: 1, soc: "ri-facebook-circle-fill", src: "https://www.instagram.com" },
  { id: 2, soc: "ri-twitter-fill", src: "https://www.instagram.com" },
];

const Landing = () => {
  return (
  
    <>
      <Navbar />
      <MyCarousel />
      <div className="bg-[#c7aa8b] flex justify-center flex-row flex-wrap py-20 px-[20%]">
        <div className="flex flex-col text-[#4d4d4d] basis-[200px] grow px-3">
          <div className="text-[21px] text-center uppercase mb-6 pt-6 border-t-[rgba(50,50,50,0.13)] border-t border-solid">
            Responsibility
          </div>
          <img
            src="lightbulb_white.svg"
            className="h-[109px] mb-6"
            alt="light_bulb"
          />
          <p>
            Unite Disaster Relief collect donations and funds to assist
            displaced families with relief in areas affected by weather related
            natural disasters (i.e. earthquakes, wildfires, floods, hurricanes,
            blizzards, tsunamis, typhoons, tornado, etc.​) ​that insurance or
            other organizations are not equipped to immediately remedy or
            otherwise do not cover.
          </p>
        </div>
        <div className="flex flex-col text-[#4d4d4d] basis-[200px] grow px-3">
          <div className="text-[21px] text-center uppercase mb-6 pt-6 border-t-[rgba(50,50,50,0.13)] border-t border-solid">
            Effectiveness
          </div>
          <img
            src="tools_white.svg"
            className="h-[109px] mb-6"
            alt="light_bulb"
          />
          <p>
          Unite Disaster Relief commits 100% of every donated dollar is directly benefits families who have have been displaced from their homes due to natural disaster.  From your good heart, directly to families, where it belongs.
          </p>
        </div>
        <div className="flex flex-col text-[#4d4d4d] basis-[200px] grow px-3">
          <div className="text-[21px] text-center uppercase mb-6 pt-6 border-t-[rgba(50,50,50,0.13)] border-t border-solid">
            Performance
          </div>
          <img
            src="linegraph_white.svg"
            className="h-[109px] mb-6"
            alt="light_bulb"
          />
          <p>
          ​Our priority is to assist displaced families with feeling as comfortable as possible, while they are in transition of getting their lives as close to normal and back on track.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="imagebg flex justify-center text-[#c7aa8b] leading-[55px] w-full font-medium text-[35px] py-[128px] px-[15%] mt-0 mb-2.5">
          “The purpose of life is not to be happy. It is to be useful, to be
          honorable, to be compassionate, to have it make some difference that
          you have lived and lived well.”
          <br /> --- Ralph Waldo Emerson
        </div>
      </div>
      <div className="text-[#4d4d4d] py-20 px-[15%]">
        <div className="text-3xl leading-[27px] font-bold mb-4">THE TEAM</div>
        <div className="flex flex-row">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
      <div className="flex items-center flex-col bg-[#f7f7f7] text-xl text-[#4d4d4d] py-20">
        <div className="text-[rgba(50,50,50,0.36)] text-base border-b-2 border-b-[rgba(50,50,50,0.36)] border-solid pb-2 mb-5">
          HISTORY
        </div>
        <HistoryDiv />
      </div>
    </>
  );
};

export default Landing;
