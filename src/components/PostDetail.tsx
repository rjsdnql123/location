import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { PostDetailProps, PostContent } from '../reducer/type';
//해당 게시글에 상제 정보 타이틀과 댓글목록
function PostName({ post, route }: PostContent) {
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

function Commentss({ post, route }: PostContent) {
	console.log(post, route);
	return (
		<View>
			{post[route.params.postIndex].comments.map((comments: any, index) => (
				<Comments_Route key={index}>
					<Text>
						닉네임{comments.user.nickname} 작성시간 {comments.createdAt}
					</Text>
					<Text>내용: {comments.Contents}</Text>
				</Comments_Route>
			))}
		</View>
	);
}
const Commentsss = React.memo(Commentss);

function PostDetail({ post, route, writingComment, userId }: PostDetailProps) {
	const [writeComments, setComments] = useState('');
	console.log(writeComments);

	return (
		<PostScreen>
			<PostNames post={post} route={route}></PostNames>
			<Comment_Box>
				<Write>
					<Comments_Write
						multiline
						value={writeComments}
						onChangeText={(comments: string) => setComments(comments)}
					></Comments_Write>
					<TextButtom onPress={() => (writingComment(userId, route.params.postId, writeComments), setComments(''))}>
						<Text>등록</Text>
					</TextButtom>
				</Write>
				<Commentsss post={post} route={route}></Commentsss>
			</Comment_Box>
		</PostScreen>
	);
}
//인풋 텍스트 수정 후, 버튼 가운데로 옮기고, 댓글 수정하기

export default PostDetail;
const PostScreen = styled.ScrollView`
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
	width: 85%;
`;
const Write = styled.View`
	display: flex;
	flex-direction: row;
	height : 150px
	border: 1px;
	border-color: black;
`;
const Comment_Box = styled.View`
	border: 1px;
	border-color: palevioletred;
	margin-bottom: 5px;
	padding: 5px;
	width: 100%;
`;

const Comments_Route = styled.View`
padding:5px
	border: 1px
	background-color: #E2E2E2
	;
`;

const TextButtom = styled.TouchableOpacity`
	justify-content: center;
	background-color: #e2e2e2;
	align-items: center;
	width: 15%;
`;
