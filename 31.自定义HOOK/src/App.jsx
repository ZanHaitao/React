import React,{useState} from 'react'
import useTimer from './myHook/useTimer';

function Test(props) {
    useTimer(()=>{
        console.log('运行了test');
    })
    return (
        <h1>Test</h1>
    )
}

export default function App() {
    const [flag, setFlag] = useState(true)
    return (
        <div>
            {
                flag && <Test />
            }
            <button onClick={()=>{
                setFlag(!flag)
            }}>显示/隐藏</button>
        </div>
    )
}
