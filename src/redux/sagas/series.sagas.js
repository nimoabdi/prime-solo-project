import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSeries(action) {
    try {
    console.log('series id', action.payload);
    let seriesId = action.payload
    const res = yield axios.get(`/api/series/${seriesId}`)
    yield put({
        type: 'SET_SERIES',
        payload: res.data
    })
    }
    catch {
        console.log('getting series error')
    }
}

function* seriesSaga() {
    yield takeLatest('FETCH_SERIES', fetchSeries);
}
export default seriesSaga;