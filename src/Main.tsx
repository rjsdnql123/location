import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {User, UserProps} from './reducer/type'
import * as Location from 'expo-location'
const axios = require('axios');
import { AsyncStorage } from 'react-native';

//해당 유저의 지역에 걸맞는 포스트 내용들을 불러와준다.

class Main extends Component<UserProps> {
    constructor(props:UserProps) {
        super(props)
    }

    render() {
        return(
            <View>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.clear();
                    alert('로그아웃');
                    // this.props.navigation.navigate('Login'); // 작동됨
                }}>
                    <Text>main</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Main