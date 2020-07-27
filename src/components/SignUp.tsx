import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {User, LoginProps} from '../reducer/type'
import * as Location from 'expo-location'
const axios = require('axios');
require('dotenv').config();

//이메일, 비밀번호, 나이, 지역

class SignUp extends Component<LoginProps, User> {
    constructor(props:LoginProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nickname: '',
            location: '',
			age: '',
			lat:0,
			lng:0,
        }
    }

    CheckEmail = async (email:string) => {
		const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		const checkEmail = emailRegex.test(email);
		if (!checkEmail) {
			return alert('이메일 에러');
        }
		//통과되면 서버에 요청을 보내 회원가입 요청 날리기
		await axios.post('http://localhost:8080/user/signup', {
			email: this.state.email,
			password: this.state.password,
			nickname: this.state.nickname,
			age: this.state.age,
			location: this.state.location
		})
		alert('회원가입 완료');
		//this.props.navigation 으로 login 화면으로 전환
		this.props.navigation.navigate('Login')
	};

	getLocation = async () => {
		const location = await Location.getCurrentPositionAsync()
		console.log(location)
		this.setState({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		  });
		  console.log('현재위치 lat', this.state.lat);
		  console.log('현재위치 lng', process);
//역 지오코딩 이용해서 지역 찾기
		  axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${process.env.MAPS_API_KEY}`,
          ) // 위도, 경도 google maps api로 보냄
          .then((res:any) => {
			console.log(res,'이뭐야')
            console.log('반환된 주소값', res.data.results[5].formatted_address);
            const result = res.data.results[5].formatted_address.slice(5); // 앞에 대한민국은 뺀다.
			console.log('최종 주소값', result);
			this.setState({
				location: result
			})
          })
          .catch((error:any) => {
            console.log('axios 구글 maps api 에러', error);
          });
	}
	
    render() {
		console.log(this.props,'signUp')
        return(
            <View>
                <Email>
					<Text>email</Text>
					<TextInput value={this.state.email} onChangeText={(email) => this.setState({ email })} />
				</Email>
				<Email>
					<Text>password</Text>
					<TextInput value={this.state.password} onChangeText={(password) => this.setState({ password })} />
				</Email>
                <Email>
					<Text>nickname</Text>
					<TextInput value={this.state.nickname} onChangeText={(nickname) => this.setState({ nickname })} />
				</Email>
                <Email>
					<Text>age</Text>
					<TextInput value={this.state.age} onChangeText={(age) => this.setState({ age })} />
				</Email>
                <Email>
					<TouchableOpacity onPress={() => this.getLocation()}>
					<Text>location</Text>
					<TextInput value={this.state.location} onChangeText={(location) => this.setState({ location })} />
					</TouchableOpacity>
				</Email>
                <UserLogin onPress={() => this.CheckEmail(this.state.email)}>
					<Text>Pick a photo</Text>
				</UserLogin>
            </View>
        )
    }
}

const Email = styled.View`
	border: 1px solid palevioletred;
`;

const UserLogin = styled.TouchableOpacity`
	background-color: blue;
`;

export default SignUp