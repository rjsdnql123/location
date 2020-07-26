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
    setLogin: string
    type: string;
}
