import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "@material-tailwind/react";

export default class MyCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      speed: 600,
      autoplaySpeed: 6000,
      cssEase: "linear",
      nextArrow: <></>,
      prevArrow: <></>,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="flex flex-col items-center imgbg1 py-20">
              <div className="text-white text-[68px] leading-[66px] not-italic font-light uppercase mb-3">
                UNITE
              </div>
              <div className="text-white text-[68px] leading-[66px] not-italic font-bold uppercase mb-3">
                PUERTO RICO
              </div>
              <div className="w-[60px] h-0.5 bg-white"></div>
              <div className="text-[hsla(0,0%,100%,0.81)] text-xl italic font-bold mb-11 pt-4 vollkorn tshadow">
                Land of the Valient Lord
              </div>
              <Button className="custom-bttn text-white text-lg w-32 h-12 z-10">
                Donate
              </Button>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center imgbg2 py-20">
              <div className="text-white text-[68px] leading-[66px] not-italic font-light uppercase mb-3">
                HOUSTON STRONG
              </div>
              <div className="text-white text-[68px] leading-[66px] not-italic font-bold uppercase mb-3">
                HOUSTON
              </div>
              <div className="w-[60px] h-0.5 bg-white"></div>
              <div className="text-[hsla(0,0%,100%,0.81)] text-xl italic font-bold mb-11 pt-4 vollkorn tshadow">
                It’s about content and originality. That’s what it’s about.
              </div>
              <Button className="custom-bttn text-white text-lg w-32 h-12 z-10">
                Donate
              </Button>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center imgbg3 py-20">
              <div className="text-white text-[68px] leading-[66px] not-italic font-light uppercase mb-3">
                HAITI
              </div>
              <div className="text-white text-[68px] leading-[66px] not-italic font-bold uppercase mb-3">
                UNITY MAKES STRENGTH
              </div>
              <div className="w-[60px] h-0.5 bg-white"></div>
              <div className="text-[hsla(0,0%,100%,0.81)] text-xl italic font-bold mb-11 pt-4 vollkorn tshadow">
                "Liberty, Equality, Fraternity."
              </div>
              <Button className="custom-bttn text-white text-lg w-32 h-12 z-10">
                Donate
              </Button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
