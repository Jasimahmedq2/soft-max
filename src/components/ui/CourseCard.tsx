import Image from "next/image";
import React from "react";
import { Button } from "./button";
import image from "../../assests/notepad.png";
import arrow from "../../assests/right-arrow.png";

const CourseCard = () => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-80 mx-auto">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-48">
        <Image width={300} src={image} alt="profile-picture" />
      </div>
      <div className="p-6 text-start">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          CourseName
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-400">
          descritpion
        </p>
      </div>
      <div className="flex items-center justify-end">
        <Button className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 py-6 rounded">
          <span className="text-[#f7fdfc] font-bold">Enroll</span>
          <Image width={16} height={16} src={arrow} alt="arrow" />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
