import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group"
import './CssTransition.css'

export default function CssTransition() {
    const [visible, setVisible] = useState(true)
    return (
        <div>
            <div className='container'>
                <CSSTransition in={visible} timeout={1000} appear>
                    <h1 className="title">Test CSSTransition One</h1>
                </CSSTransition>
                <CSSTransition in={!visible} timeout={1000} appear>
                    <h1 className="title">Test CSSTransition Two</h1>
                </CSSTransition>
                <button onClick={() => setVisible(!visible)}>Change</button>
            </div>

        </div>
    )
}
