import { render, screen } from "@testing-library/react";

import HomePage from "./pages/HomePage";

describe("HomePage", () => {
  test("renders homepage component", () => {
    render(<HomePage />);
    screen.debug();
  });
});
