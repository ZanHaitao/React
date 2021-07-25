import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import './SwitchTransition.css'

export default function SwitchTransitionn() {
    const [visible, setVisible] = useState(true)
    return (
        <div>
            <div className='container'>
                <SwitchTransition>
                    <CSSTransition timeout={1000} key={visible}>
                        <h1 className="title">{visible?'Test One':'Test Two'}</h1>
                    </CSSTransition>
                </SwitchTransition>

                <button onClick={() => setVisible(!visible)}>Change</button>
            </div>
        </div>
    )
}
