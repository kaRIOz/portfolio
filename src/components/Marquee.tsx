// keen slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
//data
import { skills } from "./../../data/index";

const oneThirdLength = Math.floor(skills.length / 3);

const animation = { duration: 30000, easing: (t: number) => t };

const Marquee = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: "auto", spacing: 20 },
    drag: false,

    defaultAnimation: {
      duration: 4000,
      easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <section className="relative my-10 md:my-20 text-white overflow-hidden">
      <h1 className="text-2xl my-20 text-center">skills</h1>
      <div className="marquee h-52 w-[100dvw] overflow-hidden relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />
        <div className="space-y-10 text-amber-500">
          <div ref={sliderRef} className="keen-slider">
            {skills
              .slice(0, oneThirdLength)
              .map(({ id, skill, icon: Icon }) => (
                <div
                  className="keen-slider__slide flex justify-center"
                  key={id}
                >
                  <h1 className=" border border-amber-500 px-4 py-2 rounded-lg flex gap-3">
                    {skill}
                    {Icon && <Icon className="text-xl" />}
                  </h1>
                </div>
              ))}
          </div>
          <div ref={sliderRef} className="keen-slider">
            {skills
              .slice(oneThirdLength * 2)
              .map(({ id, skill, icon: Icon }) => (
                <div
                  className="keen-slider__slide flex items-center justify-end"
                  key={id}
                >
                  <h1 className=" border border-amber-500 px-4 py-2 rounded-lg flex gap-3">
                    {skill}
                    {Icon && <Icon className="text-xl" />}
                  </h1>
                </div>
              ))}
          </div>
          <div ref={sliderRef} className="keen-slider">
            {skills
              .slice(oneThirdLength, oneThirdLength * 2)
              .map(({ id, skill, icon: Icon }) => (
                <div
                  className="keen-slider__slide flex items-center justify-end"
                  key={id}
                >
                  <h1 className=" border border-amber-500 px-4 py-2 rounded-lg flex gap-3">
                    {skill}
                    {Icon && <Icon className="text-xl" />}
                  </h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
