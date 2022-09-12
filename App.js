//import liraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack, ExploreStack, PlusStack, NotificationStack, ProfileStack  } from './routes/navigationStack';


// componentes
import ButtonDesign from './src/components/button';

// instancia de navigator
const Tab = createBottomTabNavigator();

// Tema de la app
const Theme = {
  dark: false,
  colors: {
    blanco: 'white',
  },
};

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <ButtonDesign
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
    );
}

// create a component
const App = () => {
    return (
      <NavigationContainer theme={Theme} >
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName="Home_tab" tabBarActiveTintColor="#e33117">
            <Tab.Screen
                name="Home_tab"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    icono: 'home',
                    iconUse:true
                }}
            />
            <Tab.Screen
                name="Explore_tab"
                component={ExploreStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Explorar',
                    icono: 'binoculars',
                    iconUse:true
                }}
            />
            <Tab.Screen
                name="Plus_tab"
                component={PlusStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Plus',
                    icono: 'plus',
                    iconUse:false
                }}
            />
            <Tab.Screen
                name="Calendar_tab"
                component={NotificationStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Notificaciones',
                    icono: 'bell',
                    iconUse:true
                }}
            />
            <Tab.Screen
                name="Profile_tab"
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Perfil',
                    icono: 'user',
                    iconUse:true
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
};


//make this component available to the app
export default App;
