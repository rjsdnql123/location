import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {User, UserProps} from './reducer/type'

//이메일, 비밀번호, 나이, 지역

class SignUp extends Component<UserProps, User> {
    constructor(props:UserProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nickname: '',
            location: '',
            age: ''
        }
    }

    CheckEmail = (email:string) => {
		const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		const checkEmail = emailRegex.test(email);
		if (!checkEmail) {
			return alert('이메일 에러');
        }
        //통과되면 서버에 요청을 보내 회원가입 요청 날리기
		return alert('통과');
	};

    render() {
        console.log(this.props)
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
					<Text>location</Text>
					<TextInput value={this.state.location} onChangeText={(location) => this.setState({ location })} />
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