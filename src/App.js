import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Patterns } from "./components/array";
import { Square } from "./components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("😀");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [win, setWin] = useState(false);

  const click = new Audio("./click.mp3");
  const gameWinnerSound = new Audio("./win.wav");
  const restartSound = new Audio("./restart.wav");

  const clickPlay = () => {
    click.play();
  };
  const gameWinner = () => {
    gameWinnerSound.play();
  };
  const gameRestart = () => {
    restartSound.play();
  };

  useEffect(() => {
    winnerCheck();
    tiePlayer();
    if (player === "😎") {
      setPlayer("😀");
    } else {
      setPlayer("😎");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      setWin(true);
      gameWinner();
      alert(`Game Over !! Winner Player is: ${result.winner}`);
    }
  }, [result]);
  const handelOnClick = (square) => {
    clickPlay();
    setBoard(
      board.map((val, i) => {
        if (i === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const winnerCheck = () => {
    Patterns.forEach((current) => {
      const firstPlayer = board[current[0]];
      if (firstPlayer === "") return;
      let foundWinner = true;
      current.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinner = false;
        }
      });

      if (foundWinner) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    gameRestart();
    setPlayer("😀");
    setWin(false);
  };

  const tiePlayer = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No one", state: "Tie" });
    }
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
      {win ? <button onClick={restartGame}>Restart Game</button> : null}
    </div>
  );
}

export default App;
