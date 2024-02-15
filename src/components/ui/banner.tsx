"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import arrow from "../../assests/right-arrow.png";
import stundent from "../../assests/student.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const sectionRef = useRef();
  const textContainer = useRef<React.MutableRefObject<undefined>>();
  const textContaine2 = useRef<React.MutableRefObject<undefined>>();
  useGSAP(
    () => {
      gsap.from(textContainer.current, { y: 360, duration: 2, opacity: 0 });
      gsap.from(textContaine2.current, { y: -360, duration: 2, opacity: 0 });
    },
    { scope: textContainer }
  );

  useEffect(() => {
    const handleIntersect = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && count === 0) {
        // Simulate counting from 0 to a specific number (e.g., 10)
        const targetNumber = 56;
        const targetNumber2 = 100;
        const targetNumber3 = 150;
        const targetNumber4 = 200;
        const interval = setInterval(() => {
          setCount((prevCount) =>
            prevCount < targetNumber ? prevCount + 1 : targetNumber
          );
          setCount2((prevCount) =>
            prevCount < targetNumber2 ? prevCount + 1 : targetNumber2
          );
          setCount3((prevCount) =>
            prevCount < targetNumber3 ? prevCount + 1 : targetNumber3
          );
          setCount4((prevCount) =>
            prevCount < targetNumber4 ? prevCount + 1 : targetNumber4
          );
        }, 30);

        // Cleanup interval when the count reaches the target
        if (count === targetNumber) {
          clearInterval(interval);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [count]);

  return (
    <div className="relative">
      <div className="bg-[#eaf0f2] sm:flex justify-between items-center py-12 sm:py-0  lg:h-[550px] space-y-6 sm:space-y-0 ">
        <div ref={textContainer} className="sm:w-[40%] px-2 sm:px-6 space-y-4 ">
          <h2 className="text-xl lg:text-2xl font-bold">
            Get <span className="text-[#1ab69d]">500+</span> Best Online Courses
            From SoftMax
          </h2>
          <p className="text-[#6d6f70] font-semibold">
            Unlock endless possibilities with Softmax Online Courses –
            Empowering your journey through immersive and dynamic learning
            experiences.
          </p>
          <Button className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 py-6 rounded">
            <span className="text-[#f7fdfc] font-bold">See Courses</span>
            <Image width={16} height={16} src={arrow} alt="arrow" />
          </Button>
        </div>
        <div ref={textContaine2} className="sm:w-[60%] px-2 sm:px-6">
          <Image width={500} height={500} src={stundent} alt="student" />
        </div>
      </div>
      <div
        ref={sectionRef}
        className="w-full sm:w-11/12 sm:mx-12 -mt-[60px] absolute z-10"
      >
        <div className="sm:flex justify-between items-center bg-[#fff] shadow-lg px-2 py-2 sm:py-6 sm:px-8 rounded space-y-3 sm:space-y-0">
          <div className="text-center space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-[#ff6e76]">
              {count} +
            </h2>
            <p className="text-[#6d6f70] text-lg font-semibold">
              Experience Teachers
            </p>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-[#eaa819]">
              {count2}K +
            </h2>
            <p className="text-[#6d6f70] text-lg font-semibold">
              Enrolled Student
            </p>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-[#00b19e]">
              {count3} +{" "}
            </h2>
            <p className="text-[#6d6f70] text-lg font-semibold">
              Learning Material
            </p>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-[#46b3fd]">
              {count4} +{" "}
            </h2>
            <p className="text-[#6d6f70] text-lg font-semibold">
              uploaded Courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
