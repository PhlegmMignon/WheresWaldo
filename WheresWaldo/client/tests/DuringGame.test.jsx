import { render } from "@testing-library/react";
import { vi } from "vitest";
import DuringGame from "../src/components/DuringGame.jsx";
import BoardImages from "../src/BoardImages.jsx";

describe("DuringGame unit tests", () => {
  it("Renders DuringGame correctly", async () => {
    const gameImage = BoardImages().getImages();
    const fakeGetScores = vi.fn();

    const { container } = render(
      <DuringGame
        gameImage={gameImage[0]}
        modalFound={false}
        getScores={fakeGetScores}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
