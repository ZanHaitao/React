import React, { useRef,useImperativeHandle } from 'react'

function Test(props, ref) {

    const inputRef = useRef()

    useImperativeHandle(ref,()=>{
        return {
            getInputValue:()=>{
                return inputRef.current.value;
            }
        }
    })

    return (
        <input type="text" ref={inputRef}/>
    )
}

const TestRef = React.forwardRef(Test);

export default function App() {
    const ref = useRef();
    console.log(ref);
    return (
        <div>
            <TestRef ref={ref}/>
            <button onClick={()=>{
                const value = ref.current.getInputValue();
                console.log(value);
            }}>获取</button>
        </div>
    )
}
