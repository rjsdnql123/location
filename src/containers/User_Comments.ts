import { connect } from 'react-redux';
import axios from 'axios';
import User_Comments from '../components/User_Comments';
import { ReduxState } from '../reducer/type';
import * as config from '../../env';
const mapStateToProps = (state: ReduxState) => {
	return {
		userId: state.reducer.information.user_Id,
	};
};

const mapDispachToProps = () => {
	return {
		userProFile: (userId: Number) =>
			axios.get(`http://${config.SERVER_PORT}/user/user_post?userId=${userId}`).then((res) => {
				console.log(res.data[0].comments, 'dtae');
				return res.data[0].comments;
			}),
	};
};

export default connect(mapStateToProps, mapDispachToProps)(User_Comments);
