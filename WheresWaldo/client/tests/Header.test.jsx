import { render } from "@testing-library/react";
import Header from "../src/components/Header.jsx";
import BoardImages from "../src/BoardImages.jsx";

describe("Header unit tests", () => {
  it("Renders stageSelect's header", async () => {
    const { container } = render(<Header gameState={"start"} />);

    expect(container).toMatchSnapshot();
  });

  it("Renders header during game", async () => {
    let gameImage = BoardImages().getImages();
    const chars = gameImage[0].characters;

    const { container } = render(
      <Header
        gameState={"inProgress"}
        characters={chars}
        found={[false, false, false]}
        time={{ minutes: 2, seconds: 4 }}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders header post game", async () => {
    let gameImage = BoardImages().getImages();
    const chars = gameImage[0].characters;

    const { container } = render(
      <Header
        gameState={"end"}
        characters={chars}
        found={[true, true, true]}
        time={{ minutes: 2, seconds: 4 }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
