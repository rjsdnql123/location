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
	updatedAt: string;
	user: User;
	comments: Comments[];
}
export interface Comments {
	User_Id: number;
	Contents: string;
	createdAt: string;
	updatedAt: string;
	user: User;
}

export interface Navigation {
	setOptions: Function;
	navigate: Function;
}

export interface Route {
	key?: string;
	name?: string;
	params: { userId: null & number; postIndex: number; postId: number };
}

//메인페이지 props로 활용
export interface MainProps {
	post: Posts[];
	navigation: Navigation;
	route: Route;
	postSet: Function;
	isLogin: Function;
}
//main페이지에 POST Data
export interface MainPostData {
	data: Posts[];
}
//로그인과 회원가입 props
export interface LoginProps {
	navigation: Navigation;
	route?: Route;
	setLogin: string | null;
	isLogin: Function;
	information: Function;
}

//reducer Action
export interface ReducerAction {
	setLogin: string;
	type: string;
	setInformation: Information;
	post: Posts[];
}
//Auth페이지에 props
export interface Auth {
	setLogin: string | null;
	isLogin: Function;
	information: Function;
	getUserTokens: Function;
	userId: null | number;
}

//information 의 상태
export interface Information {
	information: {
		user_Id: number;
	};
}
//redux state의 상태들
export interface ReduxState {
	reducer: {
		information: { user_Id: number };
		post: Posts[];
		setLogin: string;
	};
}

//글쓰기 요청
export interface PostPropst {
	navigation: Navigation;
	route?: Route;
	userId: number;
	writing: Function;
}

//post state
export interface PostState {
	title: string;
	contents: string;
}

//postdetail props
export interface PostDetailProps {
	navigation: Navigation;
	route: Route;
	post: Posts[];
	userId: number;
	writingComment: Function;
}
// detail state
export interface PostDetailState {
	comments: string;
}

//detail Postcontent
export interface PostContent {
	route: Route;
	post: Posts[];
}
