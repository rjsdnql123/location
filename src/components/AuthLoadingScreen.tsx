import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../containers/Login';
import SignUp from './SignUp';
import Loding from './Loding'
import Main from '../containers/Main';
import {setLogin} from '../action/index'
import { Auth } from '../reducer/type';
import axios from 'axios'
import Post from '../containers/Post';
import PostDetail from '../containers/PostDetail';
const Stack = createStackNavigator();

class AuthLoadingScreen extends Component<Auth> {
  constructor(props: Auth) {
    super(props);
  }

  // usertoken을 가져오는 함수
  //서버로 토큰을 보내 토큰이 유효한지 보고 유효하다면 유지
  //유효하지 않다면 스토리지를 초기화 해 로그아웃 시키기
  //토큰 기한이 말료되면 클라이언트에 토큰을 초기화 시키기
  getUserToken = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('USERTOKEN');
    //   if (value !== null) {
    //     console.log('토큰있음', value);
    //     console.log('propssssss',this.props)
    //     this.props.isLogin(setLogin('true'))
    //     return value
    //   } else {
    //     console.log('토큰없음', value);
    //     console.log('propssssss',this.props)
    //     this.props.isLogin(setLogin('false'))
    //     return null
    //   }
    // } catch (error) {
    //   console.log('getUserTokenError', error);
    // }
    try{
      console.log('지나가냐?')
      const value = await AsyncStorage.getItem('USERTOKEN');
      console.log(value)
      axios.get('http://localhost:8080/user/auth', {
        headers : {
          authorization: value
        }
      }).then(({ status, data }) => {
        console.log(data,'인포베이션')
        if(status === 200) {
          //유저의 정보를 id location 등을 업데이트 해서 redux에 저장한다?
          console.log('토큰 유효 메인페이지로 이동')
          console.log(data,'result')
          this.props.isLogin('true')
          this.props.information({
            user_Id: data.user_Id,
            location: data.location
          })
        } else {
          console.log('토큰 유효하지 않음 토큰 삭제후 로그인페이지')
          AsyncStorage.clear();
          this.props.isLogin('false')
        }
      })
    } catch(error) {
      console.log(error,'error')
    }
    };

  componentDidMount() {
    this.getUserToken();
  }


  render() {
    console.log(this.props,'props ahow')
    return (
      <Stack.Navigator>
      {this.props.setLogin === 'false'? (
                    <>
                      <Stack.Screen name="Login" component={Login} />
                      <Stack.Screen name="SignUp" component={SignUp} />
                    </>
                  ) :this.props.setLogin ==='true'? (
                    <>
        		      <Stack.Screen name="Main" component={Main} />
                  <Stack.Screen name="Post" component={Post} />
                  <Stack.Screen name="PostDetail" component={PostDetail} />
                  </>
              ):(<Stack.Screen name="Loding" component={Loding} />)
            }
      </Stack.Navigator>
    );
  }
}

export default AuthLoadingScreen
