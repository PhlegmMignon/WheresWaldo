import { render } from "@testing-library/react";
import Modal from "../src/components/Modal.jsx";

describe("Modal unit tests", () => {
  it("Renders modal when character found is false", async () => {
    const { container } = render(<Modal modalFound={false} />);
    expect(container).toMatchSnapshot();
  });

  it("Renders modal when character found is true", async () => {
    const { container } = render(<Modal modalFound={true} />);

    expect(container).toMatchSnapshot();
  });
});
