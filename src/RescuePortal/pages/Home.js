import React, { useEffect, useState } from 'react';

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
    <div className="bg-[#2F2D29] text-white min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img
            src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png"
            alt="Logo"
            className="w-12 h-12"
          />
          {/* Navbar Links */}
          <div className="space-x-4">
            <a href="#" className="text-black">
              About
            </a>
            <a href="#" className="text-black">
              Home
            </a>
            <a href="#" className="text-black">
              Features
            </a>
          </div>
        </div>
      </nav>

      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity ${
              imageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 text-center relative z-10">
        <h1 className="text-4xl font-semibold mb-4">Relief Connect</h1>
        <p className="text-white text-2xl mb-6">
          Our mission at Relief Connect is simple yet profound: to empower and uplift flood-affected individuals and communities. We are dedicated to providing immediate aid, including food, shelter, and rescue assistance, to those facing the devastating impacts of floods.

          Motto: "Strength in Solidarity."

          Through our tireless efforts and the support of our dedicated volunteers, we aim to not only alleviate the immediate hardships but also to foster long-term resilience and recovery. Relief Connect is a symbol of compassion, unity, and unwavering commitment to rebuilding lives in the face of adversity.
        </p>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;


