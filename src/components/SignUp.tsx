import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { User, LoginProps } from '../reducer/type';
import * as Location from 'expo-location';
import * as config from '../../env';

const axios = require('axios');

//이메일, 비밀번호, 나이, 지역 z

class SignUp extends Component<LoginProps, User> {
	constructor(props: LoginProps) {
		super(props);
		this.state = {
			email: '',
			password: '',
			nickname: '',
			location: '',
			age: '',
			lat: 0,
			lng: 0,
		};
	}

	CheckEmail = async (email: string) => {
		console.log('지나가?');
		const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		const checkEmail = emailRegex.test(email);
		let allPass = true;
		for (let key in this.state) {
			if (this.state[key] === '') allPass = false;
		}
		if (!checkEmail) {
			return alert('이메일 에러');
		} else if (!allPass) {
			console.log('미통과');
			alert('빈칸을 채워주세요');
		} else {
			console.log(config.SERVER_PORT);
			//통과되면 서버에 요청을 보내 회원가입 요청 날리기
			await axios
				.post(`http://localhost:8080/user/signup`, {
					email: this.state.email,
					password: this.state.password,
					nickname: this.state.nickname,
					age: this.state.age,
					location: this.state.location,
				})
				.then(() => {
					console.log('완료');
					alert('회원가입 완료');
					this.props.navigation.navigate('Login');
				})
				.catch((err: string) => {
					this.setState({
						email: '',
						password: '',
					});
					alert('이메일이 중복 되었습니다');
					console.log(err, 'err');
				});
		}
	};

	getLocation = async () => {
		let { status } = await Location.requestPermissionsAsync();
		const location = await Location.getCurrentPositionAsync();
		if (status !== 'granted') {
			alert('위치공유를 수락해 주세요');
		}
		this.setState({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
		//역 지오코딩 이용해서 지역 찾기
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${config.MAPS_API_KEY}`
			) // 위도, 경도 google maps api로 보냄
			.then((res: any) => {
				const result = res.data.results[5].formatted_address.slice(5); // 앞에 대한민국은 뺀다.
				this.setState({
					location: result,
				});
			})
			.catch((error: any) => {
				console.log('axios 구글 maps api 에러', error);
			});
	};

	render() {
		return (
			<View>
				<Email>
					<UserInformation
						placeholder="email"
						value={this.state.email}
						onChangeText={(email: string) => this.setState({ email })}
					/>
				</Email>
				<Email>
					<UserInformation
						placeholder="password"
						secureTextEntry={true}
						value={this.state.password}
						onChangeText={(password: string) => this.setState({ password })}
					/>
				</Email>
				<Email>
					<UserNickName
						placeholder="nickname"
						value={this.state.nickname}
						onChangeText={(nickname: string) => this.setState({ nickname })}
					/>
				</Email>
				<Email>
					<UserInformation placeholder="age" value={this.state.age} onChangeText={(age) => this.setState({ age })} />
				</Email>
				<Email>
					<TouchableOpacity onPress={() => this.getLocation()}>
						<Text>{this.state.location === '' ? '클릭해 지역을 받아주세요' : this.state.location}</Text>
					</TouchableOpacity>
				</Email>
				<SignUpButton onPress={() => this.CheckEmail(this.state.email)}>
					<SignUpText>touch pealse</SignUpText>
				</SignUpButton>
			</View>
		);
	}
}
const UserInformation = styled.TextInput`
	width: 91%;
	padding: 5px;
`;
const UserNickName = styled.TextInput`
	font-size: 17px;
	width: 91%;
	padding: 5px;
`;
const Email = styled.View`
	border-bottom-width: 3px;
	border-bottom-color: palevioletred;
	display: flex;
	flex-direction: row;
	margin: 5%;
`;

const SignUpButton = styled.TouchableOpacity`
	border: 1px solid palevioletred;
	border-radius: 50px;
	background-color: palevioletred;
	width: 70%
	height: 15%
    alignItems: center
	margin: 15%
	align-items: center;
	justify-content: center;
`;

const SignUpText = styled.Text`
	font-size: 30px;
	font-weight: 900;

	color: white;
`;

export default SignUp;
