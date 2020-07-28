import React, {Component} from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

//해당 게시글에 상제 정보 타이틀과 댓글목록
class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments:''
        }
    }
    render() {
      console.log(this.props,'실행')
      return (
        <View>
            <Text>
                {this.props.post[this.props.route.params.postIndex].title}
            </Text>
            <Text> 댓글
            <TextInput value={this.state.comments} onChangeText={(comments) => this.setState({ comments })}>
            </TextInput>
            </Text>
            <TouchableOpacity onPress={() => this.props.writingComment(this.props.userId, this.props.route.params.postId, this.state.comments)}>
                <Text>버튼</Text>
            </TouchableOpacity>
        </View>
      )
    }
}

export default PostDetail