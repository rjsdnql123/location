import { connect } from 'react-redux';
import axios from 'axios';
import Post from '../components/Post';
import { MainPostData, ReduxState } from '../reducer/type';
import { setPost } from '../action';
import * as config from '../../env';

const mapStateToProps = (state: ReduxState) => {
	console.log(state);
	return {
		userId: state.reducer.information.user_Id,
	};
};

const mapDispatchToProps = (dispatch: Function) => {
	return {
		writing: (userId:number, title:string, contents:string) =>
			axios
				.post(`http://${config.SERVER_PORT}/post/post`, {
					userId: userId,
					title: title,
					Contents: contents,
				})
				.then((result) => {
					console.log(result, 'Post result');
					const { User_Id } = result.data;
					console.log(User_Id, 'zzzz');
					axios
						.get(`http://${config.SERVER_PORT}/post/location_Post?userId=${User_Id}`, {})
						.then(({ data }: MainPostData) => {
							dispatch(setPost(data));
						});
				}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
