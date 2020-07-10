export interface User {
    email: string;
    password: string;
    nickname?: string;
    age?: string
    location?: string
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