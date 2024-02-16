import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import Sidebar from "./sidbar";
import Header from "../ui/header";

const DashBoardGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full rounded-lg border relative"
      >
        <ResizablePanel
          className=" bg-white border-r-4 hover:border-green-400 border-gray-400"
          defaultSize={20}
          maxSize={30}
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="bg-[#eaf0f2] " defaultSize={80}>
          <div className="py-4 px-2 sm:py-12 sm:px-6 h-screen  overflow-auto">
            {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default DashBoardGroupLayout;
