import React from 'react';

function PhotoOfDay(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.url}/>
            <p>{props.details}</p>
        </div>
    )
}

export default PhotoOfDay;