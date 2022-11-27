import { Link } from "react-router-dom";

function search(str, list) {

    let searchresult = list.filter(list =>
        list.city.toLowerCase().indexOf(str.toLowerCase()) != -1
    );
    return searchresult
}

export default function Cities(props) {

    let citiesList;

    if (props.cities) {
        citiesList = props.cities.cities.data.map((elem) =>
            <li className="city-elem" key={elem.id}>
                <Link to={'/weather/' + elem.city} >
                    {elem.city}
                </Link>
            </li>
        )
    } else {
        citiesList = <p>Список городов пуст</p>
    }

    if (props.searchString && props.cities) {

        citiesList = (search(props.searchString.citySearched, props.cities.cities.data)).map((elem) =>
            <li className="city-elem" key={elem.id}>
                <Link to={'/weather/' + elem.city} >
                    {elem.city}
                </Link></li>
        )
    }

    return (
        <ul className="cities-ul">{citiesList}</ul>
    )
}