import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import SignUp from './SignUp';
import Main from './Main';
import { connect } from 'react-redux';
import {setLogin} from './action/index'
const Stack = createStackNavigator();
interface AppState {
  setLogin: {};
  onClick: Function;
}

class AuthLoadingScreen extends Component<AppState> {
  constructor(props: AppState) {
    super(props);
  }

  // usertoken을 가져오는 함수
  getUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('USERTOKEN');
      if (value !== null) {
        console.log('토큰있음', value);
        console.log('propssssss',this.props)
        this.props.onClick('asdf')
        return value
      } else {
        console.log('토큰없음', value);
        console.log('propssssss',this.props)
        console.log(this.props.onClick)
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
      {this.props.setLogin === null? (
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

// const mapStateToProps = (state) => {
// 	console.log(state,'mapstateto porps')
// 	return {
// 	  setLogin: state.reducer.setLogin,
// 	  };
//   };

//   export default connect(mapStateToProps,null)(AuthLoadingScreen);

export default AuthLoadingScreen
