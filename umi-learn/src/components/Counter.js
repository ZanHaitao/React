import React from 'react'
import { connect } from 'dva'

function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  number: state.counter
})

const mapDispatchToProps = dispatch => ({
  onAsyncDecrease: () => {
    dispatch({ type: 'counter/asyncDecrease' })
  },
  onDecrease: () => {
    dispatch({ type: 'counter/decrease' })
  },
  onIncrease: () => {
    dispatch({ type: 'counter/increase' })
  },
  onAsyncIncrease: () => {
    dispatch({ type: 'counter/asyncIncrease' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)