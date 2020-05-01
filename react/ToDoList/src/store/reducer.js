const defaultState = {
    inputValue: 'Write Somthing',
    list: [
        '早8点开晨会',
        '早9点开需求沟通会',
        '早10点吃饭'
    ]
}

export default (state = defaultState, action) => {
    // Reducer里只能接收state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'delItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'getList') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    return state
}