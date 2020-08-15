import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { PostDetailProps, PostDetailState } from '../reducer/type';

//해당 게시글에 상제 정보 타이틀과 댓글목록
function PostName({ post, route }) {
	console.log(post, '우우우ㅜㅇ');
	return (
		<Post>
			<Title> title {post[route.params.postIndex].title}</Title>
			<PostNickname>닉네임 대전 {post[route.params.postIndex].user.nickname}</PostNickname>
			<Time> 작성시간 {post[route.params.postIndex].updatedAt}</Time>
			<Title>글 내용 {post[route.params.postIndex].contents}</Title>
		</Post>
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
	console.log(writeComments);

	return (
		<PostScreen>
			<PostNames post={post} route={route}></PostNames>
			<Comment_Box>
				<Write>
					<TextIN>
						<Comments_Write value={writeComments} onChangeText={(comments) => setComments(comments)}></Comments_Write>
					</TextIN>
					<ZZZZZ>
						<TouchableOpacity
							onPress={() => (writingComment(userId, route.params.postId, writeComments), setComments(''))}
						>
							<Text>댓글 등록</Text>
						</TouchableOpacity>
					</ZZZZZ>
				</Write>
				<Commentsss post={post} route={route}></Commentsss>
			</Comment_Box>
		</PostScreen>
	);
}

export default PostDetail;
const PostScreen = styled.View`
	margin: 5px;
`;
const Post = styled.View`
	border: 1px;
	border-color: palevioletred;
	margin-bottom: 5px;
	padding: 5px;
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
const Comments_Write = styled.TextInput`
	height: 30%;
	border: 1px;
	border-color: blue;
`;
const Write = styled.View`
	display: flex;
	flex-direction: row;

	border: 1px;
	border-color: black;
`;
const Comment_Box = styled.View`
	border: 1px;
	border-color: palevioletred;
	margin-bottom: 5px;
	padding: 5px;
`;

const TextIN = styled.View``;

const ZZZZZ = styled.View`
	float: light;
`;
