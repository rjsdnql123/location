import { connect } from 'react-redux';
import axios from 'axios';
import { HeaderTitle } from '@react-navigation/stack';
import ProFile from '../components/ProFile';
import { setPost } from '../action';
import { MainPostData, ReduxState } from '../reducer/type';
import * as config from '../../env';
const mapStateToProps = (state: ReduxState) => {
	console.log(state, 'poost');
	return {
		userId: state.reducer.information.user_Id,
	};
};

const mapDispachToProps = (dispatch: Function) => {
	return {
		userProFile: (userId: Number) =>
			axios.get(`http://${config.SERVER_PORT}/user/information?userId=${userId}`).then((res) => {
				console.log(res.data, 'dtae');
				return res.data[0];
			}),
	};
};

export default connect(mapStateToProps, mapDispachToProps)(ProFile);
