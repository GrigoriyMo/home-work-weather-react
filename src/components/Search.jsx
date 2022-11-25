import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Flex, Button, TextField, defaultTheme, Provider } from '@adobe/react-spectrum';


export default function Search(props) {
    const [city, setCity] = useState('');
    const [cities, setCities] = useState(null);

    function handleChange(event) {
        this.setState({ city: event });
    }

    function handleSubmit(event) {
        event.preventDefault();
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
        <Provider theme={defaultTheme}>
            <fieldset>
                <form onSubmit={(e) => this.handleSubmi(e)}>
                    <Flex direction="column" gap="size-100" alignItems="center">

                        <label> <p> Название города:</p>
                            <TextField value={city} onChange={() => this.handleChange}>
                            </TextField>
                        </label>

                        <Button type="submit " variant="primary">
                            Найти
                        </Button>

                    </Flex>
                </form>
            </fieldset>
        </Provider>
    )

}