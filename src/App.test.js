import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import React from "react";
import PictureForm from "./components/pictureForm/PictureForm.component";

const onChange = jest.fn();
const onClick = jest.fn();

describe("<HomePage>", () => {
  test("should render the title app correctly", async () => {
    await act(async () => render(<App />));
    const titleElement = screen.getByText("NASA Picture of the day");
    expect(titleElement).toBeInTheDocument();
  });

  test("should render the image of picture of the day correctly", async () => {
    await act(async () => render(<App />));
    const picture = screen.getByTitle("picture-of-the-day");
    expect(picture).toBeInTheDocument();
  });

  test("should render the title of picture of the day correctly", async () => {
    await act(async () => render(<App />));
    const titlePicture = screen.getByRole("heading", { level: 2 });
    expect(titlePicture).toBeInTheDocument();
  });

  test("should render the description of picture of the day correctly", async () => {
    await act(async () => render(<App />));
    const descriptionPicture = screen.getByTitle("description");
    expect(descriptionPicture).toBeInTheDocument();
  });

  test("should render the pictureForm correctly", async () => {
    await act(async () =>
      render(
        <App>
          <PictureForm onChange={onChange} onClick={onClick} />
        </App>
      )
    );
    const form = screen.getByTitle("form");

    expect(form).toBeInTheDocument();
  });

  test("should onChange the date input corretly", async () => {
    await act(async () =>
      render(
        <App>
          <PictureForm onChange={onChange} onClick={onClick} />
        </App>
      )
    );
    const input = screen.getByTitle("date");
    fireEvent.change(input, { target: { value: "2020-10-06" } });
  });

  test("should loadNew picture correctly", async () => {
    const setLoading = jest.fn();
    const useLoading = jest.spyOn(React, "useState");
    useLoading.mockImplementation([false, setLoading]);

    await act(async () =>
      render(
        <App>
          <PictureForm onChange={onChange} onClick={onClick} />
        </App>
      )
    );
    const button = screen.getByTitle("dateButton");
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
