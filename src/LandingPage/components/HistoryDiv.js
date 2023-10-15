import React, { Component } from "react";
import Slider from "react-slick";

import "../stylesheets/slick.css";
import "../stylesheets/slick-theme.css";

export default class HistoryDiv extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>,
      prevArrow: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="w-[70%]">
        <Slider {...settings}>
          <div className="px-4 text-center">
            <p className="m-4 text-lg italic vallkorn">
              As resident of Houston Texas, I've witness first hand the
              horrifying affects that Hurricane Harvey left behind. The
              devastation was not only Houston but other areas of Texas who
              don't receive the support as larger cities.{" "}
            </p>
            <div className="text-[#c7aa8b]">AUGUST 2017</div>
          </div>
          <div className="px-4 text-center">
            <p className="m-4 text-lg italic vallkorn">
              As resident of Houston Texas, I've witness first hand the
              horrifying affects that Hurricane Harvey left behind. The
              devastation was not only Houston but other areas of Texas who
              don't receive the support as larger cities.{" "}
            </p>
            <div className="text-[#c7aa8b]">AUGUST 2017</div>
          </div>
          <div className="px-4 text-center">
            <p className="m-4 text-lg italic vallkorn">
              As resident of Houston Texas, I've witness first hand the
              horrifying affects that Hurricane Harvey left behind. The
              devastation was not only Houston but other areas of Texas who
              don't receive the support as larger cities.{" "}
            </p>
            <div className="text-[#c7aa8b]">AUGUST 2017</div>
          </div>
          <div className="px-4 text-center">
            <p className="m-4 text-lg italic vallkorn">
              As resident of Houston Texas, I've witness first hand the
              horrifying affects that Hurricane Harvey left behind. The
              devastation was not only Houston but other areas of Texas who
              don't receive the support as larger cities.{" "}
            </p>
            <div className="text-[#c7aa8b]">AUGUST 2017</div>
          </div>
        </Slider>
      </div>
    );
  }
}
