import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
	const Stack = createStackNavigator();

	return(
		<NavigationContainer >
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Incidents" component={Incidents} />
				<Stack.Screen name="Detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}