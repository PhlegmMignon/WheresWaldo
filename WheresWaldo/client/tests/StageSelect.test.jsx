import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import App from "../src/App.jsx";
import StageSelect from "../src/components/StageSelect.jsx";

describe("StageSelect unit tests", () => {
  it("Renders stage select", async () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});

describe("StageSelect integration tests", () => {
  it("Clicking start button calls startGame", async () => {
    const user = userEvent.setup();
    const fakeSetGameState = vi.fn();
    const fakeSetInitialFound = vi.fn();
    const fakeSetStartTime = vi.fn();

    const fakeImages = [];
    render(
      <StageSelect
        images={fakeImages}
        setInitialFound={fakeSetInitialFound}
        setStartTime={fakeSetStartTime}
        setGameState={fakeSetGameState}
      />
    );

    const startBtn = screen.getByRole("button", { name: "Start" });
    await user.click(startBtn);

    expect(fakeSetGameState).toHaveBeenCalled();
  });
});
