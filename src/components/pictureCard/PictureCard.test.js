import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import matchMediaPolyfill from "mq-polyfill";
import PictureCard from "./PictureCard.component";

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

describe("<PictureCard>", () => {
  test("should render the image of picture of the day correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
        mediaType="image"
      />
    );
    const picture = getByTitle("picture-of-the-day");
    expect(picture).toBeInTheDocument();
  });

  test("should render the video of picture of the day correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
        mediaType="video"
      />
    );
    const video = getByTitle("video-of-the-day");
    expect(video).toBeInTheDocument();
  });

  test("should render the title of picture of the day correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
      />
    );
    const titlePicture = getByTitle("title");
    expect(titlePicture).toBeInTheDocument();
  });

  test("should render the date of picture of the day correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
      />
    );
    const datePicture = getByTitle("date-picture");
    expect(datePicture).toBeInTheDocument();
  });

  test("should render the calendar image correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
      />
    );
    const datePicture = getByTitle("calendar");
    expect(datePicture).toBeInTheDocument();
  });

  test("should render the description of picture of the day correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
      />
    );
    const descriptionPicture = getByTitle("description");
    expect(descriptionPicture).toBeInTheDocument();
  });

  test("should render the picture card for web correctly", async () => {
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
      />
    );
    const card = getByTitle("picture-card");
    expect(card).toHaveStyle(`flex-direction: row;`);
  });

  test("should render the picture card for mobile correctly", async () => {
    window.resizeTo(750, 667);
    const { getByTitle } = render(
      <PictureCard
        title="test"
        explanation="test"
        date="test"
        url="defaulf.jpg"
      />
    );
    const wrapper = getByTitle("picture-card");
    expect(wrapper).not.toHaveStyle(`flex-direction: column;`);
  });
});
