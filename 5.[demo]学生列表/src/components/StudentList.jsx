import React from 'react'
import Student from './Student';

export default function StudentList(props) {
    return (
        <ul>
            {props.stus.map(item => <Student key={item.id} {...item} />)}
        </ul>
    )
}