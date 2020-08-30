import { Information, Posts } from '../reducer/type';
export const SET_LOGIN = 'SET_LOGIN' as const;
export const SET_INFORMATION = 'SET_INFORMATION' as const;
export const SET_POST = 'SET_POST' as const;

export const setLogin = (setLogin: string) => {
	return {
		type: SET_LOGIN,
		setLogin: setLogin,
	};
};

export const setInformation = (setInformation: Information) => {
	return {
		type: SET_INFORMATION,
		setInformation,
	};
};

export const setPost = (post: Posts[]) => {
	return {
		type: SET_POST,
		post,
	};
};
