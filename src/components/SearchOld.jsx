import React from 'react';
import Axios from 'axios';
import { Flex, Button, TextField, defaultTheme, Provider } from '@adobe/react-spectrum';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            result: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getData() {
        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/RU/regions/MOS/cities',
            params: { limit: '10' },
            headers: {
                'X-RapidAPI-Key': 'c9979b5799msh55755f6b659c677p15fefdjsn6c7b5baab11f',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };


    }
    
    //запускается после того как компонент отрендерился
    componentDidMount() {
        this.getData();
    }

    handleChange(event) {
        this.setState({ city: event });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return <Provider theme={defaultTheme}>
            <fieldset>
                <form onSubmit={this.handleSubmit}>
                    <Flex direction="column" gap="size-100" alignItems="center">

                        <label> <p> Название города:</p>
                            <TextField value={this.state.city} onChange={this.handleChange}>
                            </TextField>
                        </label>

                        <Button type="submit " variant="primary">
                            Найти
                        </Button>

                    </Flex>
                </form>
            </fieldset>
        </Provider>
    }
}

export default Search;