import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter.js";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  // اذا تم تحديث قيمة state.counter سيتم تحديث المكون هذا بشكل كامل
  const counter = useSelector((state) => state.counter.counter);
  // اذا تم تحديث قيمة state.show سيتم تحديث المكون هذا بشكل كامل
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // سابقاً مع redux العادية
    // dispatch({ type: "increment" });

    dispatch(counterActions.increment());
  };

  const increaseHandler = (value) => {
    // سابقاً مع redux العادية
    // dispatch({ type: "increase", amount: 10 });

    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER. payload: 10}
  };

  const decrementHandler = () => {
    // سابقاً مع redux العادية
    // dispatch({ type: "decrement" });

    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // سابقاً مع redux العادية
    // dispatch({ type: "toggle" });

    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
