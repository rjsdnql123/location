import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {User, MainProps, MainPostData} from '../reducer/type'
import * as Location from 'expo-location'
const axios = require('axios');
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setLogin } from '../action';

//해당 유저의 지역에 걸맞는 포스트 내용들을 불러와준다.

class Main extends Component<MainProps> {
    constructor(props:MainProps) {
        super(props)
    }

    getPost = () => {
        axios.get('http://localhost:8080/post/allpost', {
        }).then(({data}:MainPostData) => {
            console.log(data,'data')
            this.props.postSet(data)
        })
    }

    componentDidMount() {
        this.getPost()
    }
    render() {
        console.log(this.props,'mainProps')
        if(this.props.post[0] === undefined) {
            return(
                <View></View>
            )
        }
        return(
            <View>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.clear();
                    this.props.isLogin('false')
    
                    alert('로그아웃');
                    // this.props.navigation.navigate('Login'); // 작동됨
                }}>
                    <Text>main</Text>
                </TouchableOpacity> 
                {this.props.post.map((a, index) => (
                   <Post key={index}>
                    <PostNickname>nickname: {a.user.nickname}</PostNickname>
                    <Title>title: {a.title}</Title>
                    <Contents>Contents: {a.contents}</Contents>
                    <Comments>댓글 몇개?{a.comments.length}</Comments>
                   </Post>
                ))}
            </View>
        )
    }
}

//게시글을 터치로 잡아서 해당 게시글 클릭시 해당 게시글 자세히 보기로 이동
export default Main

const Post = styled.View`
   border-bottom-width : 1px;
   border-bottom-color : #aaa;
   border-top-width : 1px;
   border-top-color : #aaa;
`;

const Title = styled.Text`
   
`;

const Contents = styled.Text`
   
`;

const PostNickname = styled.Text`

`;

const Comments = styled.Text`

`;

