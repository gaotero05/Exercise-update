import './App.css';
import PushUps from './components/Push-ups.js'
import Plank from './components/Plank.js'
import Running from './components/Running.js'
import {useState} from 'react';

function App() {

 const [page, setPage] = useState("home");

 return (
  <div>
   <div>
    <h1>Move It Move It</h1> <br />
     {page === "home" && (
       <div>
        <h2>Choose an exercise</h2>
        <button onClick = {() => setPage("pushups")}>Push-Ups</button> <br />
        <button onClick = {() => setPage("running")}>Running</button> <br />
        <button onClick = {() => setPage("plank")}>Plank</button>
       </div>
      )}

      {page === "pushups" && <PushUps />}
      {page === "running" && <Running />}
      {page === "plank" && <Plank />}
    </div> 
  </div>
 );
}

export default App;
