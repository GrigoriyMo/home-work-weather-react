import React, { useState, useEffect } from "react";
import { Flex, Button, TextField, defaultTheme, Provider } from '@adobe/react-spectrum';

export default function Search(props) {
    const [city, setCity] = useState('');

    function handleChange(event) {
        setCity( event );
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Provider theme={defaultTheme}>
            <fieldset>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Flex direction="column" gap="size-100" alignItems="center">

                        <label> <p> Название города:</p>
                            <TextField value={city} onChange={ e => handleChange(e)}>
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