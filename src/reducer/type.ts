export interface User {
    email: string;
    password: string;
    nickname?: string;
    age?: string;
    location?: string;
    lat?: number;
    lng?: number;
}

export interface UserProps {
    navigation: {
        navigate: Function
    }
    route?: {
        key: string;
        name: string;
        params?: string;
    }
    setLogin: string|null;
    isLogin: Function;
}

export interface AppProps {
    exp?: {
        errorRecovery: null
    }
}

export interface AppState {
    token: string|null;
}

export interface SetLogin {
    setLogin: {setLogin:string}
    type: string;
}

export interface Auth {
    setLogin: string|null;
    isLogin: Function;
}

export interface AuthLoding {
    reducer: {
        setLogin: string;
    }
}