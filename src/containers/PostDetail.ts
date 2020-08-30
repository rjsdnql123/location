import { connect } from 'react-redux';
import axios from 'axios';
import PostDetail from '../components/PostDetail';
import { setPost } from '../action';
import { MainPostData, ReduxState } from '../reducer/type';
import * as config from '../../env';
const mapStateToProps = (state: ReduxState) => {
	return {
		post: state.reducer.post,
		userId: state.reducer.information.user_Id,
	};
};

const mapDispachToProps = (dispatch: Function) => {
	return {
		writingComment: (userId: number, postId: number, Contents: string) =>
			axios
				.post(`http://${config.SERVER_PORT}/comments/comments`, {
					userId: userId,
					postId: postId,
					Contents: Contents,
				})
				.then((result) => {
					const { User_Id } = result.data;
					axios
						.get(`http://${config.SERVER_PORT}/post/location_Post?userId=${User_Id}`, {})
						.then(({ data }: MainPostData) => {
							dispatch(setPost(data));
						});
				}),
	};
};

export default connect(mapStateToProps, mapDispachToProps)(PostDetail);
