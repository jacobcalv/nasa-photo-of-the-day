import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

import PhotoOfDay from './components/component.js'

function App (props) {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    console.log('render check')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=815oDd6HlGCMeBtD5DhRoJRoqkqQd1X6ftcObMPt&date=2019-07-15')
      .then(response => {
        setApiData(response.data);
      });
  }, [])

return(
    <div className='App'>
        <PhotoOfDay title={apiData.title}
                    date={apiData.date} 
                    url= {apiData.url}
                    details={apiData.explanation}/>
    </div>
  )
    
};

export default App;
