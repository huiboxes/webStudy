import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'

class Index extends Component{
    constructor(porps) {
        super(porps)
        this.state = {
            list: [
                {cid:123,title: '个人博客'},
                {cid:223,title: '个人网站'},
                {cid:323,title: '个人天台'}
            ]
        }
        this.props.history.push("/home/")
    }
    render() {
        return (
            <div>
                
                <h2>safdsfgddfgdfsgbdf</h2>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li key={item + index}>
                                    <Link to={'/list'+item.cid}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Index