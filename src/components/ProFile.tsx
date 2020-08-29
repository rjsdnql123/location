import { TextInput, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
class ProFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: {},
		};
	}
	async componentDidMount() {
		console.log('실행됨니다용');
		this.setState({
			profile: await this.props.userProFile(this.props.userId),
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextState, 'nextProps');
		return true;
	}
	render() {
		console.log(this.state, 's이거 뭐에용');

		return this.state.profile ? (
			<ScrollView>
				<Post>
					<MaterialCommunityIcons name="human-greeting" size={50} color="black" />
					<View>
						<Text>
							닉네임: {this.state.profile.nickname} ({this.state.profile.email})
						</Text>
						<Text>위치: {this.state.profile.location}</Text>
					</View>
				</Post>
				<ButtonView>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('내가 쓴 글')}>
						<Entypo name="pencil" size={24} color="black" />
						<Text>내가쓴 글</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('내가 쓴 댓글')}>
						<FontAwesome name="commenting-o" size={24} color="black" />
						<Text>내가 쓴 댓글</Text>
					</TouchableOpacity>
				</ButtonView>
			</ScrollView>
		) : (
			<ScrollView />
		);
	}
}
const Post = styled.View`
	background-color: white;
	padding: 20px;
	flex-direction: row;
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

export default ProFile;
