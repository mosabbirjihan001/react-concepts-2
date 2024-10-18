import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Count from "./Count";
import Team from "./team";
import Users from "./Users";
import Friends from "./Friends";


function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }

  const addToNumber = (num) => {
    alert(num + 10)
  }

  return (
    <>
      <h1>React</h1>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>


      <Count></Count>
      <Counter></Counter>
      <button onClick={handleClick}>Click me </button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={ () => {
        alert('third clicked')
      } }>Third</button>
      <button onClick={() => addToNumber(10)}>Four</button>
    </>
  );
}


export default App;
