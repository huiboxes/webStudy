import React,{useRef, useState,useEffect} from 'react'

function Example8() {
    const inputEl=useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = "write somthing"
    }

    const [text, setText] = useState('nnnn')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
    })
    
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/><br/>
            <input value={text} onChange={(e) => { setText(e.target.value)}}/>
        </>
    )
}

export default Example8