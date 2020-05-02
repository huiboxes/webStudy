import React from 'react'
import {BrowserRouter as Router,Route,Link, BrowserRouter} from 'react-router-dom'
import Index from './Pages/index'
import Video from './Pages/Video'
import Work from './Pages/Work'
import './index.css'

function AppRouter() {
    let routeConfig = [
        { path: '/',title:'博客首页',exact:true,component: Index },
        { path: '/video',title:'视频教程',exact:false,component: Video },
        { path: '/work',title:'职场技能',exact:false,component: Work },
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div class="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {
                            routeConfig.map((item,index) => {
                                return (
                                    <li key={index}><Link
                                        to={item.path}
                                    >{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    component={item.component}
                                    exact={item.exact}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    )
}



export default AppRouter