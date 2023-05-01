import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LessonCompletedScreen from "../../screens/LessonCompletedScreen";
import LessonScreen from "../../screens/LessonScreen";
import MainScreen from "../../screens/MainScreen";
import { Lesson } from "../../models/Lesson";

export type MainLessonsParamsList = {
    Main: undefined
    Lesson: { lesson: Lesson }
    LessonCompleted: undefined
}

const MainLessonsStack = createNativeStackNavigator<MainLessonsParamsList>();

const MainLessonsStackNavigator: React.FC = () => {
    return (
        <MainLessonsStack.Navigator 
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
                animation: "slide_from_right"
            }}
            initialRouteName={"Main"} >
            <MainLessonsStack.Screen name={"Main"} component={MainScreen} />
            <MainLessonsStack.Screen name={"Lesson"} component={LessonScreen} />
            <MainLessonsStack.Screen name={"LessonCompleted"} component={LessonCompletedScreen} />
        </MainLessonsStack.Navigator>
    );
}

export default MainLessonsStackNavigator;