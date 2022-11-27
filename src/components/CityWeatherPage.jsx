import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import WeatherDays from './WeatherDays' //компомент расписания погоды на следующие дние
import Axios from 'axios';



export default function CityWeatherPage(props) {

    const [weather, setWeather] = useState(null);

    let params = useParams();

    useEffect(() => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.city}?unitGroup=metric&key=5P6TR787EC92RQQFJBFV4JMNH&contentType=json`

        async function fetchWeather(url) {
            Axios.get(url).then((response) => {
                setWeather({ weather: response.data })
            })
                .catch((err) => console.log(err));
        }

        fetchWeather(url);

    }, [params.city])
    let daysWeather;
    if (weather) {
        daysWeather = weather.weather.days.map((elem) => {

            <li>
                <p>Day:{elem.datetime}</p>
            </li>
        })
    }

    if (weather) {
        return (
            <section className="city-weather-page">
                <p>City: {params.city}</p>
                <p>Detailed address: {weather.weather.resolvedAddress} </p>
                <p>Latitude: {weather.weather.latitude} </p>
                <p>Longtitude: {weather.weather.longitude} </p>
                <div className="current-conditions">
                    <h2>Today </h2>
                    <p>Local temperature C: {weather.weather.currentConditions.temp}</p>
                    <p> Feels like C: {weather.weather.currentConditions.feelslike}</p>
                    <p>Wind speed: {weather.weather.currentConditions.windspeed} m/s</p>
                    <p>Pressure: {weather.weather.currentConditions.pressure}</p>
                    <p>Sunrise: {weather.weather.currentConditions.sunrise}</p>
                    <p>Sunset: {weather.weather.currentConditions.sunset}</p>
                </div>
                <div className="next-days-conditions">
                    <WeatherDays weatherDays={weather.weather.days} />
                </div>
            </section>
        )
    }

}