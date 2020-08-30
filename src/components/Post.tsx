import React, { Component } from 'react';
import {  Button } from 'react-native';
import styled from 'styled-components/native';
import { PostPropst, PostState } from '../reducer/type';

//title과 comment, 쓰는 칸
class Post extends Component<PostPropst, PostState> {
	constructor(props: PostPropst) {
		super(props);
		this.state = {
			title: '',
			contents: '',
		};
	}

	componentDidMount() {
		this.props.navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => {
						return (
							this.props.navigation.navigate('홈'),
							this.props.writing(this.props.userId, this.state.title, this.state.contents),
							alert('게시글이 등록 되었습니다.')
						);
					}}
					title="글등록"
				/>
			),
		});
	}
	//게시글 등록후 메인 페이지로 이동시킨다.
	render() {

		return (
			<Post_Writing>
				<Title_Writing
					placeholder="제목을 입력하세요"
					value={this.state.title}
					onChangeText={(title: string) => this.setState({ title })}
				/>

				<Content_Writing
					placeholder="내용을 입력하세요"
					multiline
					value={this.state.contents}
					onChangeText={(contents: string) => this.setState({ contents })}
				/>
			</Post_Writing>
		);
	}
}

const Post_Writing = styled.View`
	margin: 10px;
	height: 70%;
`;

const Title_Writing = styled.TextInput`
	border: 1px;
	height: 40px;
	font-size: 17px;
`;

const Content_Writing = styled.TextInput`
	border: 1px;
	height: 100%;
`;
export default Post;
