import React from 'react'
import './index.css'
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';

index.defaultProps = {
    bg: 'rgba(0,0,0,0.5)',
    show: false
}

index.propTypes = {
    bg: PropTypes.string,
    onclose: PropTypes.func,
    show: PropTypes.bool,
    children: types.children
}

export default function index(props) {
    return (
        <>
            {
                props.show ?
                    <div className="modal"
                        style={{
                            backgroundColor: props.bg
                        }}
                        onClick={(e) => { closeModal(e, props) }}>

                        <div className="modal-content">
                            {props.children}
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

