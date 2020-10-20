import React, {useState} from 'react';
import styled from 'styled-components';

import App from '../App.js'

function Date(props) {
    const [date, setDate] = useState("/");
    console.log(props)
    return(
        <>
            <App
                date= {setDate(date)}
            />
        </>
    )
}

export default Date;