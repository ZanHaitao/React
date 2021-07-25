import React from 'react'
import { CSSTransition } from "react-transition-group"
import './FadeTransition.css'

export default function FadeTransition(props) {

    function transition(node) {
        node.style.transition = props.timeout + 'ms'
    }

    function clearTransition(node) {
        node.style.transition = ''
    }

    return (
        <CSSTransition {...props}
            onEntering={(...args)=>{
                transition(...args);
                props.onEntering && props.onEntering(...args)
            }}
            onEntered={(...args)=>{
                clearTransition(...args);
                props.onEntered && props.onEntered(...args)
            }}
            onExiting={(...args)=>{
                transition(...args);
                props.onExiting && props.onExiting(...args)
            }}
            onExited={(...args)=>{
                clearTransition(...args);
                props.onExited && props.onExited(...args)
            }}
        />
    )
}
FadeTransition.defaultProps = {
    timeout: 1000
}
