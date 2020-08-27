import { TextInput, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
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
			<ProFileView>
				<Post>
					<Text>닉s네임: {this.state.profile[0].nickname}</Text>
					<Text>이메일: {this.state.profile[0].email}</Text>
					<Text>위치: {this.state.profile[0].location}</Text>
				</Post>
				{/* {this.state.profile[0].posts.map((x, index) => (
					<Post key={index}>
						<Title>타이틀 {x.title}</Title>
						<Contents>내용 {x.contents}</Contents>
					</Post>
				))} */}
				<TouchableOpacity>
					<Text>내가쓴 글</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>내가 쓴 댓글</Text>
				</TouchableOpacity>
			</ProFileView>
		) : (
			<ScrollView />
		);
	}
}
const Post = styled.View`
	background-color: white;
`;
const ProFileView = styled.ScrollView`
	margin: 10px;
	border: palevioletred;
	padding: 5px;
`;

const Title = styled.Text`
	font-weight: 900;
	font-size: 30px;
`;

const Contents = styled.Text``;

export default ProFile;
