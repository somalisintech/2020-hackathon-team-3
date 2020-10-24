import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEllipsisH, faInfoCircle, faCog } from '@fortawesome/free-solid-svg-icons';

import { Navigator, BottomTabNav } from './src/navigation/Navigator';

const App = () => {

	library.add(faEllipsisH, faBell, faCog);
	Icon.loadFont();

	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
};


export default App;
