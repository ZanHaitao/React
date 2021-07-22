import React, { useState, useEffect } from 'react'
let timer = null;
function Div(props) {
    const divRef = React.createRef()
    useEffect(() => {
        let time = 0
        const disX = props.left / 100;
        const disY = props.top / 100;
        const div = divRef.current;

        timer = setInterval(() => {
            time++;
            div.style.left = time * disX + 'px';
            div.style.top = time * disY + 'px';
            if (time === 100) {
                clearInterval(timer)
            }
        }, 10)
        return () => {
            clearInterval(timer)
        }
    }, [props.left, props.top])

    return (
        <div style={{
            width: 100,
            height: 100,
            background: 'red',
            position: 'fixed',
            left: 0,
            top: 0
        }} ref={divRef}>
        </div>
    )
}

export default function App() {

    const [position, setPosition] = useState({ x: 200, y: 200 });
    const txtX = React.createRef();
    const txtY = React.createRef();
    return (
        <div>
            <Div left={position.x} top={position.y} />
            <div>
                x: <input type="text" ref={txtX}/>
                y: <input type="text" ref={txtY}/>
                <button onClick={()=>{
                    setPosition({
                        x:txtX.current.value,
                        y:txtY.current.value
                    })
                }}>确定</button>
            </div>
        </div>
    )
}
