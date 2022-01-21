import "@testing-library/jest-dom";
import { usePhoto } from "./usePhoto";
import { mockFetchPhoto } from "../assets/mocks/mockFetch";

beforeEach(() => {
  fetch.resetMocks();
});

describe("useFetch hook", () => {
  test("should fetch correctly", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockFetchPhoto));

    const response = await usePhoto();
    expect(response).toEqual(mockFetchPhoto);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("return null when failure", () => {});
});
