import Image from "next/image";
import React from "react";
import benImg1 from "../public/assets/benImg1.svg";
import benImg2 from "../public/assets/benImg2.svg";
import benImg3 from "../public/assets/benImg3.svg";
import benImg4 from "../public/assets/benImg4.svg";
import benImg5 from "../public/assets/benImg5.svg";

const Benefits = () => {
  return (
    <div className="border-2 border-[#000000] rounded-2xl md:mt-[60px] md:mb-[120px] xsm:mb-[60px] xsm:mt-[40px] p-4 flex flex-col items-center gap-4">
      <span className="ben">What you will get</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <section className="flex gap-2 xs:flex-col xs:items-center">
          <span className="w-[70px]">
            <Image src={benImg1} alt="mentor" className="w-full" />
          </span>
          <section className="flex gap-2 flex-col xs:items-center">
            <span className="ben-title">Personalized Mentorship</span>
            <span className="ben-desc xs:text-center ">
              Receive dedicated support from mentors who guide you through every
              stage of your creative journey.
            </span>
          </section>
        </section>
        <section className="flex gap-2 xs:flex-col xs:items-center">
          <span className="w-[70px]">
            <Image src={benImg2} alt="resources" className="w-full" />
          </span>
          <section className="flex gap-2 flex-col xs:items-center">
            <span className="ben-title">Downloadable Resources</span>
            <span className="ben-desc xs:text-center md:max-w-[244px]">
              Access templates, tools, and resources curated to support every
              aspect of your creative process.
            </span>
          </section>
        </section>
        <section className="flex gap-2 xs:flex-col xs:items-center">
          <span className="w-[70px]">
            <Image src={benImg3} alt="storytelling" className="w-full" />
          </span>
          <section className="flex gap-2 flex-col xs:items-center">
            <span className="ben-title">
              Interactive Storytelling Workshops
            </span>
            <span className="ben-desc xs:text-center md:max-w-[244px]">
              Level up your skills with practical workshops led by industry
              leaders.
            </span>
          </section>
        </section>
        <section className="flex gap-2 xs:flex-col xs:items-center">
          <span className="w-[70px]">
            <Image src={benImg4} alt="network" className="w-full" />{" "}
          </span>
          <section className="flex gap-2 flex-col xs:items-center">
            <span className="ben-title">Private Creative Network</span>
            <span className="ben-desc xs:text-center md:max-w-[244px]">
              Join an exclusive community of storytellers who inspire and
              support each other.
            </span>
          </section>
        </section>
        <section className="flex gap-2 xs:flex-col xs:items-center">
          <span className="w-[70px]">
            <Image src={benImg5} alt="Idea" className="w-full" />
          </span>
          <section className="flex gap-2 flex-col xs:items-center">
            <span className="ben-title">Idea Incubator</span>
            <span className="ben-desc xs:text-center md:max-w-[244px]">
              Collaborate with other creatives to brainstorm, refine, and bring
              your creative ideas to life.
            </span>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
