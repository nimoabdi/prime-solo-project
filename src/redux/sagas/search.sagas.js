import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSeriesDetails(action) {
    try {
        console.log('series id');
        // const searchId = action.payload
        const res = yield axios.get(`/api/:search/${action.payload}`)
        yield put({
            type: 'ADD_SERIES',
            payload: res.data
        })
        }
        catch {
            console.log('getting series error')
        }
}
function* searchSagas() {
    yield takeEvery('FETCH_DETAILS', fetchSeriesDetails);
}
export default searchSagas;