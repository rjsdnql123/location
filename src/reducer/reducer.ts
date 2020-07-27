import { SET_LOGIN } from '../action'
import { SetLogin } from './type';


const initialState = {
    setLogin: 'false',
  };

const Reducer = (state = initialState, action:SetLogin) => {
    console.log(action,'이거뭔지알려주세요')
    switch (action.type) {
        case SET_LOGIN:
            return Object.assign({}, state, {
                setLogin: action.setLogin.setLogin
            });
        default:
            return state;
    }
}

export default Reducer;