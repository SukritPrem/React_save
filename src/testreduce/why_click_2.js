import { useState, useReducer } from "react";
import Box from "./Box";
const reducer = (state, action) => {
  switch (action.type) {
    case "changed_name": {
      return {
        value: action.value,
      };
    }
  }
};

export default function App() {
  const [num, setnum] = useState(0);
  const [square, setSquare] = useState({});
  const initialState = { value: {} };
  const [colunm, setcolunm] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [square1, setSquare1] = useState({});
  function handleChange(e) {
    let num1 = Number(e.target.value);
    // console.log(num1);
    setnum(num1);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(num);
    setcolunm(num);
    dispatch({
      type: "start",
      value: {},
    });
    setSquare({});
    setSquare(() => {
      // console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < num * num; i++) {
        const currentSquare = { id: i, st: "" };
        newSquares.push(currentSquare);
      }
      return newSquares;
    });
    dispatch({
      type: "changed_name",
      value: square,
    });
  }

  let cssProperties = {};
  cssProperties["--columns-count"] = colunm;
  console.log(square);

  function toggle(id) {
    square.map((square, index) => {
      if (square.id === id) {
        console.log(...square);
      }
    });
    console.log(square);
  }
  //   console.log(square);
  let squareElements = [];
  if (square.length > 0) {
    squareElements = square.map((square) => (
      <Box id={square.id} toggle={toggle} />
    ));
  } else if (state["value"].length > 0) {
  }
  //   function x() {
  //     dispatch({
  //       type: "changed_name",
  //       nextName: e.target.value,
  //     });
  //   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={state.name} onChange={handleChange} />
        <div className="grid" style={cssProperties}>
          {squareElements}
        </div>
      </form>
    </div>
  );
}
