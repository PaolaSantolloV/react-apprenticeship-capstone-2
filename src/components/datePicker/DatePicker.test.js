import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePicker from "./DatePicker.component";

const onChange = jest.fn();

describe("<DatePicker>", () => {
  test("should create the datePicker element correctly", () => {
    const { getByTitle } = render(
      <DatePicker title="date" id="test" name="test" onChange={onChange} />
    );
    const dateInput = getByTitle("date");

    expect(dateInput).toBeInTheDocument();
  });
});
