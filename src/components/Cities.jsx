function search(str, list) {
    console.log(str)
    let searchresult = list.filter(list =>
        list.city.toLowerCase().indexOf(str.toLowerCase()) != -1
    );
        return searchresult
}

export default function Cities(props) {
   
    let citiesList;

    if (props.cities) {
        citiesList = props.cities.cities.data.map((elem) =>
            <li className="city-elem" key={elem.id}>{elem.city}</li>
        )
    } else {
        citiesList = <p>Список городов пуст</p>
    }
   
    if(props.searchString && props.cities){
        
        citiesList = (search(props.searchString.citySearched, props.cities.cities.data)).map((elem) =>
        <li className="city-elem" key={elem.id}>{elem.city}</li>
    )
    }

    return (
        <ul>{citiesList}</ul>
    )
}