"use client";
import CourseCard from "@/components/ui/CourseCard";
import Skeleton from "@/components/ui/Skeleton";
import { useTeacherCouresQuery } from "@/redux/api/teacherApi";
import { useAppSelector } from "@/redux/app/hook";
import React, { useState } from "react";

const TeacherCourses = () => {
  const { accessToken, userId } = useAppSelector((state) => state.auth);

  const info = {
    token: accessToken,
    id: userId,
  };

  const { data, isLoading, isSuccess, isError, error } =
    useTeacherCouresQuery(info);
  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    console.log({ error });
  }
  console.log("teacher courses", data);
  return (
    <div>
      {data?.courses.legnth < 1 && (
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-bold text-center">
            You have not any courses
          </h2>
        </div>
      )}
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data &&
            data?.courses?.map((course: ICourse) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TeacherCourses;
