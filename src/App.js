import React, { useState } from "react";
import { usePhoto } from "./hooks/usePhoto";

function App() {
  const LoadData = async () => {
    const response = await usePhoto();
    setData(response);
    return response;
  };

  const [data, setData] = useState(LoadData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Picture of the day</h1>
        <img title="picture-of-the-day" src={data.url} />
        <h2>{data.title}</h2>
        <p title="description">{data.explanation}</p>
      </header>
    </div>
  );
}
export default App;
