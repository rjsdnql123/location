import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AuthLoadingScreen from './components/AuthLoadingScreen';
import Main from './components/Main';
import { AsyncStorage } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducer';
import AuthLoding from './containers/AuthLoding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import store from './src/reducer/index'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// redux 데이툴을 이용하기 위한 코드
declare global {
	interface Window {
		devToolsExtension: typeof compose;
	}
}
const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : (f) => f);

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AuthLoding />
			</NavigationContainer>
		</Provider>
	);
}

export default App;
