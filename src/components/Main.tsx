import { Text, TouchableOpacity, ScrollView, RefreshControl, Image, View, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { MainProps } from '../reducer/type';
import axios from 'axios';
import * as config from '../../env';
// import { AsyncStorage } from 'react-native';
import culturePick from '../containers/culturePick';
import CultureRandom from '../containers/CultureRandom';

//해당 유저의 지역에 걸맞는 포스트 내용들을 불러와준다.

//새로고침 할수 있는 함수

function Main(props: MainProps) {
	const [cultureList, cultureListset] = useState([]);
	const [cultureArr] = useState(CultureRandom());

	async function culturePick() {
		return await axios.get(`http://${config.SERVER_PORT}/culture/pick`).then((res) => {
			console.log(res.data);
			cultureListset(res.data);
			return res.data;
		});
	}
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
		culturePick();
		const { userId } = props.route.params;
		if (userId) {
			props.postSet(userId);
		}
	}, []);

	if (props.post[0] === undefined) {
		return (
			<ScrollView>
				<TouchableOpacity
					onPress={() => {
						// AsyncStorage.clear();
						props.isLogin('false');

						alert('로그아웃');
					}}
				>
					<Text>main</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
	// {cultureList[0].image_url}
	return (
		<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
			<View>
				{cultureList.length === 0 ? (
					[]
				) : (
					<CultureView>
						{cultureArr.map((x, index) => {
							return (
								<ASD
									key={index}
									onPress={() => {
										Linking.openURL(`https://${cultureList[x].url}`);
									}}
								>
									<CulturePhoto source={{ uri: cultureList[x].image_url }} />
								</ASD>
							);
						})}
					</CultureView>
				)}
			</View>
			{props.post.map((a, index) => (
				<Post key={index}>
					<TouchableOpacity
						onPress={() =>
							props.navigation.navigate('글 목록', {
								postIndex: index,
								postId: a.post_Id,
							})
						}
					>
						<PostNickname>닉네임 : {a.user.nickname}</PostNickname>
						<Title>내용: {a.title}</Title>
						<Text>Contents: {a.contents}</Text>
						<Comments>댓글: {a.comments.length}</Comments>
					</TouchableOpacity>
				</Post>
			))}
			<TouchableOpacity
				onPress={() => {
					// AsyncStorage.clear();
					props.isLogin('false');

					alert('로그아웃');
					// props.navigation.navigate('Login'); // 작동됨
				}}
			>
				<Text>main</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

//게시글을 터치로 잡아서 해당 게시글 클릭시 해당 게시글 자세히 보기로 이동
export default Main;

const PostNickname = styled.Text`
	font-weight: 900;
`;

const Comments = styled.Text`
	color: palevioletred;
`;

const Post = styled.View`
	background-color: white;
	padding: 20px;
	margin-bottom: 5px;
`;
const CultureView = styled.View`
	display: flex;
	flex-direction: row;
`;

const Title = styled.Text`
	font-weight: 900;
	font-size: 18px;
`;
const CulturePhoto = styled.Image`
	width: 100%;
	height: 150px;
`;
const ASD = styled.TouchableOpacity`
	width: 50%;
	height: 150px;
`;
