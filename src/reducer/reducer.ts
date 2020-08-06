import { SET_LOGIN, SET_INFORMATION, SET_POST } from '../action';
import { ReducerAction } from './type';

const initialState = {
	setLogin: 'null',
	information: {},
	post: {},
};

const Reducer = (state = initialState, action: ReducerAction) => {
	console.log(action, '이거뭔지알려주세요');
	switch (action.type) {
		case SET_LOGIN:
			return Object.assign({}, state, {
				setLogin: action.setLogin,
			});
		case SET_INFORMATION:
			return Object.assign({}, state, {
				information: action.setInformation,
			});
		case SET_POST:
			return Object.assign({}, state, {
				post: action.post,
			});
		default:
			return state;
	}
};

export default Reducer;
