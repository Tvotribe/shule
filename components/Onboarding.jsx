import React from "react";
import onboardImg from "../public/assets/onboardImg.svg";
import Image from "next/image";

const Onboarding = () => {
  return (
    <div className="border-2 border-[#000000] rounded-2xl md:mt-[60px] md:mb-[120px] xsm:mb-[60px] xsm:mt-[40px] p-4 flex shadow-md xsm:border-none flex-col items-center gap-4">
      <span className="ben">How to get started</span>
      <section className="onboard-tips flex flex-col gap-4 items-center justify-center md:max-w-[378px]">
        <span>
          Simply sign up, create your profile, and explore everything Shule has
          to offer.
        </span>
        <span>
          You’ll be matched with a mentor, and you can dive into workshops,
          resources, and the community right away.
        </span>
      </section>{" "}
      <button className="px-4 my-3 py-2 w-fit self-center rounded-lg hover:bg-[#0e1f28] transition-all bg-[#224C61] text-white">
        Join Shule Today
      </button>
      <span>
        <Image src={onboardImg} alt="onboardImg" />
      </span>
    </div>
  );
};

export default Onboarding;
