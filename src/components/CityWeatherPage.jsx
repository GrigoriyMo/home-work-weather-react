import React, { useState, useEffect } from "react";
import Axios from 'axios';

export default function CityWeatherPage(props) {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.cityName}?unitGroup=metric&key=5P6TR787EC92RQQFJBFV4JMNH&contentType=json`

        async function fetchWeather(url) {
            Axios.get(url).then((response) => {
                setWeather({ weather: response.data })
            })
            .catch((err)=>console.log(err));
        }
        fetchWeather(url);
    }, [props.cityName])

    return (
        <section className="city-weather-page">
            <p>City: {props.cityName}</p>

        </section>
    )
}