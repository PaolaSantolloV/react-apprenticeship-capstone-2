import React, { useState } from "react";

import Loading from "./components/loading/Loading.component";
import PictureForm from "./components/pictureForm/PictureForm.component";
import { usePhoto } from "./hooks/usePhoto";
import { usePhotoDate } from "./hooks/usePhotoDate";
import {
  StyledError,
  StyledErrorImg,
  StyledLogo,
  StyledTitle,
} from "./App.styles";
import PictureCard from "./components/pictureCard/PictureCard.component";

function App() {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const LoadData = async () => {
    setLoading(true);
    const response = await usePhoto();
    setData(response);
    setLoading(false);
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
        <StyledTitle>
          <StyledLogo src="NASA_logo.png" alt="logo" />
          <br />
          NASA Picture of the day
        </StyledTitle>
        <PictureForm
          onChange={(event) => setDate(event.target.value)}
          onClick={LoadNewData}
        />
        {loading === true ? (
          <Loading title="loading" />
        ) : errorDate === true ? (
          <StyledError title="error-date">
            Exists a error on the date, Please try with a new date. <br />
            {data.msg}
            <br />
            <StyledErrorImg src="error2.gif" alt="error" />
          </StyledError>
        ) : error === true || data.lenght < 0 ? (
          <StyledError title="error-request">
            Exists a error on the request. Please try again or wait a moment.
            <br />
            <StyledErrorImg src="error2.gif" alt="error" />
          </StyledError>
        ) : (
          <PictureCard
            title={data.title}
            explanation={data.explanation}
            date={data.date}
            url={data.url}
            mediaType={data.media_type}
          />
        )}
      </header>
    </div>
  );
}
export default App;
