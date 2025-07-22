import React from "react";
import { profileData } from "../constants/portfolioData";
import demo from "../assets/demo.png";
import Stats from "./stats"; // Import the Stats component

const Hero = () => {
  return (
    <div className="hero w-full bg-blue-950 min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 leading-tight">
            Engineering Excellence Through Education
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            {profileData.summary}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button className="btn btn-primary shadow-none btn-xl w-full md:w-auto">
              <a
                href="https://www.linkedin.com/in/subrata-bag-547091293/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shadow-none btn-xl w-full md:w-auto flex items-center justify-center"
              >
                Get in Touch
              </a>

            </button>
            <button className="btn btn-primary shadow-none btn-soft btn-xl w-full md:w-auto">
              <a
                href="/Resume subrata.pdf"
                download="Resume subrata.pdf"

              >
                Download CV
              </a>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <div className="relative w-3/4 h-64 md:h-3/4 rounded-lg overflow-hidden shadow-lg group">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={demo}
              alt="img"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <div className="text-center text-white px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Subrata Bag
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  {profileData.currentPosition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-950 py-8 hidden sm:block">
        <Stats /> {/* Use the Stats component here */}
      </div>
    </div>
  );
};

export default Hero;