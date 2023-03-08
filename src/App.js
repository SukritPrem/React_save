// import React from "react";
// import boxes from "./boxes";
// import Box from "./Box";

// export default function App() {
//   const [squares, setSquares] = React.useState(boxes);
//   function toggle(id) {
//     setSquares((prevSquares) => {
//       const newSquares = [];
//       for (let i = 0; i < prevSquares.length; i++) {
//         const currentSquare = prevSquares[i];
//         if (currentSquare.id == id) {
//           const updatedSquare = {
//             ...currentSquare,
//             on: !currentSquare.on,
//           };
//           newSquares.push(updatedSquare);
//         } else {
//           newSquares.push(currentSquare);
//         }
//       }
//       console.log(newSquares);
//       return newSquares;
//     });
//   }

//   const squareElements = squares.map((square) => (
//     <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
//   ));
//   return (
//     <>
//       <div class="grid">{squareElements}</div>
//     </>
//   );
// }

// import { useState } from "react";
// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }
// export default function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     if (squares[i]) {
//       // You’ll check to see if the square already has a X or an O. If the square is already filled, you will return
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }
//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }
//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // function handleClick(i) {
  //   if (squares[i]) {
  //     return;
  //   }
  //   if (squares[i]) {
  //     // You’ll check to see if the square already has a X or an O. If the square is already filled, you will return
  //     return;
  //   }
  //   const nextSquares = squares.slice();
  //   if (xIsNext) {
  //     nextSquares[i] = "X";
  //   } else {
  //     nextSquares[i] = "O";
  //   }
  //   setSquares(nextSquares);
  //   setXIsNext(!xIsNext);
  // }
  // console.log(squares);
  // const row = [];
  // for (let i = 0; i < squares.length; i++) {
  //   row.push(
  //     <Box handleClick={handleClick} onSquareClick={() => handleClick(i)} />
  //   );
  // }

  const [squares, setSquares] = React.useState(boxes);
  function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        console.log(currentSquare);
        if (currentSquare.id == id) {
          if (currentSquare.st != "") {
            newSquares.push(currentSquare);
          } else {
            const updatedSquare = {
              ...currentSquare,
              st: "X",
            };
            newSquares.push(updatedSquare);
          }
        } else {
          newSquares.push(currentSquare);
        }
        // if (currentSquare.id == id) {
        //   const updatedSquare = {
        //     ...currentSquare,
        //     on: !currentSquare.on,
        //   };
        //   newSquares.push(updatedSquare);
        // } else {
        //   newSquares.push(currentSquare);
        // }
      }
      console.log(newSquares);
      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      st={square.st}
      toggle={toggle}
    />
  ));

  return (
    <>
      <div class="grid">{squareElements}</div>
    </>
  );
}

function updateCell(x) {
  x = "x";
  return x;
}
