import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import matchMediaPolyfill from "mq-polyfill";
import PictureForm from "./PictureForm.component";

const onClick = jest.fn();
const onChange = jest.fn();

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event("resize"));
  };
});

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

  test("should render the picture form for web correctly", async () => {
    const { getByTitle } = render(
      <PictureForm onClick={onClick} onChange={onChange} />
    );
    const wrapper = getByTitle("wrapper-info");
    expect(wrapper).toHaveStyle(`flex-direction: row;`);
  });

  test("should render the picture form for mobile correctly", async () => {
    window.resizeTo(750, 667);
    const { getByTitle } = render(
      <PictureForm onClick={onClick} onChange={onChange} />
    );
    const wrapper = getByTitle("wrapper-info");
    expect(wrapper).not.toHaveStyle(`flex-direction: column;`);
  });
});
