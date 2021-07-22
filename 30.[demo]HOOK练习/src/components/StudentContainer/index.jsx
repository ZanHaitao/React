import React, { useState, useEffect } from 'react'
import { findByPage } from '../../service/student';
import StudentList from '../StudentList';
import Pager from '../PageComp/index';

export default function StudentContainer() {

    const [students, setStudents] = useState([]); // 学生列表数据
    const [page, setPage] = useState(1); //当前页码
    const [total, setTotal] = useState(0); //数据总数
    const [limit, setLimit] = useState(10); //分页展示数据
    const [panelPage, setPanelPage] = useState(5)

    useEffect(() => {
        (async () => {
            const res = await findByPage(page, limit);
            setStudents(res.data.findByPage);
            setTotal(res.data.cont)
        })()
    }, [page, limit])


    return (
        <div>
            <StudentList list={students} />
            <Pager current={page} total={total} limit={limit} panelPage={panelPage} onChangePage={newPage => {
                setPage(newPage)
            }} />
        </div>
    )
}
