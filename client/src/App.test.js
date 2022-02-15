import { render, screen } from "@testing-library/react";

import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";
describe("HomePage", () => {
  test("renders homepage component", () => {
    render(<HomePage />);
  });
});

describe("About Us Page", () => {
  test("renders about us component", () => {
    render(<MeetTeamPage />);
  });
});
