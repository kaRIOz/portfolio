import Particles from "../ui/Particles/Particles";
import ShinyText from "../ui/ShinyText/ShinyText";

const Hero = () => {
  return (
    <section className="relative">
      <div className="w-full h-screen overflow-clip flex flex-col">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={900}
          particleSpread={40}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div>
            <ShinyText
              text="I am a Front-End Developer At Zock Studio!"
              disabled={false}
              speed={3}
              className="mt-5 shiny-text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
