"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import house from "../../assests/house.png";
import { useAppSelector } from "@/redux/app/hook";

const studentList = [
  {
    title: "Courses",
    link: "/dashboard/student/courses",
  },
  {
    title: "My Courses",
    link: "/dashboard/student/my_courses",
  },
];

const TeacherList = [
  {
    title: "Courses",
    link: "/dashboard/teacher/courses",
  },
  {
    title: "Create Courses",
    link: "/dashboard/teacher/create_courses",
  },
];
const adminList = [
  {
    title: "Teacher Request",
    link: "/dashboard/admin/teacher_request",
  },
  {
    title: "Create Category",
    link: "/dashboard/admin/create_category",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  console.log({ pathname });
  const { role } = useAppSelector((state) => state.auth);

  return (
    <div className="h-screen overflow-auto space-y-6 py-6 shadow-lg">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-lg font-bold text-gray-500  border-b-2 border-gray-500 pb-1">
          {role === "student"
            ? "Student"
            : role === "teacher"
            ? "Teacher"
            : role === "admin"
            ? "Admin"
            : "unknown role"}
        </h2>
        <Link href="/home">
          <Image width={30} height={30} src={house} alt="house" />
        </Link>
      </div>

      {
        // the menu for student's
      }
      {role === "student" &&
        studentList?.map((list) => {
          return (
            <Link href={`${list.link}`}>
              <div
                className={`${
                  pathname.includes(list.link) ? "bg-[#E3DAC9] " : "bg-white"
                } mt-3 bg-white shadow cursor-pointer rounded w-11/12 mx-auto py-3 px-6 text-center border border-[#eaf0f2] hover:bg-gray-200`}
              >
                {list?.title}
              </div>
            </Link>
          );
        })}
      {
        // the menu for teacher's
      }

      {role === "teacher" &&
        TeacherList?.map((list) => {
          return (
            <Link href={`${list.link}`}>
              <div
                className={`${
                  pathname.includes(list.link) ? "bg-[#E3DAC9]" : "bg-white"
                } mt-3 bg-white shadow cursor-pointer rounded w-11/12 mx-auto py-3 px-6 text-center border border-[#eaf0f2] hover:bg-gray-200`}
              >
                {list?.title}
              </div>
            </Link>
          );
        })}

      {role === "admin" &&
        adminList?.map((list) => {
          return (
            <Link href={`${list.link}`}>
              <div
                className={`${
                  pathname.includes(list.link) ? "bg-[#E3DAC9] " : "bg-white"
                } mt-3  shadow cursor-pointer rounded w-11/12 mx-auto py-3 px-6 text-center border border-[#eaf0f2] hover:bg-gray-200`}
              >
                {list?.title}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Sidebar;
