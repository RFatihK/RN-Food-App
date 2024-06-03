import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RHomeScreen from "../../screens/LoginPage/RHomeScreen"
import SignInScreen from "../../screens/LoginPage/SignInScreen";
import ForgotPassword from "../../screens/LoginPage/ForgotPassword";
import RegistrationScreen from "../../screens/LoginPage/RegistrationScreen";
import RootNavigator from './RootNavigator';


const Stack = createStackNavigator();

const LoginRootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />

            <Stack.Screen name="RHomeScreen" component={RHomeScreen} options={{ headerShown: false }} />

            <Stack.Screen name="RootNavigator" component={RootNavigator} options={{ headerShown: false }} />
            
          
            
        </Stack.Navigator>
    );
}

export default LoginRootNavigation;
