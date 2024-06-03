import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, TouchableOpacity, View, StatusBar, SafeAreaView } from "react-native";
import { Entypo, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from '../../store';

import { Colors } from '../../constants';
import HomeScreen from "../../screens/InAppPage/HomeScreen";
import MainScreen from "../../screens/InAppPage/MainScreen";
import MapsScreen from "../../screens/InAppPage/MapsScreen";
import ProfileScreen from "../../screens/InAppPage/ProfileScreen";
import SearchScreen from "../../screens/InAppPage/SearchScreen";
import RestaurantListScreen from "../../screens/InAppPage/RestaurantListScreen";
import RestaurantHomeScreen from "../../screens/InAppPage/RestaurantHomeScreen";
import WeatherScreen from "../../screens/InAppPage/WeatherScreen";
import Basket from '../../screens/InAppPage/Basket';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const { height, width } = Dimensions.get("window");

function MainTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: { height: height * 0.073, },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    tabBarButton: ({ onPress }) => (
                        <TouchableOpacity
                            onPress={onPress}
                            style={{
                                borderColor: "white",
                                borderWidth: 2,
                                borderRadius: 32,
                                justifyContent: "center",
                                marginTop: -25,
                                alignItems: "center",
                                backgroundColor: "#5C3EBC",
                                width: width * 0.17,
                                height: width * 0.17,
                            }}
                        >
                            <Entypo name="list" size={32} color={Colors.GETIR_YELLOW} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Maps"
                component={MapsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="map-marked-alt" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function RootNavigator() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.GETIR_PURPLE }}  >
            <StatusBar barStyle="light-content" backgroundColor={Colors.GETIR_PURPLE} translucent={false} />
            <Stack.Navigator options={{ headerShown: false }}  >
                <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="RestaurantHomeScreen" component={RestaurantHomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RestaurantListScreen" component={RestaurantListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Basket" component={props => (
                    <Provider store={store}>
                        <Basket {...props} />
                    </Provider>
                )} options={{ headerShown: false }} />

            </Stack.Navigator>
        </SafeAreaView>
    );
}

export default RootNavigator;
