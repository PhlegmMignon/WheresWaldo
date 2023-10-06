import convention from "./assets/nMpQXwq.jpg";
import convention_kon from "./assets/kon.webp";
import convention_luffy from "./assets/luffy.png";
import convention_zim from "./assets/Zim.yelling.svg";

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
    ];
  };

  return { getImages };
}
