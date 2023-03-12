import { useState, useReducer } from "react";
import Box from "./Box";
const reducer = (state, action) => {
  switch (action.type) {
    case "changed_board": {
      return {
        value: action.value,
      };
    }
    default: {
      console.log("Something is wrong");
    }
  }
};
const reducer_win = (state, action) => {
  switch (action.type) {
    case "changed_array_for_win": {
      return {
        value: action.value,
      };
    }
    default: {
      console.log("Something is wrong2");
    }
  }
};
const reducer_s_win = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "changed_string_for_win": {
      return {
        valueX: action.valueX,
        valueO: action.valueO,
      };
    }
    default: {
      console.log("Something is wrong3");
    }
  }
};

export default function App() {
  const [num, setnum] = useState(0); // for receive value from user
  const [square, setSquare] = useState({}); // set square
  const initialState = { value: {} };
  const [colunm, setcolunm] = useState(0); // set box to colunm
  const [state, dispatch] = useReducer(reducer, initialState); //set value for next play
  const [nextplay, setnextplay] = useState(false); // every play
  const [turn, setturn] = useState(false); //x or o
  const initialwinner = { value: {} };
  const [checkwinner, setwinner] = useReducer(reducer_win, initialwinner); //get value to winner
  const initialstringwin = { value: {} };
  const [stringwin, setstringwin] = useReducer(reducer_s_win, initialstringwin);
  const [another_win, setanotherwin] = useState(false); // check have some one win?
  const [textwin, settextwin] = useState(""); //show text for winner
  const [numhis, setnumhistory] = useState(0);
  const [history, sethistory] = useState({});
  function handleChange(e) {
    let num1 = Number(e.target.value);
    // console.log(num1);
    setnum(num1);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(num);
    setcolunm(num);
    setnextplay(false);
    setturn(false);
    setanotherwin(false);
    settextwin("");
    sethistory({});
    setnumhistory(0);
    dispatch({
      type: "changed_board",
      value: {},
    });
    setwinner({
      type: "changed_array_for_win",
      value: {},
    });
    setSquare({});
    const loop = num * num;
    setSquare(() => {
      // console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < loop; i++) {
        const currentSquare = { id: i, st: "" };
        newSquares.push(currentSquare);
      }
      return newSquares;
    });
    sethistory(() => {
      // console.log(...squarea);
      const newSquares = [];
      for (let i = 0; i < loop; i++) {
        const currentSquare = { id: i, array: [] };
        newSquares.push(currentSquare);
      }
      return newSquares;
    });
    function array_set_win() {
      let array1 = [];
      let arrays = [];
      let loop_win = loop;
      let x = 0;
      while (loop_win > 0) {
        loop_win = loop_win - 1;
        array1.push(x);
        x = x + 1;
      }
      // console.log(array1);
      // console.log(num);
      let countx = 0;
      let county = num;
      for (let i = 0; i < num; i++) {
        arrays.push(array1.slice(countx, county));
        // console.log(x);
        countx = countx + num;
        county = county + num;
      }

      let array_c = [];
      for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
          array_c.push(arrays[j][i]);
        }
      }

      countx = 0;
      county = num;
      for (let i = 0; i < num; i++) {
        arrays.push(array_c.slice(countx, county));
        countx = countx + num;
        county = county + num;
      }
      array_c = [];
      for (let i = 0; i < num; i++) {
        array_c.push(arrays[i][i]);
      }
      arrays.push(array_c);
      array_c = [];
      let j = 0;
      for (let i = num - 1; 0 <= i; i--) {
        array_c.push(arrays[j][i]);
        j++;
      }
      // console.log(arrays);
      return arrays;
    }
    let array_win = array_set_win();
    setwinner({
      type: "changed_array_for_win",
      value: array_win,
    });
    const [string_winX, string_winO] = Stringwin();
    function Stringwin() {
      let newSquaresX = "x";
      let newSquaresO = "o";
      for (let i = 0; i < num - 1; i++) {
        newSquaresX = newSquaresX + "x";
      }
      for (let i = 0; i < num - 1; i++) {
        newSquaresO = newSquaresO + "o";
      }
      return [newSquaresX, newSquaresO];
    }
    setstringwin({
      type: "changed_string_for_win",
      valueX: string_winX,
      valueO: string_winO,
    });
  }

  let cssProperties = {};
  cssProperties["--columns-count"] = colunm;
  // console.log(square);

  function toggle(key) {
    if (another_win === false) {
      let square_clone = [];

      if (nextplay === false) {
        square_clone = square.map((square, index) => {
          // console.log(square.st === " ");
          // const newSquares = [];
          let currentSquare = { id: null, st: null };
          if (square.id === key) {
            // console.log(...squarea);

            currentSquare = { id: square.id, st: "x" };
            // newSquares.push(currentSquare);
          } else {
            currentSquare = { id: square.id, st: " " };
            // newSquares.push(currentSquare);
          }
          // console.log(currentSquare);
          setnextplay(true);
          return currentSquare;
        });

        // sethistory(...history, square_clone);
      } else if (nextplay === true) {
        square_clone = state["value"].map((square, index) => {
          if (square.id === key && square.st === " ") {
            const square1 = { ...square, st: "x" };
            if (turn === false) {
              const square1 = { ...square, st: "o" };
              setturn(true);
              return square1;
            }
            setturn(false);
            return square1;
          }
          return square;
        });
        console.log(history);

        // sethistory(...history, square_clone);
      }
      // console.log(nextplay);
      // console.log(square_clone);
      // console.log(square);
      console.log(history);
      console.log(numhis);
      dispatch({
        type: "changed_board",
        value: square_clone,
      });
      // console.log(checkwinner);
      // console.log(state);
      checkwin(checkwinner["value"], square_clone);
      console.log(stringwin);
      function checkwin(checkwinner, square_clone) {
        let check_array = [];
        for (let i = 0; i < checkwinner.length; i++) {
          const value = checkwinner[i];
          let check_array = [];
          // console.log(square_clone[0]["st"]);
          for (let j = 0; j < value.length; j++) {
            check_array.push(square_clone[value[j]]["st"]);
          }
          console.log(check_array);
          for (let j = 0; j < check_array.length; j++) {
            const element = check_array.join("");
            console.log(element);
            if (element === stringwin["valueX"]) {
              console.log("found x");
              settextwin("I'm winner");
              setanotherwin(true);
              break;
            } else if (element === stringwin["valueO"]) {
              console.log("found o");
              settextwin("I'm winner");
              setanotherwin(true);
              break;
            }
          }
        }
      }
    } else if (another_win === true) {
      settextwin("I'm winner");
    }
  }

  //  console.log(nextplay);
  let squareElements = [];
  if (square.length > 0 && nextplay === false && another_win === false) {
    squareElements = square.map((square) => (
      <Box id={square.id} toggle={toggle} />
    ));
    console.log(squareElements);
    // setnumhistory(numhis + 1);
    // let his = square.map((square) => {
    //   // console.log(square);
    //   if (square.id === numhis) {
    //     return { ...square, array: squareElements };
    //   } else {
    //     return square;
    //   }
    // });
    // sethistory(his);
  } else if (
    state["value"].length > 0 &&
    nextplay === true &&
    another_win === false
  ) {
    // console.log("hi")
    squareElements = state["value"].map((square1) => (
      <Box id={square1.id} toggle={toggle} st={square1.st} />
    ));
  } else if (state["value"].length > 0 && another_win === true) {
    // console.log("hi")
    squareElements = state["value"].map((square1) => (
      <Box id={square1.id} toggle={toggle} st={square1.st} />
    ));
  }

  // let hisbutton = [];
  // function rematch(id, hisarray) {
  //   console.log(id, hisarray);
  // }
  // if (history.length > 0) {
  //   hisbutton = history.map((square) => {
  //     return (
  //       <li>
  //         <button onClick={rematch(square.id, square)}>{square.id + 1}</button>
  //       </li>
  //     );
  //   });
  // }
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
        <div>{textwin}</div>
      </form>
      {/* <div>{hisbutton}</div> */}
    </div>
  );
}
