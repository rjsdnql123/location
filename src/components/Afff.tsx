import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Afff extends Component {
	componentDidMount() {
		this.props.navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => {
						return alert('게시글이 등록 되었습니다.');
					}}
					title="글등록"
				/>
			),
		});
	}
	render() {
		return (
			<View>
				<Text>기다려주세요</Text>
			</View>
		);
	}
}
export default Afff;
