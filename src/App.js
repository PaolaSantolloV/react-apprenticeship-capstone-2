import React, { useState } from "react";
import Loading from "./components/loading/Loading.component";
import PictureForm from "./components/pictureForm/PictureForm.component";
import { usePhoto } from "./hooks/usePhoto";
import { usePhotoDate } from "./hooks/usePhotoDate";

function App() {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const LoadData = async () => {
    const response = await usePhoto();
    setData(response);
    return response;
  };

  const LoadNewData = async () => {
    setLoading(true);
    usePhotoDate(date)
      .then((result) => {
        setData(result);
        setError(false);
        if (result.code === 400) {
          setErrorDate(true);
        } else {
          setErrorDate(false);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  const [data, setData] = useState(LoadData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Picture of the day</h1>
        <PictureForm
          onChange={(event) => setDate(event.target.value)}
          onClick={LoadNewData}
        />
        {loading === true ? (
          <Loading title="loading" />
        ) : errorDate === true ? (
          <h1 title="error-date">
            Exists a error on the date, Please try with a new date. {data.msg}
          </h1>
        ) : error === true || data.lenght < 0 ? (
          <h1 title="error-date">
            Exists a error on the request. Please try again or wait a moment.
          </h1>
        ) : (
          <>
            <img title="picture-of-the-day" src={data.url} />
            <h2 title="title">{data.title}</h2>
            <p title="description">{data.explanation}</p>
          </>
        )}
      </header>
    </div>
  );
}
export default App;
