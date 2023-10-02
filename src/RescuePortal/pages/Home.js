import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://pbs.twimg.com/media/F0-JzEzakAE1-V9.jpg",
    "https://cdn.pixabay.com/photo/2013/06/08/14/19/high-water-123219_1280.jpg",
    "https://www.ready.gov/sites/default/files/2020-04/Flooded-neighborhood_1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 relative overflow-visible col-span-12 justify-center items-center mb-8">
        <img
          // src="https://plus.unsplash.com/premium_photo-1663076063751-80c3da778a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGZpcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          // src="https://images.unsplash.com/photo-1602980068989-cb21869ab2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZpcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          src="https://plus.unsplash.com/premium_photo-1661962514590-7cfa4f3d446d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvb2RzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          className="col-span-12 inset-0 h-[100vh] w-full object-fill object-right z-0 md:object-center"
        />
        <div className="bg-black opacity-40 absolute inset-0 z-10"></div>
        <div className="flex flex-col col-span-6 col-start-2 absolute mx-auto max-w-7xl z-20">
          <span
            className="text-7xl text-gray-300 uppercase"
            style={{
              fontFamily: "'Paytone One', sans-serif",
              textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
            }}
          >
            Relief Connect
          </span>
          <span className="text-xl mt-4 text-gray-400">
            This is a disaster relief and rescue aid. It aims to reduce the
            issue of fragmented response by various organizations during the
            times of natural calamity.
          </span>
          <div className="px-2 py-2 my-4 border-4 border-white bg-transparent w-32  text-white text-center hover:bg-white hover:border-gray-300 hover:shadow-md hover:shadow-gray-500 hover:text-inherit">
            <Link to="/register" className="uppercase">
              Register
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#2F2D29] text-white min-h-screen relative overflow-hidden"> */}
      {/* Navigation Bar */}

      {/* Slideshow */}
      {/* <div className="absolute inset-0 z-0">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity ${
              imageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        ))}
      </div> */}

      {/* Main Content */}
      {/* <div className="container mx-auto py-16 text-center relative z-10">
        <h1 className="text-4xl font-semibold mb-4">Relief Connect</h1>
        <p className="text-white text-2xl mb-6">
          Our mission at Relief Connect is simple yet profound: to empower and uplift flood-affected individuals and communities. We are dedicated to providing immediate aid, including food, shelter, and rescue assistance, to those facing the devastating impacts of floods.

          Motto: "Strength in Solidarity."

          Through our tireless efforts and the support of our dedicated volunteers, we aim to not only alleviate the immediate hardships but also to foster long-term resilience and recovery. Relief Connect is a symbol of compassion, unity, and unwavering commitment to rebuilding lives in the face of adversity.
        </p>
        <a
          href="#"
          className="px-2 py-2 border-2 border-[#c7aa8b] bg-[#c7aa8b] text-center hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b]"     >
          Get Started as Emergency Responder
        </a>
      </div>
    </div> */}
    </div>
  );
};

export default Home;
