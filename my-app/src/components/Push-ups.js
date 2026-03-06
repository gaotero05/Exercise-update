import {useState} from "react";

function PushUps() {
 let [count, setCount] = useState(0);
  return (
   <div>
    <h2>Push-ups</h2>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increase Rep</button>
    <button onClick={() => setCount(count = 0)}>Reset</button>
   </div>
  );
}

export default PushUps;