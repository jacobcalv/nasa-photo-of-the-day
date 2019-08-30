import React, {useState, useEffect} from "react";
import axios from 'axios';

import "./App.css";

import PhotoOfDay from './components/component.js'

function App (props) {
  const [apiData, setApiData] = useState({});

  const [date, setDate] = useState("https://api.nasa.gov/planetary/apod?api_key=815oDd6HlGCMeBtD5DhRoJRoqkqQd1X6ftcObMPt");
  const today = new Date();
  const [dayOfWeek, setDayOfWeek] = useState(today.getDate())
  console.log(today.getMonth()+1)
  const backADay = () => {
    setDate(date=> `https://api.nasa.gov/planetary/apod?api_key=815oDd6HlGCMeBtD5DhRoJRoqkqQd1X6ftcObMPt&date=${today.getFullYear()}-${today.getMonth() + 1}-${dayOfWeek -1}`)
  }
  useEffect((props) => {
    console.log('render check')
    axios.get(date)
      .then(response => {
        setApiData(response.data);
      });
  }, [date])

return(
    <div className='App'>
        <PhotoOfDay back={'Missed Yesterday? Click Here!'}
                    dateFunc={backADay}
                    title={apiData.title}
                    date={apiData.date} 
                    url= {apiData.url}
                    details={apiData.explanation}/>
    </div>
  )
    
};

export default App;
