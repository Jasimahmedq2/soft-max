import CourseCard from "@/components/ui/CourseCard";
import React from "react";

const TeacherCourses = () => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default TeacherCourses;