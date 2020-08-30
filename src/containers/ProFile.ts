import { connect } from 'react-redux';
import axios from 'axios';
import ProFile from '../components/ProFile';
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
			axios.get(`http://${config.SERVER_PORT}/user/information?userId=${userId}`).then((res) => {
				return res.data[0];
			}),
	};
};

export default connect(mapStateToProps, mapDispachToProps)(ProFile);
