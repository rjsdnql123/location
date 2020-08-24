import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

class ProFile extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props.userId, this.props.userProFile, 'this.props');
		this.props.userProFile(this.props.userId);
	}
	render() {
		console.log(this.props, 'propss');
		return (
			<View>
				<Text>ProFile</Text>
			</View>
		);
	}
}

export default ProFile;

//componentdidmount 를 이용해 데이터들을 불러옴
