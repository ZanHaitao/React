import React from 'react'
import './index.css'

export default function index(props) {
    const defaultProps = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800
    }
    const datas = Object.assign({}, defaultProps, props);
    return (
        <div className='three-layout' style={{
            minWidth:datas.minWidth
        }}>
            <div className="main-content">{datas.children}</div>
            <div className="left-content" style={{
                width: datas.leftWidth
            }}>{datas.left}</div>
            <div className="right-content" style={{
                width: datas.rightWidth
            }}>{datas.right}</div>
        </div>
    )
}
