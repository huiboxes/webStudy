import React,{ useState,useEffect } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log("useEffect=>Index页面");
        return () => {
            console.log('Index走了');
            
        }
    },[])
    return (<h2>首页</h2>)
}

function List() {
    useEffect(() => {
        console.log("useEffect=>List页面");
        return () => {
            console.log('List走了');

        }
    },[])
    return (<h2>List</h2>)
}

function Example() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>${count}`);
        return () => {
            console.log('===========================');
        }
    },[count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list"  component={List}/>
            </Router>
        </div>
    )
}

export default Example