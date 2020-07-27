import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../containers/Login';
import SignUp from './SignUp';
import Main from '../containers/Main';
import {setLogin} from '../action/index'
import { Auth } from '../reducer/type';
const Stack = createStackNavigator();

class AuthLoadingScreen extends Component<Auth> {
  constructor(props: Auth) {
    super(props);
  }

  // usertoken을 가져오는 함수
  getUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('USERTOKEN');
      if (value !== null) {
        console.log('토큰있음', value);
        console.log('propssssss',this.props)
        this.props.isLogin(setLogin('true'))
        return value
      } else {
        console.log('토큰없음', value);
        console.log('propssssss',this.props)
        this.props.isLogin(setLogin('false'))
        return null
      }
    } catch (error) {
      console.log('getUserTokenError', error);
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
                  ) : (
        		      <Stack.Screen name="Main" component={Main} />
        		  )}
      </Stack.Navigator>
    );
  }
}

export default AuthLoadingScreen
