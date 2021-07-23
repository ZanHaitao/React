import React, { PureComponent, useState, useCallback } from 'react'

class Test extends PureComponent {
    render() {
        console.log('test render');
        return (
            <div>
                {this.props.n}
                <button onClick={()=>{
                    this.props.onChange()
                }}>change</button>
            </div>
        )
    }
}


export default function App() {
    const [n, setN] = useState(0)
    const handle = useCallback(() => {
        console.log('change');
    },[])
    return (
        <div>
            <Test n={100} onChange={handle} />
            {n}
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </div>
    )
}
