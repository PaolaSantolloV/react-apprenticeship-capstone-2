import "@testing-library/jest-dom";
import { usePhotoDate } from "./usePhotoDate";
import {
  mockFetchPhoto,
  mockErrorFetchPhoto,
  mockErrorDate,
} from "../assets/mocks/mockFetch";

beforeEach(() => {
  fetch.resetMocks();
});

describe("useFetch hook", () => {
  test("should fetch correctly", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockFetchPhoto));
    const date = "2014-10-01";
    const response = await usePhotoDate(date);
    expect(response).toEqual(mockFetchPhoto);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("return error when the date is invalid", async () => {
    fetch.mockReject(() => Promise.reject(mockErrorDate));
    const date = "01-10-2014";
    const response = await usePhotoDate(date);

    expect(response).toEqual(mockErrorDate);
    expect(fetch).toHaveBeenCalled();
  });

  test("return error when failure", async () => {
    fetch.mockReject(() => Promise.reject(mockErrorFetchPhoto));
    const date = "2014-10-01";
    const response = await usePhotoDate(date);

    expect(response).toEqual(mockErrorFetchPhoto);
    expect(fetch).toHaveBeenCalled();
  });
});
