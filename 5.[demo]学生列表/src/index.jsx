import React from 'react'
import ReactDOM from 'react-dom'
import StudentList from './components/StudentList';

const appkey = '15556677737_1585147447159';

async function getStudentData() {
    return await fetch('http://open.duyiedu.com/api/student/findAll?appkey=' + appkey)
        .then(res => res.json()).then(resp => resp.data);
}

async function render() {
    ReactDOM.render('加载中...', document.getElementById('root'))
    const stus = await getStudentData();
    ReactDOM.render(<StudentList stus={stus} />, document.getElementById('root'));
}
render();