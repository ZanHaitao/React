import React from 'react'
import PropTypes from 'prop-types';

export default function StudentList({ list }) {
    const lis = list.map(it => (
        <li key={it.id}>姓名：{it.name}，性别：{it.sex ? '男' : '女'}</li>
    ))
    return (
        <ul>
            {lis}
        </ul>
    )
}

StudentList.defaultProps = {
    list: []
}

StudentList.propTypes = {
    list: PropTypes.array.isRequired
}


