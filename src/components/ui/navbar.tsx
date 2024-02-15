import Image from "next/image";
import React from "react";
import phone from "../../assests/phone-call.png";
import email from "../../assests/email.png";
import rightArrow from "../../assests/right-arrow.png";
import Link from "next/link";
import { Button } from "./button";
import { Modal } from "./Modal";

const NavbarComponent = () => {
  return (
    <>
      <div className="sm:flex  justify-between items-center  bg-[#232323] px-6 sm:px-8 space-y-2 sm:space-y-0 py-2">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex items-center space-x-3">
            <Image width={16} height={16} src={phone} alt="phone" />
            <p className="sm:font-bold text-sm sm:text-lg text-[#adadad] hover:text-white">
              {" "}
              <span>Call : </span>+8801794274148
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Image width={16} height={16} src={email} alt="email" />
            <p className="sm:font-bold text-sm sm:text-lg text-[#adadad] hover:text-white">
              {" "}
              <span>Email : </span>jasim.dev48@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4 sm:space-x-6">
          <div className="group">
            <Button className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] sm:space-x-2">
              <span className="text-[#f7fdfc] sm:font-bold">See Courses</span>
              <Image width={16} height={16} src={rightArrow} alt="arrow" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
