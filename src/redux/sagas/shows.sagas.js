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

function* UpdateShow(action) {
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

function* showsSagas() {
  yield takeEvery("CURRENT_WATCH", addCurrent);
  yield takeEvery("FETCH_SHOWS", fetchShows);
  yield takeEvery("DELETE_SHOW", deleteShow);
  yield takeEvery("FETCH_UPDATE", UpdateShow);
}
export default showsSagas;
