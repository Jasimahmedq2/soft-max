"use client";
import React, { useRef } from "react";
import aboutImage from "../../assests/study.jpg";
import award from "../../assests/award.png";
import checkmark from "../../assests/checkmark.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutUs = () => {
  const textContainer = useRef();
  const textContainer2 = useRef();
  useGSAP(
    () => {
      gsap.to([textContainer.current], {
        y: 60, // Move from top to bottom
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.from(textContainer2.current, { y: 360, duration: 2, opacity: 0 });
    },
    { scope: textContainer }
  ); 
  return (
    <div className="mt-20 py-12 sm:space-x-6 px-2 sm:px-4 sm:flex justify-between bg-[#fefefe]">
      <div className="relative sm:w-1/2">
        <Image className="rounded" src={aboutImage} width={400} height={400} alt="image" />
        <div
          ref={textContainer}
          className="absolute z-10 bottom-0 -right-2 flex justify-center items-center  bg-white shadow-lg space-x-4 w-[300px] border border-gray-300 p-4"
        >
          <Image width={30} height={30} src={award} alt="email" />
          <div className="text-start">
            <h2 className="text-xl lg:text-2xl font-bold text-[#46b3fd]">30</h2>
            <p className="text-[#6d6f70] text-lg font-semibold">
              Winning Awards
            </p>
          </div>
        </div>
      </div>
      <div ref={textContainer2} className=" py-16 sm:py-0 sm:w-1/2">
        <div className=" space-y-4 ">
          <p className="text-[#6d6f70] font-semibold">About Us</p>
          <h2 className="text-xl lg:text-2xl font-bold">
            Learn & Grow Your Skills From{" "}
            <span className="text-[#1ab69d]">SoftMax</span>
          </h2>
          <p className="text-[#6d6f70] font-semibold">
            Unlock endless possibilities with Softmax Online Courses –
            Empowering your journey through immersive and dynamic learning
            experiences.
          </p>
        </div>
        <div className="py-6 space-y-6">
          <div className="flex items-center space-x-4">
            <Image width={30} height={30} src={checkmark} alt="checkmark" />
            <p className="text-[#6d6f70] font-semibold">
              Master Your Skills Anytime, Anywhere.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Image width={30} height={30} src={checkmark} alt="checkmark" />
            <p className="text-[#6d6f70] font-semibold">
              Unlock Your Potential with Expert-led Training.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Image width={30} height={30} src={checkmark} alt="checkmark" />
            <p className="text-[#6d6f70] font-semibold">
              Elevate Your Knowledge with Lifelong Learning.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Image width={30} height={30} src={checkmark} alt="checkmark" />
            <p className="text-[#6d6f70] font-semibold">
              Learn, Grow, Succeed – Anytime, Anywhere.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Image width={30} height={30} src={checkmark} alt="checkmark" />
            <p className="text-[#6d6f70] font-semibold">
              Empower Your Future through Remote Education.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Image width={30} height={30} src={checkmark} alt="checkmark" />
            <p className="text-[#6d6f70] font-semibold">
              Knowledge Without Boundaries, Learn from Any Location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
