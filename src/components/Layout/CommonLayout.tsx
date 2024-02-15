"use client"
import React from "react";
import NavbarComponent from "../ui/navbar";
import Header from "../ui/header";
import { Footer } from "../ui/Footer";
import { usePathname } from "next/navigation";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      {!pathname.includes("/dashboard") && <NavbarComponent />}
      {!pathname.includes("/dashboard") && <Header />}
      {children}
      {!pathname.includes("/dashboard") && <Footer />}
    </div>
  );
};

export default CommonLayout;
