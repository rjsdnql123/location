import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { User, LoginProps } from '../reducer/type';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import App from '../App';
import { connect } from 'react-redux';
import { setLogin } from '../action';
import * as config from '../../env';
import AuthLoding from '../containers/AuthLoding';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
// 값이 바뀔때 마다 이메일 형식인지 확인한다?

class Login extends Component<LoginProps, User> {
	constructor(props: LoginProps) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	// 이메일 형식인지 확인
	CheckEmail = (email: string) => {
		try {
			const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
			const checkEmail = emailRegex.test(email);
			if (!checkEmail) {
				return alert('이메일 형식이 아닙니다!');
			}
			axios
				.post(`http://${config.SERVER_PORT}/user/signin`, {
					email: this.state.email,
					password: this.state.password,
				})
				.then(async (res) => {
					if (res.status === 200) {
						//성공시 메인 페이지
						await AsyncStorage.setItem('USERTOKEN', res.data.accessToken);
						this.props.information({ user_Id: res.data.userId });
						this.props.isLogin('true');
						return alert('로그인 성공');
					} else if (res.status === 404) {
						console.log('ddnc');
					}
				});
		} catch (error) {
			console.log('error');
			return alert('실패');
		}
	};

	render() {
		console.log(this.props, 'thisporposdia');
		return (
			<View>
				<MainLoginText>Log In</MainLoginText>
				<Email>
					<AntDesign name="user" size={34} color="black" />
					<UserEmail
						placeholder="ID"
						value={this.state.email}
						onChangeText={(email: string) => this.setState({ email })}
					/>
				</Email>
				<Email>
					<SimpleLineIcons name="lock" size={34} color="black" />
					<UserEmail
						secureTextEntry
						placeholder="password"
						value={this.state.password}
						onChangeText={(password: string) => this.setState({ password })}
					/>
				</Email>
				<LoginButton onPress={() => this.CheckEmail(this.state.email)}>
					<LoginText>Log IN</LoginText>
				</LoginButton>
				<SignUpView>
					<SignUpText>이메일이 없습니까? </SignUpText>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
						<SignUpButton>SIGN UP</SignUpButton>
					</TouchableOpacity>
				</SignUpView>
			</View>
		);
	}
}
// onPress={() => navigation.navigate('Details')}
const Email = styled.View`
	border-bottom-width: 3px;
	border-bottom-color: palevioletred;
	display: flex;
	flex-direction: row;
	margin: 5%;
`;

const UserEmail = styled.TextInput`
	width: 91%;
`;

const SignUpButton = styled.Text`
	color: palevioletred;
`;
const MainLoginText = styled.Text`
	margin: 20%;
	font-size: 30px;
	font-weight: 900
	color: palevioletred;
`;

const LoginButton = styled.TouchableOpacity`
	border: 1px solid palevioletred;
	border-radius: 50px;
	background-color: palevioletred;
	width: 70%
	height: 15%
	justifyContent: center
    alignItems: center
	margin: 15%
`;

const LoginText = styled.Text`
	font-size: 30px;
	font-weight: 900;
	justifycontent: center;
	color: white;
`;

const SignUpText = styled.Text`
	color: black;
`;
const SignUpView = styled.View`
	display: flex;
	flex-direction: row;
	justifyContent: center
    alignItems: center
`;

export default Login;
