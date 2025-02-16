import React from "react";

const testimonials = [
  {
    text: "Before TVOTRIBE, I struggled as a writer, but this community revitalized my writing desire. It’s been like a film house, like the crystal sea, like happiness. I’m glad to be a tribesman, shouting it to the world!",
    author: "Tessiemoney",
    bgColor: "bg-[#EAE3DF]",
    rotation: "-rotate-2",
  },
  {
    text: "I joined TVOTRIBE after a recommendation. It’s a space with incredible potential, knowledge, and art. The energy is different, and the welcome feeling never goes away. I appreciate the Tribe for appreciating me.",
    author: "Sweetcase",
    bgColor: "bg-[#D9ECF4]",
    rotation: "rotate-2",
  },
  {
    text: "I found TVOTRIBE on Instagram, drawn by its African content. It’s a respectful community, promoting reading culture. The Tribesmen are beautiful and calm personalities. I’ve not regretted joining this tribe.",
    author: "YoursiblinginChrist (Onceprodigal)",
    bgColor: "bg-[#C5E5FA]",
    rotation: "-rotate-1",
  },
  {
    text: "I joined TVOTRIBE with doubts about my writing abilities. It transformed me from a silent reader to an active member. I’ve learned a lot and appreciated the support.",
    author: "Catherine Moses",
    bgColor: "bg-[#EAE3DF]",
    rotation: "rotate-1",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-wrap justify-center md:gap-6 p-8 max-w-[1100px]">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`w-72 px-4 py-2 rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 hover:rotate-1 ${testimonial.bgColor} ${testimonial.rotation}`}
        >
          <p className="xsm:text-[12px] md:text-[16px] text-gray-700 leading-relaxed">
            {testimonial.text}
          </p>
          <h4 className="mt-3 font-bold text-right text-gray-900 text-[10px]">
            {testimonial.author}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
