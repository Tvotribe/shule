"use client";
import Image from "next/image";
// import Link from "next/link";
import greatImg from "../public/assets/greatImg.svg";
import React, { useState } from "react";

const FAQs = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  //   const pathname = usePathname(); // Get current path

  const handleDropdownClick = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const dropdownData = [
    {
      title: "What is Shule?",
      items: [
        {
          item: "Shule is a mentorship and growth platform by TVOTRIBE designed to help creatives unlock their full potential. Through mentorship, workshops, and a collaborative community, we empower storytellers to refine their craft and achieve their goals.",
        },
      ],
    },
    {
      title: "Who can join Shule?",
      items: [
        {
          item: "Shule is open to creatives of all skill levels, including aspiring storytellers, professionals seeking to enhance their skills, and those looking for a supportive creative community.",
        },
      ],
    },
    {
      title: "How does the mentorship program work?",
      items: [
        {
          item: "Once you join, you’ll be matched with a mentor based on your interests and goals. Your mentor will provide personalised guidance, feedback, and support tailored to your creative journey.",
        },
      ],
    },
    {
      title: "What do the workshops cover?",
      items: [
        {
          item: "Our bi-monthly workshops focus on storytelling techniques, idea development, and other essential creative skills. Led by industry experts, they offer actionable insights and hands-on learning.",
        },
      ],
    },
    {
      title: "How do I access the resources?",
      items: [
        {
          item: "Once you’re a member of Shule, you’ll gain access to an exclusive library of downloadable templates, guides, and tools designed to enhance your creative process.",
        },
      ],
    },
  ];

  return (
    <div className="w-full rounded-2xl md:mt-16 md:mb-32 xsm:mb-16 xsm:mt-10 p-4 flex flex-col items-center bg-[#CDE7F4] gap-4">
      <span className="ben !text-[#421C0D] text-lg font-bold">FAQs</span>

      <ul className="w-full flex flex-col items-center gap-3 p-0">
        {dropdownData.map((dropdown, index) => (
          <li
            key={index}
            className="w-full flex flex-col items-center justify-center"
          >
            <div
              className={`${
                activeDropdown === index
                  ? "bg-white text-[#421C0D] rounded"
                  : "bg-white text-[#421C0D] rounded"
              } flex items-center justify-between w-full p-2 cursor-pointer transition-all duration-300`}
              onClick={() => handleDropdownClick(index)}
            >
              <span className="text-[14px] flex items-center gap-2">
                {dropdown.title}
              </span>
              <Image
                src={greatImg}
                alt="greatImg"
                className={`w-fit p-2 cursor-pointer transition-transform duration-300 ${
                  activeDropdown === index ? "rotate-[90deg]" : "rotate-0"
                }`}
              />
            </div>
            {activeDropdown === index && (
              <div className="flex flex-col p-3 bg-[#421C0D] text-white w-[97%]  rounded-b-lg">
                {dropdown.items.map((item, itemIndex) => (
                  <span key={itemIndex}>{item.item}</span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQs;
