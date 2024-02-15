import Offer from "@/components/ui/Offer";
import AboutUs from "@/components/ui/about";
import Banner from "@/components/ui/banner";
import InstructorComponent from "@/components/ui/instractorComponents";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Offer />
      <InstructorComponent />
    </div>
  );
};

export default HomePage;
