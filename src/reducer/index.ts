import { combineReducers } from 'redux';

import reducer from './reducer';
// import Myprofile from './Myprofile'

const rootReducer = combineReducers({
  reducer,
  // Myprofile
});



export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
