import React, { useRef } from "react";
import { connect } from "dva";

function Counter(props) {
  const inputRef = useRef();
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onDecrease}>-</button>
        <button onClick={props.onIncrease}>+</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
      <p>
        <input type="number" ref={inputRef} />
        <button
          onClick={() => {
            props.onAdd(parseInt(inputRef.current.value));
          }}
        >
          增加
        </button>
      </p>
    </div>
  );
}

let mapStateToProps = (state) => ({
  number: state.counter,
});

let mapDispatchToProps = (dispatch) => ({
  onAsyncDecrease: () => {
    dispatch({ type: "counter/asyncDecrease" });
  },
  onDecrease: () => {
    dispatch({ type: "counter/decrease" });
  },
  onIncrease: () => {
    dispatch({ type: "counter/increase" });
  },
  onAsyncIncrease: () => {
    dispatch({ type: "counter/asyncIncrease" });
  },
  onAdd: (num) => {
    dispatch({ type: "counter/add", payload: num });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
