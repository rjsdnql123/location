import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {User, UserProps, SetLogin, AuthLoding} from './reducer/type'
import * as Location from 'expo-location'
const axios = require('axios');
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setLogin } from './action';

//해당 유저의 지역에 걸맞는 포스트 내용들을 불러와준다.

class Main extends Component<UserProps> {
    constructor(props:UserProps) {
        super(props)
    }

    render() {
        console.log(this.props,'이거메인')
        return(
            <View>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.clear();
                    this.props.isLogin(setLogin('false'))

                    alert('로그아웃');
                    // this.props.navigation.navigate('Login'); // 작동됨
                }}>
                    <Text>main</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// export default Main
const mapStateToProps = (state:AuthLoding) => {
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
      return {
          isLogin: (userLogin: SetLogin) => dispatch(setLogin(userLogin))
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Main);