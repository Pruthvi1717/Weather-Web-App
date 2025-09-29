import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        temp: 30,
        tempMin: 25,
        tempMax: 35,    
        humidity: 40,
        feelsLike: 32,
        weather: "Sunny",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    
    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    ); 
}