import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

//title과 comment, 쓰는 칸
class Post extends Component {
    constructor(props:any) {
        super(props)
        this.state = {
            title: '',
            contents:''
        }
    }
    //게시글 등록후 메인 페이지로 이동시킨다.
    render() {
        console.log(this.props)
        console.log(this.state,'state')
        return(
            <View>
                <Text>
                    여기다 포스트 쓸꺼야
                </Text>
                <Text>여기다 타이틀 쓰기
                    <TextInput value={this.state.title} onChangeText={(title) => this.setState({ title })}/>
                </Text>
                <Text>여기다 내용 쓰기 
                    <TextInput value={this.state.contents} onChangeText={(contents) => this.setState({ contents })}/>
                </Text>
               
                <UserLogin onPress={() => {return (this.props.navigation.navigate('Main'),this.props.writing(this.props.userId,this.state.title,this.state.contents))}} >
                {/* <UserLogin onPress={() => this.props.writing(this.props.userId,this.state.title,this.state.contents)}> */}

                    <Text>이거클릭</Text>
                {/* </UserLogin> */}
                </UserLogin>
                
            </View>
        )
    }
}
const UserLogin = styled.TouchableOpacity`
	background-color: blue;
`;
export default Post