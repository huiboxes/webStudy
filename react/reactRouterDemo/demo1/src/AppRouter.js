import React from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Index from './Pages/index'
import List from './Pages/list'
import Home from './Pages/Home'


function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">index</Link></li>
                <li><Link to="/list/12sdafd">List</Link></li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/:id" component={List}></Route>
            <Route path="/home" component={Home}></Route>
        </Router>
    )
}

export default AppRouter