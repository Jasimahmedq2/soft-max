import Image from "next/image";
import React from "react";
import facebook from "../../assests/facebook.png";
import linkedin from "../../assests/linkedin.png";
import twitter from "../../assests/twitter.png";

const Instructor = ({
  image,
  name,
  designation,
}: {
  image: string | any;
  name: string;
  designation: string;
}) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-80 mx-auto">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-48">
        <Image width={300} src={image} alt="profile-picture" />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-400">
          {designation}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        <a
          href="#facebook"
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
        >
          <Image width={16} height={16} src={facebook} alt="facebook" />
        </a>
        <a
          href="#twitter"
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
        >
          <Image width={16} height={16} src={linkedin} alt="linkedin" />
        </a>
        <a
          href="#instagram"
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
        >
          <Image width={16} height={16} src={twitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Instructor;
