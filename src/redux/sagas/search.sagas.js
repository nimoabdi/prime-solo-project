import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSeriesDetails(action) {
    try {
        console.log('series id');
        const searchId = action.payload
        const res = yield axios.get(`/api/search/${searchId}`)
        yield put({
            type: 'SET_DETAILS',
            payload: res.data
        })
        }
        catch {
            console.log('getting series error')
        }
}
function* searchSagas() {
    yield takeLatest('FETCH_DETAILS', fetchSeriesDetails);
}
export default searchSagas;