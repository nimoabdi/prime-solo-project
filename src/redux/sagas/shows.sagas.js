import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// function* fetchShows() {
//    // gets data from db
//     try {
//         const shows = yield axios.get('/api/shows');
//         yield put({ type: 'SET_SHOWS', payload: shows.data });
//     } catch {
//         console.log('getting shows error');
//     }    
// };

function* addCurrent(action) {
    // console.log('in add current watch', action.payload)
 yield axios({
        method: 'POST',
        url: '/api/shows',
        data: action.payload
    })
}

function* currentSagas() {
    yield takeEvery('CURRENT_WATCH', addCurrent);
    // yield takeEvery('FETCH_SHOWS', fetchShows);
}
export default currentSagas;

