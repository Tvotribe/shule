import Image from "next/image";
import React from "react";
import tony from "../public/assets/tony.svg";
import image1 from "../public/assets/image1.svg";
import image2 from "../public/assets/image2.svg";
import image3 from "../public/assets/image3.svg";
import image4 from "../public/assets/image4.svg";
import image5 from "../public/assets/image5.svg";

const Hero = () => {
  return (
    <div className="flex xsm:flex-col  md:px-[10%] items-center gap-2 md:mt-[60px] xsm:mt-[40px]">
      <section className="md:w-1/2 flex flex-col gap-3 xsm:text-center">
        <span className="hero-text text-wrap ">
          Reach your creative potential
        </span>
        <span className="hero-desc">
          Personalised Mentorship | Community | Growth Resources
        </span>
        <span className="hero-abt">
          At Shule, we connect passionate creatives with experienced mentors, a
          vibrant community, and valuable tools to elevate their storytelling
          skills.
        </span>
        <section className="flex gap-3 xsm:items-center xsm:justify-center">
          <button className="px-4 my-3 py-2 w-fit self-center rounded-lg hover:bg-[#0e1f28] transition-all bg-[#224C61] text-white">
            Join Shule
          </button>
          <button className="px-4 my-3 py-2 w-fit self-center rounded-lg hover:bg-[#97aab4] transition-all bg-[#CDE7F4] text-[#224C61] xsm:hidden">
            Sign In
          </button>
        </section>
      </section>
      <section className="md:w-1/2">
        <Image src={tony} alt="tony" className="w-full rounded-lg" />
        <section className="flex gap-2 my-2 image-list justify-around">
          <Image src={image1} alt="images" />
          <Image src={image2} alt="images" />
          <Image src={image3} alt="images" />
          <Image src={image4} alt="images" />
          <Image src={image5} alt="images" />
        </section>
      </section>
    </div>
  );
};

export default Hero;
