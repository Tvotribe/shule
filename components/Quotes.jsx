import Image from "next/image";
import React from "react";
import peopleImg from "../public/assets/peopleImg.svg";

const Quotes = () => {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <Image src={peopleImg} alt="people" className="w-full " />
      <section className="max-w-xl -mt-12 md:-m-32 px-4 py-8">
        <blockquote className="italic text-lg text-gray-800 text-[#421C0D]">
          &ldquo;I joined TVOTRIBE skeptically but found a close-knit community
          of Creatives who genuinely care about each other&apos;s development.
          It&apos;s a home for good creatives whose work ignites your
          inspiration. The tribe offers writing advice, prompts, critiques, and
          more.
        </blockquote>
        <span>Proud to be a tribesman!&rdquo;</span>
        <span className="block mt-4 font-semibold text-gray-900">
          - Wanualom
        </span>
      </section>
    </div>
  );
};

export default Quotes;
