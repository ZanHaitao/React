import React from 'react'
import './index.css'

export default function index(props) {
    const defaultProps = {
        bg: 'rgba(0,0,0,0.5)'
    }
    const datas = Object.assign({}, defaultProps, props);
    return (
        <>
            {
                datas.show ?
                    <div className="modal"
                        style={{
                            backgroundColor: datas.bg
                        }}
                        onClick={(e) => { closeModal(e, datas) }}>

                        <div className="modal-content">
                            {datas.children}
                        </div>

                    </div> : null
            }
        </>
    )
}
function closeModal(e, props) {
    if (e.target.className === 'modal') {
        props.onClose && props.onClose();
    }
}

