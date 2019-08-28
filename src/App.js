import React from "react";
import axios from 'axios';
import "./App.css";

import PhotoOfDay from './components/component.js'

function App (props) {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=ztmQx32zY78Rm5DL5gbyKBjQYmY9uY9WOZ0YzEvS')
  .then(response => {
    console.log(response.data);
  });
return(
    <div className='App'>
        <PhotoOfDay title='hi' 
                    url='https://apod.nasa.gov/apod/image/1908/M61-HST-ESO-S1024.jpg'
                    details='deets'/>
    </div>
  )
    
};

export default App;
