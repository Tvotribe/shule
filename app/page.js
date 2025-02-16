import Image from "next/image";
import logo from "../public/assets/logo.svg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Onboarding from "@/components/Onboarding";
import Quotes from "@/components/Quotes";
import Elevate from "@/components/Elevate";
import Testimonial from "@/components/Testimonial";
import ShuleExplained from "@/components/ShuleExplained";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <div>
      <div className="container flex flex-col  ">
        <div className="flex items-center justify-between py-[20px]">
          <Image src={logo} alt="logo" />
          <section className="tab-items flex gap-3 xsm:hidden">
            <span>Home</span>
            <span>About Us</span>
            <span>Features</span>
            <span>Solutions</span>
          </section>
        </div>
        <Hero />
        <About />
        <Benefits />
        <Onboarding />
      </div>
      <Quotes />{" "}
      <div className="container flex flex-col items-center justify-center  ">
        <Elevate />
        <ShuleExplained />
        <Testimonial />
        <FAQs />
      </div>
    </div>
  );
}
