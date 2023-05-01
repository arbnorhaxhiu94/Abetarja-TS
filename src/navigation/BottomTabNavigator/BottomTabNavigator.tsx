import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Colors } from "../../assets/Colors";
import { styles } from "./styles";
import { useAppSelector } from "../../store/store";
import Icons from "../../assets/Icons";
import WriteLessonsStackNavigator from "../Stacks/WriteLessonsStack";
import ListenLessonsStackNavigator from "../Stacks/ListenLessonsStack";
import MainLessonsStackNavigator from "../Stacks/MainLessonsStack";

export type BottomTabParamsList = {
    MainLessonStack: undefined
    WriteLessonStack: undefined
    ListenLessonStack: undefined
}

const BottomTabNavigator: FunctionComponent = () => {

    const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

    const DLMode = useAppSelector((state) => state.DLMode);
    const BTV = useAppSelector((state) => state.BottomTab.show);

    const translateY = useRef(new Animated.Value(1));

    const showTabBar = () => {
        Animated.timing(translateY.current, {
            duration: 200,
            toValue: 0,
            useNativeDriver: false
        }).start();
    }

    const hideTabBar = () => {
        Animated.timing(translateY.current, {
            duration: 200,
            toValue: 200,
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        if (BTV === true) showTabBar();
        else hideTabBar();
    }, [BTV]);

    return (
        <BottomTab.Navigator 
            initialRouteName={"MainLessonStack"}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.WHITE,
                tabBarInactiveTintColor: Colors.LIGHT_GRAY,
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    transform: [ { translateY: translateY.current } ]
                },
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarLabel: ""
            }} >
            <BottomTab.Screen 
                name={"WriteLessonStack"} 
                component={WriteLessonsStackNavigator}
                options={{
                    tabBarIcon: ({focused}) => focused ? Icons.PencilFill({color: Colors.WHITE}) : Icons.PencilOutline({color: Colors.GRAY}),
                }} 
            />
            <BottomTab.Screen 
                name={"MainLessonStack"} 
                component={MainLessonsStackNavigator}
                options={{
                    tabBarIcon: ({ color }) =>  Icons.Book({color}),
                    tabBarItemStyle: styles.tabBarOrangeItemStyle,
                    tabBarIconStyle: styles.tabBarIconStyle
                }} 
            />
            <BottomTab.Screen 
                name={"ListenLessonStack"} 
                component={ListenLessonsStackNavigator}
                options={{
                    tabBarIcon: ({focused}) =>  focused ? Icons.VoiceFill() : Icons.VoiceOutline()
                }} 
            />
            
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator;