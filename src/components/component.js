import React from 'react';

function PhotoOfDay(props) {
    return(
        <div>
            <h2 className='title'>{props.title}</h2>
            <h3 className='date'>{props.date}</h3>
            <div className='container'>
                <img className='image' src={props.url}/>
                <p className='details'>{props.details}</p> 
            </div>
            
        </div>
    )
}

export default PhotoOfDay;