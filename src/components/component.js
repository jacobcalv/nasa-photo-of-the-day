import React from 'react';

function PhotoOfDay(props) {
    return(
        <div>
            <h2 className='title'>{props.title}</h2>
            <h3>{props.date}</h3>
            <img className='image' src={props.url}/>
            <p>{props.details}</p>
        </div>
    )
}

export default PhotoOfDay;