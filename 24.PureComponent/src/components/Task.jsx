import React from 'react'
import PropTypes from 'prop-types';
import './Task.css';

function Task(props) {
    console.log('task render')
    return (
        <li className={props.finish ? 'task finish' : 'task'}>{props.task}</li>
    )
}
Task.propTypes = {
    task:PropTypes.string.isRequired,
    finish:PropTypes.bool.isRequired
}

export default React.memo(Task);
