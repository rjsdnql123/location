import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

class ProFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: {},
		};
	}
	async componentDidMount() {
		this.setState({
			profile: await this.props.userProFile(this.props.userId),
		});
	}
	render() {
		console.log(this.state.profile);

		return this.state.profile[0] ? (
			<View>
				<Text>닉네임: {this.state.profile[0].nickname}</Text>
				<Text>이메일: {this.state.profile[0].email}</Text>
				<Text>위치: {this.state.profile[0].location}</Text>
				{this.state.profile[0].posts.map((x, index) => (
					<Post key={index}>
						<Title>타이틀 {x.title}</Title>
						<Contents>내용 {x.contents}</Contents>
					</Post>
				))}
			</View>
		) : (
			<View />
		);
	}
}
const Post = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: palevioletred;
	border-top-width: 1px;
	border-top-color: palevioletred;
`;

const Title = styled.Text`
	font-weight: 900;
	font-size: 30px;
`;

const Contents = styled.Text``;

export default ProFile;
