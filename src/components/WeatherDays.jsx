export default function WeatherDays(props) {
    const weatherDays = props.weatherDays;
    const listItems = weatherDays.map((elem) =>
        <li key={elem.datetimeEpoch}>
            <h3>Day: <b>{elem.datetime}</b></h3>
            <p>Local temperature C: {elem.temp}</p>
            <p> Feels like C: {elem.feelslike}</p>
            <p>Wind speed: {elem.windspeed} m/s</p>
            <p>Pressure: {elem.pressure}</p>
            <p>Sunrise: {elem.sunrise}</p>
            <p>Sunset: {elem.sunset}</p>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}