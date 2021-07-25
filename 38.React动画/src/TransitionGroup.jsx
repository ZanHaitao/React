import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import './SwitchTransition.css'
import uuid from "uuid"

export default function TransitionGroupp() {

    const [list, setList] = useState([
        { task: '吃早饭xxxxxxxxx', id: uuid() },
        { task: '吃午饭xxxxxxxxx', id: uuid() },
        { task: '吃晚饭xxxxxxxxx', id: uuid() },
        { task: '吃下午茶xxxxxxxxx', id: uuid() }
    ])

    return (
        <>
            <TransitionGroup component='ul'>
                {list.map(it => (
                    <CSSTransition timeout={1000} key={it.id}>
                        <li key={it.id}>任务:{it.task} <button onClick={() => {
                            setList([...list.filter(itt => itt.id !== it.id)])
                        }}>删除</button></li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <button onClick={()=>{
                const task = window.prompt('输入新任务')
                setList([...list,{task,id:uuid()}])
            }}>添加</button>
        </>
    )
}
