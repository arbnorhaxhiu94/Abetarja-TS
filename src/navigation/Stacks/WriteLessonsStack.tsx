import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LessonWriteListScreen from "../../screens/LessonWriteListScreen/LessonWriteListScreen";
import LessonWriteScreen from "../../screens/LessonWriteScreen/LessonWriteScreen";
import { WriteLesson } from "../../models/WriteLesson";
import LessonCompletedScreen from "../../screens/LessonCompletedScreen/LessonCompletedScreen";

export type WriteLessonsParamsList = {
    WriteLessonsList: undefined
    WriteLesson: { writeLesson: WriteLesson }
    LessonCompleted: undefined
}

const WriteLessonsStack = createNativeStackNavigator<WriteLessonsParamsList>();

const WriteLessonsStackNavigator: React.FC = () => {
    return (
        <WriteLessonsStack.Navigator 
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
                animation: "slide_from_right"
            }} >
            <WriteLessonsStack.Screen name={"WriteLessonsList"} component={LessonWriteListScreen} />
            <WriteLessonsStack.Screen name={"WriteLesson"} component={LessonWriteScreen} />
            <WriteLessonsStack.Screen name={"LessonCompleted"} component={LessonCompletedScreen} />
        </WriteLessonsStack.Navigator>
    );
}

export default WriteLessonsStackNavigator;