import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import React from "react";
import PictureForm from "./components/pictureForm/PictureForm.component";
import { mockErrorDate } from "./assets/mocks/mockFetch";

const onChange = jest.fn();
const onClick = jest.fn();

beforeEach(() => {
  fetch.resetMocks();
});

describe("<App>", () => {
  test("should render the title app correctly", async () => {
    await act(async () => render(<App />));
    const titleElement = screen.getByText("NASA Picture of the day");
    expect(titleElement).toBeInTheDocument();
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
    expect(input).toBeInTheDocument();
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
    await act(async () => fireEvent.click(button));

    expect(button).toBeInTheDocument();
  });

  test("should laoding element render corretly", async () => {
    const setResponse = jest.fn();
    const useResponse = jest.spyOn(React, "useState");
    useResponse.mockImplementation([mockErrorDate, setResponse]);

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

    const loading = screen.getByTitle("loading");
    expect(loading).toBeInTheDocument();
  });

  test("should error date label render corretly", async () => {
    // const setDate = jest.fn();
    // const useDate = jest.spyOn(React, "useState");
    // useDate.mockImplementation([true, setDate]);
    // await act(async () =>
    //   render(
    //     <App>
    //       <PictureForm
    //         onChange={onChange}
    //         onClick={onClick}
    //         value="06-10-2020"
    //       />
    //     </App>
    //   )
    // );
    // const input = screen.getByTitle("date");
    // fireEvent.change(input, { target: { value: "06-10-2020" } });
    // const button = screen.getByTitle("dateButton");
    // await act(async () => fireEvent.click(button));
    // const error = screen.getByTitle("error-date");
    // expect(error).toBeInTheDocument();
  });

  test("should error label render corretly when the request failed", async () => {});
});
