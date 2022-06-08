import { useState } from "react";
import "./App.css";
import { Square } from "./components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("😀");
  const handelOnClick = (square) => {
    setBoard(
      board.map((val, i) => {
        if (i == square && val == "") {
          return player;
        }

        return val;
      })
    );
  };
  return (
    <div className="App">
      {/* <h1 className="title">Let's Play Game</h1> */}
      <div className="board">
        <h1 className="title">Let's Play Game</h1>
        <div className="row">
          <Square chooseSquare={() => handelOnClick(0)} val={board[0]} />
          <Square chooseSquare={() => handelOnClick(1)} val={board[1]} />
          <Square chooseSquare={() => handelOnClick(2)} val={board[2]} />
        </div>
        <div className="row">
          <Square chooseSquare={() => handelOnClick(3)} val={board[3]} />
          <Square chooseSquare={() => handelOnClick(4)} val={board[4]} />
          <Square chooseSquare={() => handelOnClick(5)} val={board[5]} />
        </div>
        <div className="row">
          <Square chooseSquare={() => handelOnClick(6)} val={board[6]} />
          <Square chooseSquare={() => handelOnClick(7)} val={board[7]} />
          <Square chooseSquare={() => handelOnClick(8)} val={board[8]} />
        </div>
      </div>
    </div>
  );
}

export default App;
