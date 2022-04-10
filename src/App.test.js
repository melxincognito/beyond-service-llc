import { render, screen } from "@testing-library/react";
import DummyProjectGallery from "./pages/DummyProjectGallery";
import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";

import "@testing-library/jest-dom/extend-expect";

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

describe("What is rendering", () => {
  test("we're going to try and get it to render", () => {
    render(<DummyProjectGallery />);
    screen.debug();
  });
});
