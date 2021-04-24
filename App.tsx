import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './src/reducer';
import AuthLoding from './src/containers/AuthLoding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
