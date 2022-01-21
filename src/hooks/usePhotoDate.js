const apiKey = "egwuPjIf803mZ9oZJqCH2Gh36n5nEAyqs9TEIXV4";

export const usePhotoDate = async (date) => {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
};
