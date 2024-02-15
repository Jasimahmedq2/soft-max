import React from "react";
import Instructor from "./instructors";
import teacher1 from "../../assests/teacher (1).jpg";
import teacher2 from "../../assests/teacher (2).jpg";
import teacher3 from "../../assests/teacher (3).jpg";
import teacher4 from "../../assests/teacher (4).jpg";

const InstructorComponent = () => {
  return (
    <div className="px-2 py-6 sm:py-12  sm:px-4">
      <div className="sm:w-1/2 text-center mx-auto px-2 sm:px-6 space-y-4 ">
        <h2 className="text-xl lg:text-2xl font-bold">
          Our Experience <span className="text-[#1ab69d]">Instructors</span>
        </h2>
      </div>
      <div className="py-6 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Instructor
          image={teacher1}
          name="Emily Thompson"
          designation="English Teacher"
        />
        <Instructor
          image={teacher2}
          name="James Rodriguez "
          designation="Science Teacher"
        />
        <Instructor
          image={teacher3}
          name="Samantha Lewis"
          designation="Math Teacher"
        />
        <Instructor
          image={teacher4}
          name="Benjamin Carter"
          designation="Psychology Professor"
        />
      </div>
    </div>
  );
};

export default InstructorComponent;
