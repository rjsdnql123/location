import { combineReducers } from 'redux';

import reducer from './reducer';

//리듀서와 연결
const rootReducer = combineReducers({
	reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
