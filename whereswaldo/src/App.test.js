import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Start from "./components/Start";
import Timer from "./components/Timer";

import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Unmounts Start", async () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   let btn = screen.getByText("Start");
//   expect(btn).toBeInTheDocument();
//   await userEvent.click(btn);

//   expect(btn).not.toBeInTheDocument();
// });

// test("ms gets updated every second", async () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   let btn = screen.getByText("Start");
//   expect(btn).toBeInTheDocument();
//   await userEvent.click(btn);

//   await sleep(3100);
//   function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   // let thing = await screen.findByRole("");
//   let ele = await screen.findByTestId("testTimer1");
//   expect(ele.textContent).toBe("3s");

// });

//Use backup above if this doesn't work
//Come back when you can stop the timer so you can stop the act errors
// test("ms gets updated every second", async () => {
//   jest.useFakeTimers();
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   let btn = screen.getByText("Start");
//   expect(btn).toBeInTheDocument();
//   await userEvent.click(btn);

//   act(() => {
//     jest.advanceTimersByTime(2000);
//   });

//   // let thing = await screen.findByRole("");

//   let ele = await screen.findByTestId("testTimer1");

//   expect(await ele.textContent).toBe("3s");
// });

// test('Timer displays correct time', () => {
//
// })
