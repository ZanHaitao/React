import React, { useState } from 'react'
import { Transition } from "react-transition-group"

export default function Transitionn() {
    const [visible, setVisible] = useState(false)
    
    const defaultStyle = {
        transition:'2000ms',
    }

    const stateStyle = {
        exited:{
            opacity:0
        },
        exiting:{
            opacity:0
        },
        entered:{
            opacity:1
        },
        entering:{
            opacity:1
        }
    }

    return (
        <div>
            <Transition in={visible} timeout={2000}>
                {state => {
                    console.log(state)
                    return (
                        <h1 style={{
                            ...defaultStyle,
                            ...stateStyle[state]
                        }}>Test Transition</h1>
                    )
                }}
            </Transition>
            <button onClick={() => setVisible(!visible)}>Change</button>
        </div>
    )
}
