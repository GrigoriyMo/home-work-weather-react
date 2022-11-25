
export default function Cities(props) {
    let citiesList;

    if (props.cities) {
        citiesList = props.cities.cities.data.map((elem) => 
            <li>{elem.city}</li>
        )
    } else {
        citiesList = <p>Список городов пуст</p>
    }

    console.log(citiesList)
    return (
        <ul>{citiesList}</ul>
    )
}