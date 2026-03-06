/*
https://www.youtube.com/watch?v=jPo0mIcNZfM
Heavily edited this code to get my stopwatch
https://www.geeksforgeeks.org/reactjs/lap-memory-stopwatch-using-react/
Used this to learn about laps
*/


import React, { useState, useEffect } from "react";

function Running() {
 const [seconds, setSeconds] = useState(0);
 const [isRunning, setIsRunning] = useState(false);
 const [laps, setLaps] = useState([]);
 const Start = () => {
  setIsRunning(true);
 };
 const Reset = () => {
  setIsRunning(false);
  setSeconds(0);
  setLaps(prev => [...prev, seconds]);
 };
 const formatTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const remainingSeconds = secs % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
 };

  useEffect(() => {
   let interval;
   if (isRunning) {
    interval = setInterval(() => {setSeconds(prev => prev + 1);}, 1000);
   }
   return () => clearInterval(interval);
  }, [isRunning]);

  return (
   <div className="timer">
    <div>
     <h1>{formatTime(seconds)}</h1>
     <button onClick={Start}>Start</button>
     <button onClick={Reset}>Record Time</button>
    </div>
    <br />
    <div>
     {laps.map((lap, index) => (
      <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
     ))}
    </div>
   </div>
  );
}

export default Running;