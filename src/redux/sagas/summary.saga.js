import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetails(action) {
    const res = yield axios.get(`/api/shows${action.payload}`);
    console.log('in fetch summary', res.data);

    yield put({
        type: 'FETCH_SUMMARY',
        payload: res.data[0]
    })
}

function* getSummary() {
    yield takeEvery('GET_DETAIL', fetchDetails);
}
export default getSummary;