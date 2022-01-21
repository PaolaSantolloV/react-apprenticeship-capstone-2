const apiKey = "egwuPjIf803mZ9oZJqCH2Gh36n5nEAyqs9TEIXV4";

export const usePhotoDate = async (date) => {
  console.log("dated", date);
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    return e;
  }
};
