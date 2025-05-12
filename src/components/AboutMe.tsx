import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import TitleHeader from "../components/TitleHeader";
import GlowCard from "./GlowCard";
import { expCards } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 text-white h-[200vh]"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/* <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        /> */}
        <h2>Professional Work Experience</h2>
        <div className="mt-12 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="">
                <GlowCard>
                  <div className="relative">
                    <div className="absolute top-0 xl:left-1/2 md:left-10 left-5 h-full flex justify-center">
                      <div className="timeline absolute z-30 h-[110%] -top-8 w-14 md:w-28 bg-black" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-gray-500 bg-amber-500 overflow-hidden">
                      <img src={card.logoPath} alt="logo" />
                    </div>
                  </div>
                  <div className="grow xl:w-4/6">
                    <div className="flex items-start">
                      <div className=" flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div>
                          <h1 className="font-semibold text-3xl">About me</h1>
                          <p className="my-5 text-white-50">
                            🗓️&nbsp;{card.date}
                          </p>
                          <p className="text-[#839CB5] italic">
                            Responsibilities
                          </p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {card.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index} className="text-lg">
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className=" flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div>
                          <h1 className="font-semibold text-3xl">About me</h1>
                          <p className="my-5 text-white-50">
                            🗓️&nbsp;{card.date}
                          </p>
                          <p className="text-[#839CB5] italic">
                            Responsibilities
                          </p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {card.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index} className="text-lg">
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
