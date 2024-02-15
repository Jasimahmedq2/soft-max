"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import study from "../../assests/study.png";
import OfferCard from "./offerCard";
import video from "../../assests/video-editing.png";
import mcq from "../../assests/exam.png";
import live from "../../assests/live.png";
import note from "../../assests/notepad.png";
import note2 from "../../assests/post-it.png";
import offer1 from "../../assests/offer (1).jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Offer = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://i.ibb.co/HDFFXD3/offer-1.jpg"
  );
  const [selectComponent, setSelectComponent] = useState("offer1");
  const textContainer = useRef<React.MutableRefObject<undefined>>();
  useGSAP(
    () => {
      gsap.from(textContainer.current, { x: -360, duration: 2, opacity: 0 });
    },
    { scope: textContainer }
  );
  return (
    <div className="py-12 sm:mt-12 bg-[#ffffff]">
      <div className="sm:w-1/2 text-center mx-auto px-2 sm:px-6 space-y-4 ">
        <h2 className="text-xl lg:text-2xl font-bold">
          What We
          <span className="text-[#1ab69d]">OFFER</span>
        </h2>
        <p className="text-[#6d6f70] font-semibold">
          Unlock endless possibilities with Softmax Online Courses – Empowering
          your journey through immersive and dynamic learning experiences.
        </p>
      </div>
      <div className="sm:flex px-2 sm:px-4 justify-between items-center space-x-4 py-6 sm:pt-12 space-y-4 sm:space-y-0">
        <div ref={textContainer} className="sm:w-1/2 space-y-4">
          <OfferCard
            text="Live and Recorded Classes"
            style={`${
              selectComponent === "offer1" ? "bg-[#1ab69d] text-white" : ""
            } flex max-w-sm  items-center space-x-4 sm:space-x-8 bg-[#eefaf8] hover:bg-[#1ab69d] cursor-pointer p-6 hover:text-white rounded`}
            image={study}
            setCurrentImage={setCurrentImage}
            sentImage="https://i.ibb.co/HDFFXD3/offer-1.jpg"
            setSelectComponent={setSelectComponent}
            offer="offer1"
          />
          <OfferCard
            text="Animated Video"
            style={`${
              selectComponent === "offer2" ? "bg-[#d5334e] text-white" : ""
            } flex max-w-sm  items-center space-x-4 sm:space-x-8 bg-[#fef2f4] hover:bg-[#d5334e] cursor-pointer p-6 hover:text-white rounded`}
            image={video}
            setCurrentImage={setCurrentImage}
            sentImage="https://i.ibb.co/sw44sYn/offer-2.jpg"
            setSelectComponent={setSelectComponent}
            offer="offer2"
          />
          <OfferCard
            text="Practice MCQ Test"
            style={`${
              selectComponent === "offer3" ? "bg-[#53c98e] text-white" : ""
            } flex max-w-sm  items-center space-x-4 sm:space-x-8 bg-[#eefcf5] hover:bg-[#53c98e] cursor-pointer p-6 hover:text-white rounded`}
            image={mcq}
            setCurrentImage={setCurrentImage}
            sentImage="https://i.ibb.co/LSmqCd1/offer-3.jpg"
            setSelectComponent={setSelectComponent}
            offer="offer3"
          />
          <OfferCard
            text="Live MCQ Test"
            style={`${
              selectComponent === "offer4" ? "bg-[#edb844] text-white " : ""
            } flex max-w-sm  items-center space-x-4 sm:space-x-8 bg-[#fffaef] hover:bg-[#edb844] cursor-pointer p-6 hover:text-white rounded`}
            image={live}
            setCurrentImage={setCurrentImage}
            sentImage="https://i.ibb.co/pyHPxJT/offer-4.jpg"
            setSelectComponent={setSelectComponent}
            offer="offer4"
          />
          <OfferCard
            text="Class Note"
            style={`${
              selectComponent === "offer5" ? "bg-[#7150b3] text-white" : ""
            } flex max-w-sm  items-center space-x-4 sm:space-x-8 bg-[#f7f3ff] hover:bg-[#7150b3] cursor-pointer p-6 hover:text-white rounded`}
            image={note}
            setCurrentImage={setCurrentImage}
            sentImage="https://i.ibb.co/60gRJhK/offer-6.jpg"
            setSelectComponent={setSelectComponent}
            offer="offer5"
          />
          <OfferCard
            text="Smart Note"
            style={`${
              selectComponent === "offer6" ? "bg-[#c55895] text-white" : ""
            } flex max-w-sm  items-center space-x-4 sm:space-x-8 bg-[#ffeff8] hover:bg-[#c55895] cursor-pointer p-6 hover:text-white rounded`}
            image={note2}
            setCurrentImage={setCurrentImage}
            sentImage="https://i.ibb.co/Jkw9JHf/offer-5.jpg"
            setSelectComponent={setSelectComponent}
            offer="offer6"
          />
        </div>
        <div className="sm:w-1/2 flex justify-center items-center">
          <Image
            className="max-w-[400px] max-h-[400px] mx-auto rounded shadow"
            src={currentImage}
            width={500}
            height={500}
            alt="offer"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
