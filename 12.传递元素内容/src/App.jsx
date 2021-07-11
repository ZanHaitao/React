import React from 'react'

export default function App(props) {
    console.log(props)
    return (
        <div>
            {props.children || <h1>test</h1>}
        </div>
    )
}
