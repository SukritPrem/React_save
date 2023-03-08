import React, { useState } from "react";
import Box from "./Box";
export default function App() {
  const [squarea, setSquarea] = useState({});
  const [square, setSquare] = useState([]);
  const [numst, setnumst] = useState({ value: 0 });
  const [i, seti] = useState(0);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setnumst({ ...numst, [name]: value });
  };
  // function restart() {
  //   setSquarea({});
  // }
  const restart = () => {
    setSquare({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = numst.value;
    x = Number(x);
    // convert num to array
    setSquarea((...squarea) => {
      console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < x * x; i++) {
        const currentSquare = { id: i, st: " " };
        newSquares.push(currentSquare);
      }
      return newSquares;
    });

    setnumst({ ...numst, ["value"]: 0 });
  };

  const squareElements = squarea.map(() => <Box />);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Hello React</h1>
        <input
          type="number"
          value={numst.value}
          name="value"
          onChange={handleChange}
        />
        <button onClick={restart}>restart</button>
      </form>
      {<div class="grid">{squareElements}</div>}
    </>
  );
}
