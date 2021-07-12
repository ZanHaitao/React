import React from 'react'
import './index.css'
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';

index.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800
}

index.propTypes = {
    children: types.children,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    minWidth: PropTypes.number,
    left:types.children,
    right:types.children
}

export default function index(props) {
    return (
        <div className='three-layout' style={{
            minWidth: props.minWidth
        }}>
            <div className="main-content">{props.children}</div>
            <div className="left-content" style={{
                width: props.leftWidth
            }}>{props.left}</div>
            <div className="right-content" style={{
                width: props.rightWidth
            }}>{props.right}</div>
        </div>
    )
}
