import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const msg = '提示';
// const obj = <span>test</span>
// const arr = [0, 1, 2, 3];
// const lis = new Array(30);
// lis.fill(0);
// const list = lis.map((item, index) => (<li>{index}</li>));
// const content = '<p>test innterHtml</p>'
// const cls = 'test';

const div = (
    <div>
        {/* {msg} */}
        {/* {obj} */}
        {/* {arr} */}
        {/* <ul>
            {list}
        </ul> */}
        {/* <div dangerouslySetInnerHTML={{
            __html:content
        }}></div> */}
        {/* <div className={cls} style={{
            backgroundColor:'red'
        }}></div> */}
    </div>
);

ReactDOM.render(div, document.getElementById('root'));