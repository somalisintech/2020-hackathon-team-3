import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen, { screenOptions as homeScreenOptions } from '../screens/HomeScreen';
import NewsScreen, { screenOptions as newsScreenOptions } from '../screens/NewsScreen';


const StackNavigator = createStackNavigator();

export const Navigator = () => {
    return (
        <StackNavigator.Navigator screenOptions={navOptions}>
            <StackNavigator.Screen name="Home" component={HomeScreen} options={homeScreenOptions} />
            <StackNavigator.Screen name="News" component={NewsScreen} options={newsScreenOptions} />

        </StackNavigator.Navigator>
    );
};

// const BottomTabNavigator = createBottomTabNavigator();

// export const BottomTabNav = () => {
//     return (
//         <BottomTabNavigator.Navigator screenOptions={navOptions}>
//             <BottomTabNavigator.Screen name="Main" component={StackNavigator} options={homeScreenOptions} />
//         </BottomTabNavigator.Navigator>
//     );
// };



const navOptions = {
    headerTitleStyle: {

    },
    headerStyle: {

    },

    headerBackTitleStyle: {

    },
    headerBackTitleVisible: false,

};