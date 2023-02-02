import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import GIFLoader from "./GIFLoader";
// import gif from "./img/sunny.gif"

function App() {
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  // if (typeof data.main != "undefined") {
  //   const weatherType = data?.weather[0].main ;
  //   // console.log("mukul", weatherType);
  // }


  ////API Call
  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      " &appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setInputCity('');
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleKeydown = (e) => {
    // console.log("enter pressed")
    if (e.key === "Enter") {
      console.log("api call", e.target.value);
      setInputCity(e.target.value);
      getWeatherDetails(inputCity);
    }
  };
  // const handleDaily = (e) => {
  //   console.log("clickdaily")
  // }
  // const handleWeekly = (e) => {
  //   console.log("click weekly")
  // }
  // const handleSearch = () => {
  //   getWeatherDetails(inputCity)
  // }

  // useEffect(() => {
  //   getWeatherDetails("delhi");
  // },[])
  // const imageResolver = () => {

  // }

  return (
    <div className="app">
      <div className="main-block">
        {/* <h1 className="heading">Weather App</h1> */}

        <div className="input-box">
          <input
            type="text"
            value={inputCity}
            onChange={handleChangeInput}
            onKeyDown={handleKeydown}
            placeholder="Enter City Name..."
          />
          {/* <button className="btn btn-primary" type="button" onClick={handleSearch} onKeyDown={handleKeydown}>
            Search
          </button> */}
        </div>
        {typeof data.main != "undefined" ? (
          <div>
            <div className="output-block">
              <h5 className="city-name">{data.name}</h5>
              <h2 className="city-temp">
                {(data.main.temp - 273.15).toFixed(2)} C{" "}
              </h2>
              <GIFLoader data={data} />
              <h1 className="weather-type">{data?.weather[0].main}</h1>
              {/* {
                console.log(data?.weather[0].main)
              } */}
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default App;
