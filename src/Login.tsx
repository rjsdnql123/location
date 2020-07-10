import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {User, UserProps} from './reducer/type'
// 값이 바뀔때 마다 이메일 형식인지 확인한다?

class Login extends Component<UserProps,User> {
	constructor(props:UserProps) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	// 이메일 형식인지 확인
	CheckEmail = (email:string) => {
		const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		const checkEmail = emailRegex.test(email);
		if (!checkEmail) {
			return alert('이메일 에러');
		}
		return alert('통과');
	};

	render() {
		return (
			<View>
				<Email>
					<Text>email</Text>
					<TextInput value={this.state.email} onChangeText={(email) => this.setState({ email })} />
				</Email>
				<Email>
					<Text>password</Text>
					<TextInput value={this.state.password} onChangeText={(password) => this.setState({ password })} />
				</Email>
				<UserLogin onPress={() => this.CheckEmail(this.state.email)}>
					<Text>Pick a photo</Text>
				</UserLogin>
				<UserLogin onPress={() => this.props.navigation.navigate('SignUp')}>
					<Text>여기는 회원가입</Text>
				</UserLogin>
			</View>
		);
	}
}
// onPress={() => navigation.navigate('Details')}
const Email = styled.View`
	border: 1px solid palevioletred;
`;

const UserLogin = styled.TouchableOpacity`
	background-color: blue;
`;
export default Login;
