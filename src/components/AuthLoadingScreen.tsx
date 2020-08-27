import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../containers/Login';
import SignUp from './SignUp';
import Loding from './Loding';
import Main from '../containers/Main';
import { setLogin } from '../action/index';
import { Auth } from '../reducer/type';
import axios from 'axios';
import Post from '../containers/Post';
import PostDetail from '../containers/PostDetail';
import * as config from '../../env';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProFile from '../containers/ProFile';

const Stack = createStackNavigator();
const Home = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage(props: any) {
	return (
		<Home.Navigator>
			<Home.Screen name="홈" component={Main} initialParams={{ userId: props.route.params.userId }} />
			<Home.Screen name="PostDetail" component={PostDetail} />
		</Home.Navigator>
	);
}

function PostWirting(props: any) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="글쓰기" component={Post} />
		</Stack.Navigator>
	);
}
function ProFileRender(props: any) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="프로필" component={ProFile} />
		</Stack.Navigator>
	);
}
class AuthLoadingScreen extends Component<Auth> {
	constructor(props: Auth) {
		super(props);
	}

	// usertoken을 가져오는 함수
	//서버로 토큰을 보내 토큰이 유효한지 보고 유효하다면 유지
	//유효하지 않다면 스토리지를 초기화 해 로그아웃 시키기
	//토큰 기한이 말료되면 클라이언트에 토큰을 초기화 시키기
	getUserToken = async () => {
		try {
			console.log('지나가냐?');
			const value = await AsyncStorage.getItem('USERTOKEN');
			console.log(value, 'cadkenvine');
			this.props.getUserTokens(value, this.props.information, this.props.isLogin);
		} catch (error) {
			console.log(error, 'error');
		}
	};

	componentDidMount() {
		this.getUserToken();
	}

	render() {
		console.log(this.props, 'props ahow');
		if (this.props.userId) {
			this.props.information({ user_Id: this.props.userId });
		}
		return this.props.setLogin === 'false' ? (
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		) : this.props.setLogin === 'true' ? (
			<Tab.Navigator>
				<Tab.Screen name="홈" component={HomePage} initialParams={{ userId: this.props.userId }} />
				<Tab.Screen name="글쓰기" component={PostWirting} />
				<Tab.Screen name="회원정보" component={ProFileRender} />
			</Tab.Navigator>
		) : (
			<Stack.Navigator>
				<Stack.Screen name="Loding" component={Loding} />
			</Stack.Navigator>
		);
	}
}

export default AuthLoadingScreen;
