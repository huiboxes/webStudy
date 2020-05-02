import React from 'react'
import { Route,Link } from 'react-router-dom'
import Reactpage from './video/ReactPage'
import Rn from './video/RN'
import Jquery from './video/Jquery'

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React教程</Link></li>
                    <li><Link to="/video/Rn">RN教程</Link></li>
                    <li><Link to="/video/jquery">Jquery教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <h3>视频教程</h3>
                <Route path="/video/reactpage" component={Reactpage}></Route>
                <Route path="/video/rn" component={Rn}></Route>
                <Route path="/video/jquery" component={Jquery}></Route>
            </div>
        </div>
    )
}

export default Video