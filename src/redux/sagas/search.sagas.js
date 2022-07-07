import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSearch(action) {
    try {
        console.log('series id', action.payload);
        // const searchId = action.payload
        const res = yield axios.get(`/api/:search/${action.payload}`)
        yield put({
            type: 'SET_SEARCH',
            payload: res.data
        })
        }
        catch {
            console.log('getting series error')
        }
}
function* searchSagas() {
    yield takeEvery('FETCH_SEARCH', fetchSearch);
}
export default searchSagas;