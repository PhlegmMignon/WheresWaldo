import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Start from "./components/Start";

import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Unmounts Start", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  let btn = screen.getByText("Start");
  expect(btn).toBeInTheDocument();
  await userEvent.click(btn);

  expect(btn).not.toBeInTheDocument();
});


test("Timer works", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  let btn = screen.getByText("Start");
  expect(btn).toBeInTheDocument();
  await userEvent.click(btn);

  expect(btn).not.toBeInTheDocument();
});