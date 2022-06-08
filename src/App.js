import "./App.css";
import { Square } from "./components/Square";

function App() {
  const handelOnClick = ({val}) => {
    alert(val);
  };
  return (
    <div className="App">
      {/* <h1 className="title">Let's Play Game</h1> */}
      <div className="board">
        <h1 className="title">Let's Play Game</h1>
        <div className="row">
          <Square chooseSquare={handelOnClick} val={0} />
          <Square chooseSquare={handelOnClick} val={1} />
          <Square chooseSquare={handelOnClick} val={2} />
        </div>
        <div className="row">
          <Square chooseSquare={handelOnClick} val={3} />
          <Square chooseSquare={handelOnClick} val={4} />
          <Square chooseSquare={handelOnClick} val={5} />
        </div>
        <div className="row">
          <Square chooseSquare={handelOnClick} val={6} />
          <Square chooseSquare={handelOnClick} val={7} />
          <Square chooseSquare={handelOnClick} val={8} />
        </div>
      </div>
    </div>
  );
}

export default App;
