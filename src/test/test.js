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
  function restart() {
    setSquarea({});
  }
  // const restart = () => {
  //   setSquare({});
  // };
  let num_matrix = 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = numst.value;
    x = Number(x);
    // convert num to
    num_matrix = x;
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

  let check = false; //check squarea null?
  let squareElements = [];
  // console.log(squarea.length > 0);
  if (squarea.length > 0) {
    squareElements = squarea.map(() => <Box />);
    check = true;
  }
  let string = "repeat(" + num_matrix + ", auto)";
  console.log(squarea);
  console.log(check);
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(4),auto",
    width: "100px",
    margin: "auto",
  };
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
      {check && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4),1fr" }}>
          {squareElements}
        </div>
      )}
    </>
  );
}
