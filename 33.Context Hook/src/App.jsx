import React, { useContext } from 'react'
const ctx = React.createContext();


function Test() {
    const value = useContext(ctx);
    return (
        <div>
            {value}
        </div>
    )
}


export default function App() {
    return (
        <div>
            <ctx.Provider value="test1232131">
                <Test />
            </ctx.Provider>
        </div>
    )
}
