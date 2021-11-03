import React, {useEffect} from 'react';
import {Button, Text} from "react-native-elements";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";

import Home from "./Components/Home/Home";
import Show from "./Components/News/Show";
import {createStackNavigator} from "@react-navigation/stack";

export default function Routes(){
    const Stack = createStackNavigator();
        return    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" headerTitle={'LivePress'} component={Home} />
                <Stack.Screen name="Show" component={Show} />
            </Stack.Navigator>
        </NavigationContainer>

}
