import {SetLogin} from '../reducer/type'
export const SET_LOGIN = 'SET_LOGIN' as const;

export const setLogin = (setLogin:SetLogin) => {
    console.log(setLogin,'이거제발뭐야')
    return ({
    type: SET_LOGIN,
    setLogin:setLogin
})}