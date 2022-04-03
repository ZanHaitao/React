import React, { useState } from "react";
import {
  asyncDecrease,
  asyncIncrease,
  increase,
  decrease,
  add,
} from "../store/action/counter";
import { connect } from "react-redux";

function Counter(props) {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减少</button>
        <button onClick={props.onDecrease}>减少</button>
        <button onClick={props.onIncrease}>增加</button>
        <button onClick={props.onAsyncIncrease}>异步增加</button>
      </p>
      <p>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(+e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.onAdd(value);
          }}
        >
          增加
        </button>
      </p>
    </div>
  );
}

/**
 * 映射数据仓库中的state
 * @param {*} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    number: state.counter,
  };
}

/**
 * 映射dispatch到事件中
 * @param {*} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  return {
    onAsyncDecrease() {
      dispatch(asyncDecrease());
    },
    onDecrease() {
      dispatch(decrease());
    },
    onIncrease() {
      dispatch(increase());
    },
    onAsyncIncrease() {
      dispatch(asyncIncrease());
    },
    onAdd(value) {
      dispatch(add(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
