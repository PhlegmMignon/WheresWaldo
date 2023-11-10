import convention from "./assets/nMpQXwq.jpg";
import convention_kon from "./assets/kon.webp";
import convention_luffy from "./assets/luffy.png";
import convention_zim from "./assets/Zim.yelling.svg";

import stage2 from "./assets/stage3.png";
import stage2_fish from "./assets/fish.png";
import stage2_cannon from "./assets/cannon.png";
import stage2_egg from "./assets/egg.png";

export default function BoardImages() {
  const getImages = () => {
    return [
      {
        name: "convention",
        src: convention,
        id: 0,
        characters: [
          { name: "zim", src: convention_zim, id: 0 },
          { name: "luffy", src: convention_luffy, id: 1 },
          { name: "kon", src: convention_kon, id: 2 },
        ],
      },
      {
        name: "stage 2",
        src: stage2,
        id: 1,
        characters: [
          { name: "fish", src: stage2_fish, id: 0 },
          { name: "cannon", src: stage2_cannon, id: 1 },
          { name: "egg", src: stage2_egg, id: 2 },
        ],
      },
    ];
  };

  return { getImages };
}
