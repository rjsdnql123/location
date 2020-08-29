import { TextInput, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
class User_Write extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.route.params.posts, '이거 뭔지 알면 됨');
		return this.props.route.params.posts ? (
			<ScrollView>
				{this.props.route.params.posts.map((x, index) => (
					<Post key={index}>
						<Title>{x.title}</Title>
						<Contents>{x.contents}</Contents>
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

export default User_Write;
