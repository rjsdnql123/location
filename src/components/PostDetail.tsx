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
			<PostScreen>
				<Post>
					<Title> title {this.props.post[this.props.route.params.postIndex].title}</Title>
					<PostNickname>닉네임 대전 {this.props.post[this.props.route.params.postIndex].user.nickname}</PostNickname>
					<Time> 작성시간 {this.props.post[this.props.route.params.postIndex].updatedAt}</Time>
					<Title>글 내용 {this.props.post[this.props.route.params.postIndex].contents}</Title>
					<TextIN>
						<TextInput value={this.state.comments} onChangeText={(comments) => this.setState({ comments })}></TextInput>
					</TextIN>
				</Post>
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
			</PostScreen>
		);
	}
}

export default PostDetail;
const PostScreen = styled.View`
	margin: 5px;
`;
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
const Time = styled.Text`
	font-size: 8px;
`;
const PostNickname = styled.Text`
	font-weight: 900;
`;
const Comments = styled.Text`
	color: palevioletred;
`;
const Contents = styled.Text``;

const TextIN = styled.View`
	background-color: blue;
`;
