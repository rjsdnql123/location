import {Information, Posts} from '../reducer/type'
export const SET_LOGIN = 'SET_LOGIN' as const;
export const SET_INFORMATION = 'SET_INFORMATION' as const;
export const SET_POST = 'SET_POST' as const

export const setLogin = (setLogin:string) => {
    console.log(setLogin,'이거제발뭐야')
    return ({
    type: SET_LOGIN,
    setLogin:setLogin
})}

export const setInformation = (setInformation:Information) => {
    console.log(setInformation,'setInformation')
    return ({
        type: SET_INFORMATION,
        setInformation
    })
}

export const setPost = (post:Posts[]) => {
    console.log(post,'setPost')
    return ({
        type: SET_POST,
        post
    })
}