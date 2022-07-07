// import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// function* fetchSeriesDetails(action) {
//     try {
//     console.log('series id');
//     const seriesId = action.payload
//     const res = yield axios.get(`/api/details/${seriesId}`);
//     yield put({
//         type: 'SET_SERIES_DETAILS',
//         payload: res.data
//     })
//     }
//     catch {
//         console.log('getting series error')
//     }
// }

// function* seriesSaga() {
//     yield takeLatest('FETCH_DETAILS_SERIES', fetchSeriesDetails);
// }
// export default seriesSaga;