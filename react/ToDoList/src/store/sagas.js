import {takeEvery,put} from 'redux-saga/effects'
import  {GET_MYLIST} from './actionTypes'
import axios from 'axios'
import {getMyListAction} from './actionCreators'

function* mySaga() {
    yield takeEvery(GET_MYLIST,getList)
}

function* getList() {
    // axios.get('https://www.fastmock.site/mock/d690b6751903bdb776c854b719ee9b6b/data/data')
    //         .then(res => {
    //             const data = res.data.data.list
    //             const action = getMyListAction(data)
    //             put(action)
    //         })
    const res = yield axios.get('https://www.fastmock.site/mock/d690b6751903bdb776c854b719ee9b6b/data/data')
    const action = getMyListAction(res.data.data.list)
    yield put(action)
}

export default mySaga