import { SET_LOGIN } from '../action'


const initialState = {
    setLogin: null,
  };

const Reducer = (state = initialState, action) => {
    console.log(action,'이거뭔지알려주세요')
    switch (action.type) {
        case SET_LOGIN:
            return Object.assign({}, state, {
                setLogin: action.setLogin
            });
        default:
            return state;
    }
}

export default Reducer;