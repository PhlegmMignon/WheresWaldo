import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Leaderboard from "../src/components/Leaderboard.jsx";

describe("Leaderboard unit tests", () => {
  it("Renders stage select", () => {
    const { container } = render(
      <Leaderboard
        scores={[
          { name: "asd", score: 212, _id: "0" },
          { name: "qwe", score: 80, _id: "1" },
          { name: "zxc", score: 123, _id: "2" },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});

describe("Leaderboard integration tests", () => {
  it("Clicking new game calls updateState", async () => {
    const user = userEvent.setup();
    const fakeSetGameState = vi.fn();

    render(
      <Leaderboard
        scores={[
          { name: "asd", score: 212, _id: "0" },
          { name: "qwe", score: 80, _id: "1" },
          { name: "zxc", score: 123, _id: "2" },
        ]}
        setGameState={fakeSetGameState}
      />
    );

    const btn = screen.getByRole("button", { name: "New game" });
    await user.click(btn);

    expect(fakeSetGameState).toHaveBeenCalled();
  });
});
