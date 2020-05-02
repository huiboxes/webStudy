import React, { Component } from 'react'

class List extends Component { 
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <h1>List kk {this.state.id}</h1>
        )
    }
    componentDidMount() {
        let tempId = this.props.match.params.id
        
        this.setState({ id: tempId })
        console.log(this.state);
        
    }
}

export default List