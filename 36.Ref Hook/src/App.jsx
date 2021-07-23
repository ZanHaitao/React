import React, { useRef } from 'react'

function Test(props, ref) {
    return (
        <div ref={ref}>test</div>
    )
}

const TestRef = React.forwardRef(Test);

export default function App() {
    const ref = useRef();
    console.log(ref);
    return (
        <div>
            <TestRef ref={ref}/>
        </div>
    )
}
