import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { PostDetailProps, PostDetailState } from '../reducer/type';

//해당 게시글에 상제 정보 타이틀과 댓글목록
function PostName({ post, route }) {
	console.log(post, '우우우ㅜㅇ');
	return (
		<View>
			<Title> title {post[route.params.postIndex].title}</Title>
			<PostNickname>닉네임 대전 {post[route.params.postIndex].user.nickname}</PostNickname>
			<Time> 작성시간 {post[route.params.postIndex].updatedAt}</Time>
			<Title>글 내용 {post[route.params.postIndex].contents}</Title>
		</View>
	);
}
const PostNames = React.memo(PostName);

function Commentss({ post, route }) {
	console.log(post, route);
	return (
		<View>
			{post[route.params.postIndex].comments.map((comments: any, index) => (
				<Text key={index}>{comments.Contents}</Text>
			))}
		</View>
	);
}
const Commentsss = React.memo(Commentss);

function PostDetail({ post, route, writingComment, userId }) {
	const [writeComments, setComments] = useState('');
	// console.log(post, route, writingComment, userId);
	console.log(writeComments);

	return (
		<PostScreen>
			<Post>
				<PostNames post={post} route={route}></PostNames>
				{/* <Title> title {post[route.params.postIndex].title}</Title>
				<PostNickname>닉네임 대전 {post[route.params.postIndex].user.nickname}</PostNickname>
				<Time> 작성시간 {post[route.params.postIndex].updatedAt}</Time>
				<Title>글 내용 {post[route.params.postIndex].contents}</Title> */}
				<TextIN>
					<TextInput value={writeComments} onChangeText={(comments) => setComments(comments)}></TextInput>
				</TextIN>
			</Post>
			<TouchableOpacity onPress={() => (writingComment(userId, route.params.postId, writeComments), setComments(''))}>
				<Text>버튼</Text>
			</TouchableOpacity>
			<Commentsss post={post} route={route}></Commentsss>
		</PostScreen>
	);
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
