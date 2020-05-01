import { CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_LIST,GET_MYLIST } from './actionTypes'
import axios from 'axios'

export const changeIputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItem = {
    type: ADD_ITEM
}

export const delItem = (index) => ({
    type: DEL_ITEM,
    index
})

export const getList = data => ({
    type: GET_LIST,
    data
})

export const getToList = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/d690b6751903bdb776c854b719ee9b6b/data/data')
            .then(res => {
                const data = res.data.data.list
                const action = getList(data)
                dispatch(action)
            })
    }
}

export const getMyListAction = () => ({
    type: GET_MYLIST
})