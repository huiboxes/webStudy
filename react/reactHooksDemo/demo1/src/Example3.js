import React, { Component } from 'react'

class Example3 extends Component{
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }
    componentDidMount() {
        console.log(`componentDidMount => ${this.state.count}`);
        
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate => ${ this.state.count }`);
        
    }
    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.addCount.bind(this)}>+1</button>
            </div>
        )
    }
    addCount() {
        this.setState({count: this.state.count+1})
    }

}

export default Example3