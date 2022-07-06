import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSeriesDetails(action) {
    try {
        console.log('series id');
        const searchId = action.payload
        const res = yield axios.get(`/search/${searchId}`)
        yield put({
            type: 'CREATE_SERIES',
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