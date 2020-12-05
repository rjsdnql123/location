import { connect } from 'react-redux';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import { setLogin, setInformation } from '../action';
import { Information, ReduxState } from '../reducer/type';
import axios from 'axios';
import * as config from '../../env';
import { AsyncStorage } from 'react-native';

function culturePick() {
	return axios.get(`http://${config.SERVER_PORT}/culture/pick`).then((res) => {
		console.log(res.data);
		return res.data;
	});
	// return a;
}

export default culturePick;
