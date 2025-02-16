import React from "react";
import icon1 from "../public/assets/icon1.svg";
import icon2 from "../public/assets/icon2.svg";
import icon3 from "../public/assets/icon3.svg";
import icon4 from "../public/assets/icon4.svg";
import icon5 from "../public/assets/icon5.svg";
import icon6 from "../public/assets/icon6.svg";
import icon7 from "../public/assets/icon7.svg";
import Image from "next/image";
import arrowRight from "../public/assets/arrowRight.svg";

const Elevate = () => {
  const mentors = [
    {
      image: icon1,
      topic: "Videography & Photography",
    },
    {
      image: icon2,
      topic: "Business & Marketing",
    },
    {
      image: icon3,
      topic: "Skills & Technical Training",
    },
    {
      image: icon4,
      topic: "Branding & Brand-building",
    },
    {
      image: icon5,
      topic: "Design & Animation",
    },
    {
      image: icon6,
      topic: "Storytelling & Copywriting",
    },
    {
      image: icon7,
      topic: "Freelancing & Entrepreneurship",
    },
  ];
  return (
    <div className=" md:mt-[60px] md:mb-[120px] xsm:mb-[60px] xsm:mt-[40px] p-4 flex flex-col items-center gap-4">
      <span className="ben">Elevate your creativity across key topics</span>
      <div className="flex flex-wrap w-full gap-3 md:justify-around">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex xs:w-full md:min-w-[480px] flex-wrap justify-between bg-[#CDE7F4] rounded-lg gap-2 items-center px-3 py-2 "
          >
            <Image src={mentor.image} alt={mentor.topic} />
            <span className=" text-[13px] font-medium text-[#224C61]">
              {mentor.topic}
            </span>
            <Image src={arrowRight} alt="arrRight" />
          </div>
        ))}
      </div>
      <span className="view-all">View all mentors</span>
    </div>
  );
};

export default Elevate;
