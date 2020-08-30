import { TextInput, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
class User_Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
		};
	}
	async componentDidMount() {
		this.setState({ comments: await this.props.userProFile(this.props.userId) });
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.comments[0]) {
			if (
				nextState.comments[nextState.comments.length - 1].createdAt ===
				this.state.comments[this.state.comments.length - 1].createdAt
			) {
				return false;
			}
		}
		return true;
	}
	render() {
		return this.state.comments ? (
			<ScrollView>
				{this.state.comments.map((x, index) => (
					<Post key={index}>
						<Contents>{x.Contents}</Contents>
					</Post>
				))}
			</ScrollView>
		) : (
			<ScrollView />
		);
	}
}
const Post = styled.View`
	background-color: white;
	padding: 20px;
	margin-bottom: 5px;
`;
const ButtonView = styled.View`
	background-color: white;
	padding: 20px;
`;

const Title = styled.Text`
	font-weight: 900;
	font-size: 30px;
`;

const Contents = styled.Text``;

export default User_Comments;
