import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileSelectionScreen from './ProfileSelectionScreen';


const Stack = createNativeStackNavigator();

const AppLayout = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ProfileSelectionScreen" component={ProfileSelectionScreen} />

            {/* más pantallas aquí */}
        </Stack.Navigator>
    );
};

export default AppLayout;
