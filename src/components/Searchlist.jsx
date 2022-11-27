import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Search from './Search' //компомент формы поиска
import Cities from './Cities' //компонент который рендерит список городов

export default function Searchlist(props) {

    const [cities, setCities] = useState(null);
    const [citySearched, setCitySearched] = useState(null);

    function handleSearchInput(city) {
        setCitySearched({ citySearched: city });
    }

    useEffect(() => {
        const localStorageCities = localStorage.getItem('cities');

        async function fetchCities() {
            const options = {
                method: 'GET',
                url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/RU/regions/MOS/cities',
                params: { limit: '10' },
                headers: {
                    'X-RapidAPI-Key': '',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                }
            };

            Axios.request(options).then(function (response) {

                setCities({ cities: (response.data) });

                localStorage.setItem('cities', JSON.stringify(response.data));

            }).catch(function (error) {
                console.error(error);
            });
        }
        if (localStorageCities) {
            setCities({ cities: JSON.parse(localStorageCities) });
        } else {
            fetchCities();
        }

    }, []);

    return (
        <div className="search-list">
            <Search onSearchInput={handleSearchInput} />
            <Cities cities={cities} searchString={citySearched} />
        </div>
    )
} 