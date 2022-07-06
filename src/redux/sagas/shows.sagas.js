import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShows() {
   // gets data from db
    try {
        const shows = yield axios.get('/api/shows');
        yield put({ type: 'SET_SHOWS', payload: shows.data });
    } catch {
        console.log('getting shows error');
    }    
};

function* createShows() {
    console.log('posting shows', action.payload)
        yield axios({
            method: 'POST',
            url: '/api/shows',
            data: action.payload
        })
}

function* showsSaga() {
    yield takeLatest('FETCH_SHOWS', fetchShows)
    
}
export default showsSaga;