// app/_layout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

import LoginScreen from './LoginScreen'; 

const Stack = createNativeStackNavigator();

const AppLayout = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">  //para cambiar entre la pantalla principal o el login
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                
                {/* mas pantallas aqui */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppLayout;
