import React, { useState,createContext,useContext,useEffect } from 'react'


const CountContext = createContext()


function Counter() {
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Example4() {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example4