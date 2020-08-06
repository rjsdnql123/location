import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { PostDetailProps, PostDetailState } from '../reducer/type';

//해당 게시글에 상제 정보 타이틀과 댓글목록
class PostDetail extends Component<PostDetailProps, PostDetailState> {
	constructor(props: PostDetailProps) {
		super(props);
		this.state = {
			comments: '',
		};
	}
	componentDidMount() {
		console.log('재랜더링');
	}
	render() {
		console.log(this.props, '실행');
		return (
			<View>
				<Text>{this.props.post[this.props.route.params.postIndex].title}</Text>
				<Text>
					{' '}
					댓글
					<TextInput value={this.state.comments} onChangeText={(comments) => this.setState({ comments })}></TextInput>
				</Text>
				{this.props.post[this.props.route.params.postIndex].comments.map((comments: any, index) => (
					<Text key={index}>{comments.Contents}</Text>
				))}
				<TouchableOpacity
					onPress={() => (
						this.props.writingComment(this.props.userId, this.props.route.params.postId, this.state.comments),
						this.setState({ comments: '' })
					)}
				>
					<Text>버튼</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default PostDetail;
