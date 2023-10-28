import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ScorePrompt from "../src/components/ScorePrompt.jsx";
import BoardImages from "../src/BoardImages.jsx";

describe("ScorePrompt unit tests", () => {
  it("Renders stage select", async () => {
    const { container } = render(<ScorePrompt />);

    expect(container).toMatchSnapshot();
  });
});

describe("ScorePrompt integration tests", () => {
  //This test is simple but time consuming to make, so I'm skipping it.
  //I should've pulled fetch requests into their own functions so it would be more reusable and easier to mock.
  // it("Submitting form calls handleSubmit", async () => {
  //   vi.fn().mockResolvedValueOnce
  //   const user = userEvent.setup();
  //   const fakeGetScores = vi.fn();

  //   render(<ScorePrompt getScores={fakeGetScores} />);

  //   const btn = screen.getByRole("button", { name: "Submit" });
  //   await user.click(btn);

  //   expect(fetch.requests().length).toEqual(1);
  // });

  it("Skipping form calls updateHighScore", async () => {
    const user = userEvent.setup();
    const fakeGetScores = vi.fn();
    const fakeSetHighScore = vi.fn();

    let gameImage = BoardImages().getImages();

    render(
      <ScorePrompt
        getScores={fakeGetScores}
        gameImage={gameImage[0].name}
        setIsHighscore={fakeSetHighScore}
      />
    );

    const btn = screen.getByRole("button", { name: "Skip" });
    await user.click(btn);

    expect(fakeGetScores).toHaveBeenCalled();
    expect(fakeSetHighScore).toHaveBeenCalled();
  });
});
