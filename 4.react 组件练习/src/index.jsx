import React from 'react'
import ReactDOM from 'react-dom'
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp';

const title = '测试组件属性';

ReactDOM.render((
    <div>
        <MyFuncComp title={title}/>
        <MyClassComp title={title} />
    </div>
), document.getElementById('root'));