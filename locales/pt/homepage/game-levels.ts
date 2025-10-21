import { Section } from "@/types/common";

export const gameLevels: Section = {
 id: "game-levels",
 title: "Game Levels",
 content: [
  {
   type: "paragraph",
   text:
    "<1>Eggy Car<1> keeps it simple with one endless mode, like a road trip with no end. No levels, no checkpoints, no timers ticking. Each run starts fresh with a new egg, like a blank page in a sketchbook. Success means topping your last distance and unlocking cars with coins. Practice is your co-pilot, it's how you go further and further!",
   inlines: {
    "1": {
     type: "link",
     href: "/",
    },
   },
  },
  {
   type: "paragraph",
   text:
    "Cars zip around some tiny and cute, others sleek like sports cars, tearing up the track. Every ride's got a playful spark, like toys come to life. Cheerful music loops like your favorite song stuck in your head. Coins jingle like bells at a fair when you grab them. Every sound and motion feels like a party you don't wanna leave.",
  },
  {
   type: "image",
   src: "/homepage/game-levels.webp",
  },
 ],
};
