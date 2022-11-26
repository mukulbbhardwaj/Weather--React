import React from "react";
import "./App.css";
import sunny from "./img/sunny.gif";
import rain from "./img/rain.gif"
import haze from "./img/haze.jpeg"
import thunderstorm from "./img/thunderstorm.webp"
import drizzle from "./img/drizzle.gif"
import snow from "./img/snow.gif"
import clouds from "./img/clouds.gif"

// var weathertype = props.data?.weather[0].main;
var weathertype = "Rain";
var image = sunny;
const imageResolver = (weathertype) => {
  if (weathertype === "Thunderstorm") {
    image = thunderstorm;
  } else if (weathertype === "Drizzle") {
    image = drizzle;
  } else if (weathertype === "Rain") {
    image = rain;
  } else if (weathertype === "Snow") {
    image = snow;
  } else if (weathertype === "Clear") {
    image = sunny;
  } else if (weathertype === "Clouds") {
    image = clouds;
  } else {
    image = haze;
  } 
  return image;
  
}


const GIFLoader = (props) => {
    return (
      <div>
        <h1 className="hide">{weathertype = props.data?.weather[0].main}</h1>
        
        {console.log(props.data?.weather[0].main)}
        <img src={imageResolver(weathertype)} alt="weather image" height="200px" width="300px" />
      </div>
    );
}

export default GIFLoader;