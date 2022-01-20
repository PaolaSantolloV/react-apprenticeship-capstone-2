import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

describe("<HomePage>", () => {
  test("should render the title app correctly", () => {
    render(<App />);
    const titleElement = screen.getByText("NASA Picture of the day");
    expect(titleElement).toBeInTheDocument();
  });

  test("should render the image of picture of the day correctly", () => {
    render(<App />);
    const picture = screen.getByTitle("picture-of-the-day");
    expect(picture).toBeInTheDocument();
  });

  test("should render the title of picture of the day correctly", () => {
    render(<App />);
    const titlePicture = screen.getByRole("heading", { level: 2 });
    expect(titlePicture).toBeInTheDocument();
  });

  test("should render the description of picture of the day correctly", () => {
    render(<App />);
    const descriptionPicture = screen.getByTitle("description");
    expect(descriptionPicture).toBeInTheDocument();
  });
});
