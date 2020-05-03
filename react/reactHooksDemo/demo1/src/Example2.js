import React, { userState, useState } from 'react'


function Example2() {

    
    const [gender, setGender] = useState('男')
    const [age,setAge] = useState(18)
    const [work,setWork] = useState('前端')
    return (
        <div>
            <p>今年：{age}岁</p>
            <p>性别：{gender}</p>
            <p>工作：{work}</p>
            
        </div>
    )
}

export default Example2