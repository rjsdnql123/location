import {
	TextInput,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { User, MainProps, MainPostData } from '../reducer/type';
import * as Location from 'expo-location';
const axios = require('axios');
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setLogin } from '../action';
import PostDetail from './PostDetail';

//해당 유저의 지역에 걸맞는 포스트 내용들을 불러와준다.

//새로고침 할수 있는 함수

function Main(props: MainProps) {
	const wait = (timeout: number) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		wait(1000).then(() => setRefreshing(false));
	}, []);

	useEffect(() => {
		console.log(props, 'Main');
		const { userId } = props.route.params;
		if (userId) {
			props.postSet(userId);
		}
	}, []);

	console.log(props, 'mainProps');
	if (props.post[0] === undefined) {
		return (
			<PostView>
				<TouchableOpacity
					onPress={() => {
						return props.navigation.navigate('Post');
					}}
				>
					<Text>POST쓰기</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						AsyncStorage.clear();
						props.isLogin('false');

						alert('로그아웃');
					}}
				>
					<Text>main</Text>
				</TouchableOpacity>
			</PostView>
		);
	}
	return (
		<PostView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
			{props.post.map((a, index) => (
				<Post key={index}>
					<TouchableOpacity
						onPress={() =>
							props.navigation.navigate('PostDetail', {
								postIndex: index,
								postId: a.post_Id,
							})
						}
					>
						<PostNickname>nickname: {a.user.nickname}</PostNickname>
						<Title>title: {a.title}</Title>
						<Contents>Contents: {a.contents}...</Contents>
						<Comments>댓글: {a.comments.length}</Comments>
					</TouchableOpacity>
				</Post>
			))}
			<TouchableOpacity
				onPress={() => {
					return props.navigation.navigate('Post');
				}}
			>
				<Text>POST쓰기</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					AsyncStorage.clear();
					props.isLogin('false');

					alert('로그아웃');
					// props.navigation.navigate('Login'); // 작동됨
				}}
			>
				<Text>main</Text>
			</TouchableOpacity>
		</PostView>
	);
}

//게시글을 터치로 잡아서 해당 게시글 클릭시 해당 게시글 자세히 보기로 이동
export default Main;
const PostView = styled.ScrollView`
	margin: 5%;
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

const Contents = styled.Text``;

const PostNickname = styled.Text`
	font-weight: 900;
`;

const Comments = styled.Text`
	color: palevioletred;
`;

// import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// import React, { Component } from 'react';
// import styled from 'styled-components/native';
// import {User, MainProps, MainPostData} from '../reducer/type'
// import * as Location from 'expo-location'
// const axios = require('axios');
// import { AsyncStorage } from 'react-native';
// import { connect } from 'react-redux';
// import { setLogin } from '../action';
// import PostDetail from './PostDetail';

// //해당 유저의 지역에 걸맞는 포스트 내용들을 불러와준다.

// class Main extends Component<MainProps> {
//     constructor(props:MainProps) {
//         super(props)
//     }

//     componentDidMount() {
//         const { userId } = this.props.route?.params
//         console.log(userId,'이거뭐여요요ㅛ')
//         if(userId){
//             this.props.postSet(userId)
//         }
//     }

//     render() {
//         console.log(this.props,'mainProps')
//         if(this.props.post[0] === undefined) {
//             return(
//                 <PostView>
//                     <TouchableOpacity onPress={() => {
//                     return this.props.navigation.navigate('Post')
//                 }}><Text>POST쓰기</Text></TouchableOpacity>
//                     <TouchableOpacity onPress={() => {
//                     AsyncStorage.clear();
//                     this.props.isLogin('false')

//                     alert('로그아웃');
//                     // this.props.navigation.navigate('Login'); // 작동됨
//                 }}>
//                     <Text>main</Text>
//                 </TouchableOpacity>
//                 </PostView>
//             )
//         }
//         return(
//             <PostView>
//                 {this.props.post.map((a, index) => (
//                    <Post key={index}>
//                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetail', {
//                            postIndex: index,
//                            postId: a.post_Id
//                        })}>

//                     <PostNickname>nickname: {a.user.nickname}</PostNickname>
//                     <Title>title: {a.title}</Title>
//                     <Contents>Contents: {a.contents}</Contents>
//                     <Comments>댓글 몇개?{a.comments.length}</Comments>
//                        </TouchableOpacity>
//                    </Post>
//                 ))}
//                 <TouchableOpacity onPress={() => {
//                     return this.props.navigation.navigate('Post')
//                 }}><Text>POST쓰기</Text></TouchableOpacity>
//                 <TouchableOpacity onPress={() => {
//                     AsyncStorage.clear();
//                     this.props.isLogin('false')

//                     alert('로그아웃');
//                     // this.props.navigation.navigate('Login'); // 작동됨
//                 }}>
//                     <Text>main</Text>
//                 </TouchableOpacity>
//             </PostView>
//         )
//     }
// }

// //게시글을 터치로 잡아서 해당 게시글 클릭시 해당 게시글 자세히 보기로 이동
// export default Main
// const PostView = styled.ScrollView`
//    margin: 5%;
// `;
// const Post = styled.View`
//    border-bottom-width : 1px;
//    border-bottom-color : palevioletred;
//    border-top-width : 1px;
//    border-top-color : palevioletred;
// `;

// const Title = styled.Text`

// `;

// const Contents = styled.Text`

// `;

// const PostNickname = styled.Text`

// `;

// const Comments = styled.Text`

// `;
