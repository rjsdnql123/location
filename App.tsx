import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AuthLoding from './src/containers/AuthLoding';
import store from './src/feature/store';

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
