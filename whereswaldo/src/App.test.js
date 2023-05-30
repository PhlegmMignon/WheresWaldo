import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Start from "./components/Start";
import Timer from "./components/Timer";

import App from "./App";

// test("Unmounts Start", async () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );
//   let user = userEvent.setup();

//   let btn = screen.getByText("Start");
//   expect(btn).toBeInTheDocument();
//   await user.click(btn);

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

// test("Char drop down appears/disappears on click", async () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   let btn = screen.getByText("Start");
//   expect(btn).toBeInTheDocument();
//   await userEvent.click(btn);

//   let image = await screen.findByTestId("mainImg");
//   await userEvent.click(image);

//   let ele = await screen.findByTestId("charDropdown");
//   expect(ele).toBeInTheDocument();

//   await userEvent.click(image);
//   expect(ele).not.toBeInTheDocument();
// });

//Use backup above if this doesn't work
//Come back when you can stop the timer so you can stop the act errors
// test("ms gets updated every second", async () => {
//   // jest.useFakeTimers({ advanceTimers: true });
//   // jest.useFakeTimers();

//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   let btn = screen.getByText("Start");
//   expect(btn).toBeInTheDocument();
//   userEvent.click(btn);

//   // act(() => {
//   //   jest.advanceTimersByTime(3000);
//   // });

//   // let thing = await screen.findByRole("");
//   await new Promise((r) => setTimeout(r, 1000));

//   let ele = await screen.findByTestId("testTimer1");
//   jest.runAllTimers();
//   console.log(ele);
//   //   await screen.findByRole("");

//   expect(await ele.textContent).toBe("3s");
// });

//You can make a test where you wait 3s before clicking all chars to update the
//timer and see what happens

test("Finding all chars ends game", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  let btn = screen.getByText("Start");
  expect(btn).toBeInTheDocument();
  await userEvent.click(btn);

  // document.dispatchEvent(
  //   new MouseEvent("mousedown", {
  //     clientX: 782,
  //     clientY: 1430,
  //   })
  // );

  // const event = new MouseEvent("click", {
  //   clientX: 782,
  //   clientY: 1430,
  // });

  // document.dispatchEvent(event);

  let ele = screen.getByTestId("mainImg");
  act(() => {
    ele.dispatchEvent(
      new MouseEvent("click", {
        clientX: 782,
        clientY: 1430,
        bubbles: true,
      })
    );
  });

  let luffy = screen.getByTestId("luffyDrop");
  await userEvent.click(luffy);

  await screen.findByRole("");
});

//782 1430
