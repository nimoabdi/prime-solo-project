import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchShows() {
  // gets data from db
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/shows",
    });
    console.log("get all shows", response.data);
    yield put({
      type: "SET_SHOWS",
      payload: response.data,
    });
  } catch {
    console.error("error in SHOWS GET SAGAS");
  }
}

function* addCurrent(action) {
  console.log('in add current watch', action.payload)
  yield axios({
    method: "POST",
    url: "/api/shows",
    data: action.payload,
  });
}

function* deleteShow(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/shows/${action.payload}`,
    });
    yield put({
      type: "FETCH_SHOWS",
    });
  } catch {
    console.log("ERROR/DELETE Books");
  }
}

function* updateShow(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/shows/${action.payload}`,
    });
    yield put({
      type: "FETCH_SHOWS",
    });
  } catch {
    console.log("ERROR/PUT SHOWS");
  }
}

function* fetchCompleted() {
    
    try {
      const response = yield axios({
        method: 'GET',
        url: `/api/completed`,
      });
      console.log('GET Completed SHOWS:', response.data);
      yield put({ type: 'SET_UPDATED_SHOWS', payload: response.data });
  
    } catch {
      console.log('GET/COMPLETED shows error');
    }
  
  }

  function* completeShow(action) {
    
    try {
      const response = yield axios({
        method: 'PUT',
        url: `/api/shows/${action.payload}`,
      
      })
      yield put({
        type: 'FETCH_COMPLETED_SHOWS'
      })
    } catch {
      console.log('ERROR/COMPLETE SHows', action.payload);
    }
  }
  
  function* rateShow(action) {
    console.log('rateShow action.payload', action.payload.id)
     const rating = action.payload
    try {
      const response = yield axios({
        method: 'PUT',
        url: `/rate/${rating.id}`,
        data: action.payload
      })
      console.log('response RATE SHOW--------->',response)
      yield put({
        type: 'FETCH_COMPLETED_SHOWS' ,payload: response.data
      })
    } catch {
      console.log('ERROR/PUT RATING shows');
    }
  }


function* showsSagas() {
  yield takeEvery("CURRENT_WATCH", addCurrent);
  yield takeEvery("FETCH_SHOWS", fetchShows);
  yield takeEvery("DELETE_SHOW", deleteShow);
  yield takeEvery("UPDATE_SHOW", updateShow);
  yield takeEvery("FETCH_COMPLETED_SHOWS", fetchCompleted);
  yield takeEvery("COMPLETED_SHOWS", completeShow);
  yield takeEvery("RATE_SHOW", rateShow);
}
export default showsSagas;
