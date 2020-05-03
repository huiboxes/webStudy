import React, { useState,useMemo } from 'react'

function Example7() {
    const [xiaohong,setXiaohong] = useState('小红在吃饭')
    const [zhiling, setZhiling] = useState('志玲在吃饭')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime())}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({ name, children }) {
    function changeXiaohong() {
        console.log('吃完了');
        return name  
    }

    const actionXiaohong = useMemo(() => changeXiaohong(name),[name])

    return (
        <>
            
            <div>{children}</div>
        </>
    )
}

export default Example7