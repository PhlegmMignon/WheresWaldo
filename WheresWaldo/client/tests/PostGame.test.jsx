import { render } from "@testing-library/react";
import PostGame from "../src/components/PostGame.jsx";
import BoardImages from "../src/BoardImages.jsx";

describe("PostGame unit tests", () => {
  it("Renders postgame when highscore is false", async () => {
    let gameImage = BoardImages().getImages();

    const { container } = render(
      <PostGame
        isHighscore={false}
        gameImage={gameImage[0].src}
        scores={[
          { name: "asd", score: 5, _id: 0 },
          { name: "aaa", score: 5, _id: 1 },
          { name: "sss", score: 5, _id: 2 },
          { name: "ddd", score: 5, _id: 3 },
          { name: "zzz", score: 5, _id: 4 },
        ]}
        time={{ minutes: 2, seconds: 4 }}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders postgame when highscore is true", async () => {
    let gameImage = BoardImages().getImages();

    const { container } = render(
      <PostGame
        isHighscore={false}
        gameImage={gameImage[0].src}
        scores={[{ name: "asd", score: 5, _id: 0 }]}
        time={{ minutes: 2, seconds: 4 }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
