/*
https://www.npmjs.com/package/react-countdown 
used for the countdown
*/

import {useState} from "react";
import Countdown from "react-countdown";

function Plank() {
 const [seconds, setSeconds] = useState();
 const [targetDate, setTargetDate] = useState();
 let startTimer = () => {
  setTargetDate(Date.now() + seconds * 1000);}

 return (
  <div className = "plankDiv">
   <h2>Plank for</h2>
   <input
    type="number"
    value={seconds}
    onChange={(e) => setSeconds(e.target.value)}/> 
   <p>Seconds</p>
   <button onClick={startTimer}>Start</button>
   <br />
    {targetDate && (<Countdown date={targetDate}/>)}
  </div>
  );
}

export default Plank;