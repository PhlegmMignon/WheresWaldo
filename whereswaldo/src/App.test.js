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

test("Timer works", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  let btn = screen.getByText("Start");
  expect(btn).toBeInTheDocument();
  await userEvent.click(btn);

  // let ele = await newFx();

  // function newFx() {
  //   return new Promise((resolve) => {
  //     let asd = screen.getByTestId("testTimer1");
  //   });
  // }
  let ele;
  let result;
  act(async () => {
    result = new Promise((res) =>
      setTimeout(() => {
        ele = screen.getByTestId("testTimer1");
        res(ele);
      }, 3000)
    );
    let qwe = await result.then((res) => {
      return res;
    });
    console.log(qwe);
  });
  expect(ele.textContent).toBe("3s");

  // expect()).toBe("2s");
});
