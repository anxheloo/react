import './App.css';
import { useState } from 'react';  // -> to import useState |  it provides a way to manage state in a React component without using a class.

/*
function App() {

  // in our case, we will use  the useState below to change the color of the text when we click the button
  const [textColor, setTextColor] = useState("black"); // textColor is equal to the initial state( useState('black') ), setTextColor is the function we use to change the state.

  return (
    <div className="App">

      <button onClick={() => {textColor === "black" ? setTextColor("red") : setTextColor("black")}}>Change my color</button>

      <h1 style={{color: textColor}}>Hello World</h1>
    </div>
  );
}

*/

function App() {

  
  const [count, setCount] = useState(0); 


  // we can also use this way for our functions instead of this inside the onClick function as other examples:  () => {setCount(count + 1)} 
  const increase = () => {
    setCount(count + 1);
  };  


  return (
    <div className="App">

      <button onClick={increase}>Increase</button>  // increase the number by 1 
      <button onClick={() => {setCount(count - 1)}}>Decrease</button>  // decrease the number by 1 
      <button onClick={() => {setCount(0)}}>Set to 0</button>          // set the number to 0

      <h1>{count}</h1>

    </div>
  );
}


export default App;
