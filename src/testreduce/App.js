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
  const [square, setSquarea] = useState({});
  const [colunm, setcolunm] = useState(0);

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
    setSquarea(() => {
      // console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < num; i++) {
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
  const initialState = { value: {} };
  const [state, dispatch] = useReducer(reducer, initialState);
  let squareElements = [];
  if (state["value"].length > 0) {
    squareElements = state["value"].map((square) => <Box id={square.id} />);
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
        <div style={cssProperties}>{squareElements}</div>
      </form>
    </div>
  );
}

// import { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "incremented_age": {
//       return {
//         name: state.name,
//         age: state.age + 1,
//       };
//     }
//     case "changed_name": {
//       return {
//         name: action.nextName,
//         age: state.age,
//       };
//     }
//   }
//   throw Error("Unknown action: " + action.type);
// }

// const initialState = { name: "Taylor", age: 42 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: "incremented_age" });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: "changed_name",
//       nextName: e.target.value,
//     });
//   }

//   return (
//     <>
//       <input value={state.name} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Increment age</button>
//       <p>
//         Hello, {state.name}. You are {state.age}.
//       </p>
//     </>
//   );
// }
