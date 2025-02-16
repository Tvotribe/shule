import Image from "next/image";
import React from "react";
import line from "../public/assets/line.svg";
const ShuleExplained = () => {
  return (
    <div className="border-2 border-[#000000] rounded-2xl md:mt-[60px] md:mb-[120px] xsm:mb-[60px] xsm:mt-[40px] p-4 flex shadow-md xsm:border-none flex-col items-center gap-4">
      <span className="ben">How Shule Works</span>

      <div className="xsm:w-72 bg-[#5A2D0C] text-white p-6 rounded-2xl flex flex-col items-center text-center">
        <section className="flex xsm:flex-col gap-2 text-white justify-between">
          <section>
            <h2 className="text-lg font-bold mb-2">Sign Up</h2>
            <p className="text-sm mb-4">
              Create your profile to start your creative journey.
            </p>
          </section>
          <Image src={line} className="xsm:hidden " alt="line" />
          <section>
            <h2 className="text-lg font-bold mb-2">Get Matched</h2>
            <p className="text-sm mb-4">
              We’ll pair you with a mentor tailored to your unique needs and
              goals.
            </p>
          </section>
          <Image src={line} className="xsm:hidden " alt="line" />
          <section>
            <h2 className="text-lg font-bold mb-2">Start Growing</h2>
            <p className="text-sm mb-6">
              Participate in workshops, collaborate with the community, and
              watch your creativity thrive.
            </p>
          </section>
        </section>
        <button className="btn btn-light"> Get Started Today</button>
      </div>
    </div>
  );
};

export default ShuleExplained;
