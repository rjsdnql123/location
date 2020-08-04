import { Posts, ReduxState, MainPostData } from '../reducer/type';
import { setPost, setLogin } from '../action';
import { connect } from 'react-redux';
import Main from '../components/Main';
import axios from 'axios';
import * as config from '../../env';

const mapStateToProps = (state: ReduxState) => {
	console.log(state, 'state');
	return {
		post: state.reducer.post,
	};
};
const mapDispatchToProps = (dispatch: Function) => {
	return {
		isLogin: (userLogin: string) => dispatch(setLogin(userLogin)),
		postSet: (userId: number) =>
			axios
				.get(`http://${config.SERVER_PORT}/post/location_Post?userId=${userId}`, {})
				.then(({ data }: MainPostData) => {
					console.log(data, '이거는 이제 언제 넘어가서 바뀔까');
					dispatch(setPost(data));
				}),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
