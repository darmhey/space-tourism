// Technology.js
"use client";
import TechData from "../../../public/data/techdata";
import { useState, useEffect } from "react";
import Navbar from "../../components/nav/Navbar";
import "./Technology.css";

const Technology = () => {
  const [currentSpace, setCurrentSpace] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop"); // Set the initial screen size

  // Define a function to update the screen size based on the viewport width
  const updateScreenSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      setScreenSize("mobile");
    } else if (screenWidth < 1024) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  // Attach an event listener to update the screen size on window resize
  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="bg-technology-desktop bg-no-repeat bg-cover  w-full h-full pb-24">
      <Navbar />
      <div className="left-one justify-center md:justify-normal pt-20 md:pl-12 text-[20px] flex flex-row gap-x-4 font-Barlow  items-center lg:hidden">
        <div className=" font-bold text-black-accent leading-9">03</div>
        <div className=" text-white leading-9">SPACE LAUNCH 101</div>
      </div>
      <div className="flex flex-col-reverse   lg:grid lg:grid-cols-2 lg:pl-[150px] lg:gap-80 lg:pt-10">
        <div className="grid-left grid ">
          <div className="left-one hidden lg:text-[28px] lg:flex lg:flex-row lg:gap-x-4 font-Barlow  lg:items-center ">
            <div className=" font-bold text-black-accent leading-9">03</div>
            <div className=" text-white leading-9">SPACE LAUNCH 101</div>
          </div>
          <div className="left-two flex flex-col lg:flex-row pt-8 lg:pt-0  gap-x-12">
            <ul className=" text-white flex flex-row justify-center items-center gap-x-4 md:gap-x-6 lg:flex-col lg:gap-x-0 gap-y-6">
              <li
                onClick={() => setCurrentSpace(0)}
                className={`hover:border-2 hover:border-solid hover:border-white border border-solid border-white cursor-pointer flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full ${
                  currentSpace === 0 ? "bg-white text-black" : ""
                }`}
              >
                1
              </li>

              <li
                onClick={() => setCurrentSpace(1)}
                className={`hover:border-2 hover:border-solid hover:border-white border border-solid border-white cursor-pointer flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full ${
                  currentSpace === 1 ? "bg-white text-black" : ""
                }`}
              >
                2
              </li>
              <li
                onClick={() => setCurrentSpace(2)}
                className={`hover:border-2 hover:border-solid hover:border-white border border-solid border-white cursor-pointer flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]  rounded-full ${
                  currentSpace === 2 ? "bg-white text-black" : ""
                }`}
              >
                3
              </li>
            </ul>
            <div className="text-white justify-center items-center pt-8 md:pt-12 text-left flex flex-col lg:justify-normal lg:items-start">
              <p className="font-Barlow text-[14px] md:text-[16px] text-[#D0D6F9]">
                THE TERMINOLOGY...
              </p>
              <h3 className="font-Bellefair text-[24px] md:text-[40px] lg:text-[56px] whitespace-nowrap ">
                {TechData[currentSpace].header}
              </h3>
              <p className="w-[70%] lg:w-[90%] font-Barlow text-[15px] md:text-[18px] text-center lg:text-left text-[#D0D6F9] mt-2 md:mt-6 lg:mt-4">
                {TechData[currentSpace].content}
              </p>
            </div>
          </div>
        </div>
        <div className="grid-right mt-20 w-full lg:mt-60">
          <img
            src={TechData[currentSpace].images[screenSize]}
            alt="space"
            className="right-img w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
