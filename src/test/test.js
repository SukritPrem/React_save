import React, { useState } from "react";
import Box from "./Box";

export default function App() {
  const [squarea, setSquarea] = useState({});
  const [squarea1, setSquarea1] = useState(squarea);
  const [numst, setnumst] = useState({ value: 0 });
  const [colunm, setcolunm] = useState(0);

  const [xnext, setxnext] = useState(true);
  const [value, setvalue] = useState("");
  //Get value from value//
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setnumst({ ...numst, [name]: value });
  };
  //************************************************** */
  //Restart value//

  //************************************************** */
  // GET value from client to push in array//
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = numst.value;
    x = Number(x);
    // convert num to
    setSquarea((...squarea) => {
      // console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < x * x; i++) {
        const currentSquare = { id: i, st: "" };
        newSquares.push(currentSquare);
      }
      return newSquares;
    });
    setcolunm(colunm + x);
    // setSquarea1((...squarea) => {
    //   // console.log(...squarea);
    //   const newSquares = [];
    //   for (let i = 0; i < x * x; i++) {
    //     const currentSquare = { id: i, st: "" };
    //     newSquares.push(currentSquare);
    //   }
    //   return newSquares;
    // });
    // console.log(colunm, "");
    setnumst({ ...numst, ["value"]: 0 });
  };
  //************************************************** */
  // change value in colunm//
  let cssProperties = {};
  cssProperties["--columns-count"] = colunm;
  //************************************************** */
  // show componete//
  let check = false; //check squarea null?
  let squareElements = [];

  function toggle(state, id) {
    setSquarea1((...squarea) => {
      // console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          const currentSquare = { id: i, st: "x" };
          console.log(currentSquare);
          newSquares.push(currentSquare);
        } else {
          const currentSquare = { id: i, st: "" };
          console.log(currentSquare);
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }
  // console.log(squarea1.length === undefined);
  // console.log(Object.is(squarea1, null));
  console.log(squarea);
  if (squarea.length > 0) {
    squareElements = squarea.map((square) => (
      <Box id={square.id} toggle={toggle} state={squarea} />
    ));
    check = true;
  }
  //************************************************** */
  function restart() {
    setSquarea({});
    setcolunm(0);
  }
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
        <button onClick={restart} fun={setSquarea}>
          restart
        </button>
        {check && (
          <div className="grid" style={cssProperties}>
            {squareElements}
          </div>
        )}
      </form>
    </>
  );
}
