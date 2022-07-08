import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addCurrent(action) {
    console.log('in add current watch', action)
    const res = yield axios({
        method: 'POST',
        url: '/api/currentwatch',
        data: action.payload
    })
}

function* currentSagas() {
    yield takeEvery('CURRENT_WATCH', addCurrent)
}
export default currentSagas;