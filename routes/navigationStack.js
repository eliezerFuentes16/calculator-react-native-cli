//import liraries
import React, { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// instancia de la navegacion
const Stack = createStackNavigator();

/// Views
import Home from '../src/views/home/index';
import Notification from '../src/views/notification';
import Explore from '../src/views/explore';
import Plus from '../src/views/plus';
import Profile from '../src/views/profile';

// estilos
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#D6E2FF",
    },
};

// Navegacion del home
const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

// Navegacion de la notificacion
const ExploreStack = () => {
    return (
        <Stack.Navigator initialRouteName="Explore" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

// Navegacion de la plus
const PlusStack = () => {
    return (
        <Stack.Navigator initialRouteName="Plus" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Plus" component={Plus} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

// Navegacion de la notificacion
const NotificationStack = () => {
    return (
        <Stack.Navigator initialRouteName="Notification" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

// Navegacion del perfil
const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}


//make this component available to the app
export { HomeStack, ExploreStack, NotificationStack, ProfileStack, PlusStack };
