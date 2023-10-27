import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Dropdown from "../src/components/Dropdown.jsx";
import BoardImages from "../src/BoardImages.jsx";

describe("Dropdown unit tests", () => {
  it("Renders dropdown", async () => {
    let gameImage = BoardImages().getImages();

    const { container } = render(
      <Dropdown coordinate={[1, 1]} gameImage={gameImage[0]} />
    );

    expect(container).toMatchSnapshot();
  });
});

describe("Dropdown integration tests", () => {
  it("Clicking char image calls handleClick", async () => {
    const user = userEvent.setup();
    let gameImage = BoardImages().getImages();
    const fakeSetFoundStatus = vi.fn();
    const fakeSetModal = vi.fn();

    render(
      <Dropdown
        coordinate={[1, 1]}
        gameImage={gameImage[0]}
        setFoundStatus={fakeSetFoundStatus}
        setModal={fakeSetModal}
      />
    );
    let btn = screen.getByRole("img", { name: "image of luffy" });

    await user.click(btn);
    expect(fakeSetFoundStatus).toHaveBeenCalled();
    expect(fakeSetModal).toHaveBeenCalled();
  });
});
