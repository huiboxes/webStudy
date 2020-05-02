import React from 'react'
import { Route, Link } from 'react-router-dom'
import getup from './workplace/getup'


function Work() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/work/getup">早起教程</Link></li> 
                </ul>
            </div>
            <div className="videoContent">
                <Route path="/work/getup" component={getup}></Route>
                
            </div>
        </div>
    )
}

export default Work