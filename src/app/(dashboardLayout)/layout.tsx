"use client";
import DashBoardGroupLayout from "@/components/Layout/DashBoardGroupLayout";
import { useAppSelector } from "@/redux/app/hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      return router.push("/login");
    }
  }, [router]);
  return (
    <div>
      <DashBoardGroupLayout>{children}</DashBoardGroupLayout>
    </div>
  );
};

export default DashboardLayout;
