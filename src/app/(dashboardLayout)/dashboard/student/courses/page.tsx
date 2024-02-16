"use client";
import CourseCard from "@/components/ui/CourseCard";
import Skeleton from "@/components/ui/Skeleton";
import { getToken } from "@/lib/getToken";
import { useFindeCoursesQuery } from "@/redux/api/courseApi";
import { useAppSelector } from "@/redux/app/hook";
import { ICourse } from "@/types/interfaces";
import React from "react";

const Courses = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { data, isLoading, isError, isSuccess } =
    useFindeCoursesQuery(accessToken);
  console.log("data", data);
  const token = getToken();

  return (
    <div>
      {data?.legnth < 1 && (
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-bold text-center">
            You have not enrolled any courses
          </h2>
        </div>
      )}
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data &&
            data?.map((course: ICourse) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
