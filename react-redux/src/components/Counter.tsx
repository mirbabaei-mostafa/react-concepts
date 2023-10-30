import { useDispatch, useSelector } from "react-redux";
// import { useAppSelector, useAppDispatch } from "../state/hooks";
import {
  decreament,
  decreamentByAmount,
  increament,
  increamentAsync,
  increamentByAmount,
} from "../state/slices/counterSlice";
import { AppDispatch, RootState } from "../state/store";

const Counter = () => {
  // const count = useAppSelector((state) => state.counter.value);
  const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increamentAsync(50))}>
        Increament +50
      </button>{" "}
      <button onClick={() => dispatch(increamentByAmount(5))}>
        Increament +5
      </button>{" "}
      <button onClick={() => dispatch(increamentByAmount(3))}>
        Increament +3
      </button>{" "}
      <button onClick={() => dispatch(increament())}>Increament</button>{" "}
      <button onClick={() => dispatch(decreament())}>Decreament</button>{" "}
      <button onClick={() => dispatch(decreamentByAmount(3))}>
        Decreament -3
      </button>{" "}
      <button onClick={() => dispatch(decreamentByAmount(5))}>
        Decreament -5
      </button>{" "}
    </div>
  );
};

export default Counter;
