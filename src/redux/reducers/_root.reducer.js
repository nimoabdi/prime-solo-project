import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
// import seriesDetails from './series.details.reducer';
import searchReducer from './search.reducer';
import showsReducer from './shows.reducer';
import updatedShows from './completed.reducer';
// import summaryReducer from './summary.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  searchReducer,
  showsReducer,
  updatedShows,

});

export default rootReducer;
