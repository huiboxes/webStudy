import React, { Component } from 'react'
import store from './store'
import { changeIputAction,addItem,delItem, getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addItem = this.addItem.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange() {
        this.setState(store.getState())
    }
    changeInputValue(e) {
        const action = changeIputAction(e.target.value)
        store.dispatch(action)
    }
    addItem() {
        const action = addItem
        store.dispatch(action)
    }
    delItem(index){
        const action = delItem(index)
        store.dispatch(action)
    }
    render(){
        return (
            <TodoListUI
                list={this.state.list}
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                delItem={this.delItem}
            />
        )
    }
    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)
        console.log(action);
        
    }
}

export default TodoList