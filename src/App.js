import React, { useState } from "react";
import Loading from "./components/loading/Loading.component";
import PictureForm from "./components/pictureForm/PictureForm.component";
import { usePhoto } from "./hooks/usePhoto";
import { usePhotoDate } from "./hooks/usePhotoDate";

function App() {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const LoadData = async () => {
    const response = await usePhoto();
    setData(response);
    return response;
  };

  const LoadNewData = async () => {
    setLoading(true);
    const response = await usePhotoDate(date);
    setData(response);
    setLoading(false);
    return response;
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
          <Loading />
        ) : (
          <>
            <img title="picture-of-the-day" src={data.url} />
            <h2>{data.title}</h2>
            <p title="description">{data.explanation}</p>
          </>
        )}
      </header>
    </div>
  );
}
export default App;
