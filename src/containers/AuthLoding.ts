import { connect } from 'react-redux';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import { setLogin, setInformation } from '../action';
import { Information, ReduxState } from '../reducer/type';
import axios from 'axios';
import * as config from '../../env';
// import { AsyncStorage } from 'react-native';

const mapStateToProps = (state: ReduxState) => {
	return {
		userId: state.reducer.information.user_Id,
		setLogin: state.reducer.setLogin,
	};
};
const mapDispatchToProps = (dispatch: Function) => {
	return {
		isLogin: (userLogin: string) => dispatch(setLogin(userLogin)),
		information: (userInformation: Information) => dispatch(setInformation(userInformation)),
		getUserTokens: (value: string, information: Function, isLogin: Function) =>
			axios
				.get(`http://${config.SERVER_PORT}/user/auth`, {
					headers: {
						authorization: value, //유저 ID
					},
				})
				.then(({ status, data }) => {
					if (status === 200) {
						//유저의 정보를 id location 등을 업데이트 해서 redux에 저장한다
						//파람으로 넘겨줄수 있나?
						information({
							user_Id: data.user_Id,
						});
						isLogin('true');
					} else {
						// AsyncStorage.clear();
						isLogin('false');
					}
				}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
