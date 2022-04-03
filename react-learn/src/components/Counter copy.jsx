import React from "react";
import {
  asyncDecrease,
  asyncIncrease,
  increase,
  decrease,
} from "../store/action/counter";
import store from "../store";

function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减少</button>
        <button onClick={props.onDecrease}>减少</button>
        <button onClick={props.onIncrease}>增加</button>
        <button onClick={props.onAsyncIncrease}>异步增加</button>
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
  };
}

export default class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = mapStateToProps(store.getState());
    store.subscribe(() => {
      this.setState(mapStateToProps(store.getState()));
    });
  }

  render() {
    const eventsHandler = mapDispatchToProps(store.dispatch);
    return <Counter {...this.state} {...eventsHandler} />;
  }
}
