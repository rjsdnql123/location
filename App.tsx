import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import AuthLoadingScreen from './src/components/AuthLoadingScreen'
import Main from './src/components/Main'
import { AsyncStorage } from 'react-native';
import {AppProps, AppState} from './src/reducer/type'
import { Provider, connect } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './src/reducer';
import AuthLoding from './src/containers/AuthLoding';
// import store from './src/reducer/index'
const Stack = createStackNavigator();

// redux 데이툴을 이용하기 위한 코드
declare global {
	interface Window {
	  devToolsExtension: typeof compose;
	}
  }
const store = createStore(
	rootReducer,
	window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  );

  
//리덕스를 이용해서 dispatch해서 islogin의 값이 변할때마다 업데이트
  function App() {
	return (
		<Provider store={store}>
	      <NavigationContainer>
		    <AuthLoding/>
	      </NavigationContainer>
		</Provider>
		);	
  }

export default App


// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/Login';
// import SignUp from './src/SignUp';
// import AuthLoadingScreen from './src/AuthLoadingScreen'
// import Main from './src/Main'
// import { AsyncStorage } from 'react-native';
// import {AppProps, AppState} from './src/reducer/type'
// import { Provider, connect } from 'react-redux';
// import { createStore, compose } from 'redux';
// import rootReducer from './src/reducer';
// // import store from './src/reducer/index'
// const Stack = createStackNavigator();

// // redux 데이툴을 이용하기 위한 코드
// declare global {
// 	interface Window {
// 	  devToolsExtension: typeof compose;
// 	}
//   }
// const store = createStore(
// 	rootReducer,
// 	window.devToolsExtension ? window.devToolsExtension() : (f) => f,
//   );

  
// //리덕스를 이용해서 dispatch해서 islogin의 값이 변할때마다 업데이트
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
// 		console.log(this.props,'props')
// 		const value = this.state.token
// 	return (
// 		<Provider store={store}>
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
// </Provider>
// 	);
// }
// }

// // const mapStateToProps = (state) => {
// // 	console.log(state)
// // 	return {
// // 	  setLogin: true,
// // 	};
// //   };

// //   export default connect(mapStateToProps)(App);


// // export default App


