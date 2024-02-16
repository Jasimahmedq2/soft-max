"use client";
import CourseCard from "@/components/ui/CourseCard";
import Skeleton from "@/components/ui/Skeleton";
import { useStudentCoursesQuery } from "@/redux/api/courseApi";
import { useAppSelector } from "@/redux/app/hook";
import { ICourse } from "@/types/interfaces";
import React from "react";

const MYCourses = () => {
  const { accessToken, userId } = useAppSelector((state) => state.auth);

  const creadential = {
    token: accessToken,
    id: userId,
  };
  const { data, isLoading, isSuccess, isError } =
    useStudentCoursesQuery(creadential);

  console.log("data,", data);

  return (
    <div>
      {data?.legnth === 0 && (
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

export default MYCourses;
