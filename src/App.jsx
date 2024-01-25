import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
