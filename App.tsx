import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import SignUp from './src/SignUp';
import AuthLoadingScreen from './src/AuthLoadingScreen'
import Main from './src/Main'
import { AsyncStorage } from 'react-native';
import {AppProps, AppState} from './src/reducer/type'
// import { Provider } from 'react-redux';
const Stack = createStackNavigator();
//리덕스를 이용해서 dispatch해서 islogin의 값이 변할때마다 업데이트
class App extends Component<AppProps, AppState> {
	constructor(props:AppProps) {
		super(props)
		this.state = {
			token: ''
		}
	}
	componentDidMount() {
		this.getUserToken()
		console.log(this.props,'value')
	}



	getUserToken = async () => {
		try{
		  const value = await AsyncStorage.getItem('USERTOKEN')
		  this.setState({
			token: value
		  })
	    }catch(error) {
		console.log(error)
	    }
	}
	render(){
		const value = this.state.token
		console.log(value)
	return (
	  <NavigationContainer>
		<Stack.Navigator>
		  {value === null? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
		      <Stack.Screen name="Main" component={Main} />
		  )}
        </Stack.Navigator>
	  </NavigationContainer>
	);
}
}
export default App;





// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/Login';
// import SignUp from './src/SignUp';
// import AuthLoadingScreen from './src/AuthLoadingScreen'
// import Main from './src/Main'
// import { AsyncStorage } from 'react-native';
// import {AppProps, AppState} from './src/reducer/type'
// const Stack = createStackNavigator();

// class App extends Component<AppProps, AppState> {
// 	constructor(props:AppProps) {
// 		super(props)
// 		this.state = {
// 			token: ''
// 		}
// 	}
// 	componentDidMount() {
// 		this.getUserToken()
// 		console.log(this.props,'value')
// 	}



// 	getUserToken = async () => {
// 		try{
// 		  const value = await AsyncStorage.getItem('USERTOKEN')
// 		  this.setState({
// 			token: value
// 		  })
// 	    }catch(error) {
// 		console.log(error)
// 	    }
// 	}
// 	render(){
// 		const value = this.state.token
// 		console.log(value)
// 	return (
// 	  <NavigationContainer>
// 		<Stack.Navigator>
// 		  {value === null? (
//             <>
//               <Stack.Screen name="Login" component={Login} />
//               <Stack.Screen name="SignUp" component={SignUp} />
//             </>
//           ) : (
// 		      <Stack.Screen name="Main" component={Main} />
// 		  )}
//         </Stack.Navigator>
// 	  </NavigationContainer>
// 	);
// }
// }
// export default App;

