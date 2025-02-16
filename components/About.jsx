import Image from "next/image";
import React from "react";
import creativesImg from "../public/assets/creativesImg.svg";
import professionalsImg from "../public/assets/professionalsImg.svg";
import artistImg from "../public/assets/artistsImg.svg";

const About = () => {
  return (
    <div className="border-2 border-[#000000] rounded-2xl md:mt-[60px] md:mb-[120px] xsm:mb-[60px] xsm:mt-[40px] p-4 flex flex-col items-center justify-center gap-4">
      <span className="abt-title">
        Shule is the ultimate platform for creative growth
      </span>
      <span className="abt-desc">BROUGHT TO YOU BY TVOTRIBE</span>
      <section className="w-full items-center justify-center flex flex-col gap-3">
        <span className="abt-subHead">DESIGNED FOR:</span>
        <section className="flex flex-wrap gap-3 justify-around w-full items-center">
          <section className="flex flex-col gap-3 items-center justify-center">
            <Image src={creativesImg} className="w-full" alt="creatives" />

            <span className="image-title">Creatives</span>
            <span className="image-desc">
              seeking to master the art of storytelling
            </span>
          </section>
          <section className="flex flex-col gap-3 items-center justify-center">
            <Image src={artistImg} className="w-full" alt="creatives" />

            <span className="image-title">Artist</span>
            <span className="image-desc">
              looking for inspiration and collaboration{" "}
            </span>
          </section>
          <section className="flex flex-col gap-3 items-center justify-center">
            <Image src={professionalsImg} className="w-full" alt="creatives" />

            <span className="image-title">Professionals</span>
            <span className="image-desc">
              aiming to expand their creative network{" "}
            </span>
          </section>
        </section>
      </section>
    </div>
  );
};

export default About;
