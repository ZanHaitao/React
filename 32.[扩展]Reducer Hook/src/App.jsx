// import React, { useReducer } from 'react'
import React, { useState } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'reduce':
            return state - 1
        default:
            return null
    }
}

function useReducer(reducer, initialState, initFunc) {
    const [state, setstate] = useState(initFunc ? initFunc(initialState) : initialState)
    function dispatch(action) {
        const newState = reducer(state, action);
        console.log(`状态：${state}->${newState}`);
        setstate(newState)
    }
    return [state,dispatch]
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={() => {
                dispatch({ type: 'reduce' })
            }}>-</button>
            {state}
            <button onClick={() => {
                dispatch({ type: 'add' })
            }}>+</button>
        </div>
    )
}
