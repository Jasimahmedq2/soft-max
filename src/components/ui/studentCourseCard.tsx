import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "./button";
import image from "../../assests/notepad.png";
import arrow from "../../assests/right-arrow.png";
import { ICourse } from "@/types/interfaces";

const StudentCourseCard = ({ course }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-80 mx-auto">
      {/* <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-48">
        <Image width={300} src={image} alt="profile-picture" />
      </div> */}
      <div className="p-6 text-start">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Status: {" "}{course?.status}
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-400">
          date: {course?.date}
        </p>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-400">
          student:{course?.student}
        </p>
      </div>
    </div>
  );
};

export default StudentCourseCard;
