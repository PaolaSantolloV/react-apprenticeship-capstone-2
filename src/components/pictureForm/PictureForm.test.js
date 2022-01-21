import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PictureForm from "./PictureForm.component";

const onClick = jest.fn();
const onChange = jest.fn();

describe("<PictureForm>", () => {
  test("should create the pictureForm correctly", () => {
    const text =
      "Do you want watch another picutre of the day? Please select the date";
    const { container, getByTitle, getByText } = render(
      <PictureForm onClick={onClick} onChange={onChange} />
    );
    const datePicker = getByTitle("date");
    const button = getByTitle("dateButton");
    const label = getByText(text);

    expect(label).toBeInTheDocument();
    expect(container.querySelector("#form")).toBeValid();
    expect(datePicker).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
