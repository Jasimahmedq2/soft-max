import Offer from "@/components/ui/Offer";
import AboutUs from "@/components/ui/about";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import InstructorComponent from "@/components/ui/instractorComponents";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Offer />
      <InstructorComponent />
    </div>
  );
}
