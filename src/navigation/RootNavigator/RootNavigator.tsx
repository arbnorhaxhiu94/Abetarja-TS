import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CustomSplashScreen from "../../screens/SplashScreen/SplashScreen";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";

export type RootParamsList = {
    SplashScreen: undefined
    BottomTabNavigator: undefined
}

const RootStack = createNativeStackNavigator<RootParamsList>();

const RootNavigator = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator 
                screenOptions={{
                    headerShown: false,
                    animation: 'fade'
                }}
                initialRouteName={'SplashScreen'} >
                <RootStack.Screen name={'SplashScreen'} component={CustomSplashScreen} />
                <RootStack.Screen name={'BottomTabNavigator'} component={BottomTabNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;