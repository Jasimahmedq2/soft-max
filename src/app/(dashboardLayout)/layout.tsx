import DashBoardGroupLayout from "@/components/Layout/DashBoardGroupLayout";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashBoardGroupLayout>{children}</DashBoardGroupLayout>
    </div>
  );
};

export default DashboardLayout;
