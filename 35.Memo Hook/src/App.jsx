import React,{useMemo} from 'react'

function Item(props) {
    return ( <li>{props.value}</li> )
}

export default function App() {

    const lis = useMemo(()=>{
        const lis = [];
        for (let i = 0; i < 10000; i++) {
            lis.push( <Item key={i} value={i}/> )
        }
        return lis
    },[])

    return (
        <div>
            {lis}
        </div>
    )
}
