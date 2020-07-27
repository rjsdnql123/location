//회원가입과 로그인 state로 사용
export interface User {
    email: string;
    password: string;
    nickname?: string;
    age?: string;
    location?: string;
    lat?: number;
    lng?: number;
}
//Post type
export interface Posts {
    post_Id: number;
    title: string;
    contents: string;
    createAt: string;
    updateAt: string;
    user: User
    comments: []
}
//메인페이지 props로 활용
export interface MainProps {
    post: Posts[]
    navigation: {
        navigate: Function
    }
    route?: {
        key: string;
        name: string;
        params?: string;
    }
    postSet: Function
}
//main페이지에 POST Data
export interface MainPostData {
    data: Posts[]
}
//로그인과 회원가입 props
export interface LoginProps {
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

//reducer Action
export interface ReducerAction {
    setLogin: string
    type: string;
    setInformation: Information
    post: Posts[];
}
//Auth페이지에 props
export interface Auth {
    setLogin: string|null;
    isLogin: Function;
    information: Function
}

//information 의 상태
export interface Information {
    information:{
        user_Id: string
    }
}
//redux state의 상태들
export interface ReduxState {
    reducer: {
        information: Information
        post: Posts[]
        setLogin: string
    }
}