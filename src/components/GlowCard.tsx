import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  index?: number;
};

type CardRef = HTMLDivElement | null;

const GlowCard = ({ index, children }: Props) => {
  // refs for all the cards
  const cardRefs = useRef<(CardRef | null)[]>([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      // get the current card
      const card = cardRefs.current[index];
      if (!card || typeof card.getBoundingClientRect !== "function") return;

      // get the mouse position relative to the card
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // calculate the angle from the center of the card to the mouse
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      // adjust the angle so that it's between 0 and 360
      angle = (angle + 360) % 360;

      // set the angle as a CSS variable
      card.style.setProperty("--start", (angle + 60).toString());
    };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index as number)}
      className="card border border-gray-900 bg-black timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
    >
      {/* <div className="pointer-events-none absolute w-full h-full -translate-x-1/2 -translate-y-1/2 blur-[10px] saturate-[200] left-1/2 top-1/2"></div> */}
      {/* <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div> */}
      {children}
    </div>
  );
};

export default GlowCard;
