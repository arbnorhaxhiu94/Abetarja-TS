import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LessonWriteListScreen from "../../screens/LessonWriteListScreen/LessonWriteListScreen";
import { ListenLesson } from "../../models/ListenLesson";
import LessonCompletedScreen from "../../screens/LessonCompletedScreen/LessonCompletedScreen";
import LessonListenScreen from "../../screens/LessonListenScreen/LessonListenScreen";
import LessonListenListScreen from "../../screens/LessonListenListScreen/LessonListenListScreen";

export type ListenLessonsParamsList = {
    ListenLessonsList: undefined
    ListenLesson: { listenLesson: ListenLesson }
    LessonCompleted: undefined
}

const ListenLessonsStack = createNativeStackNavigator<ListenLessonsParamsList>();

const ListenLessonsStackNavigator: React.FC = () => {
    return (
        <ListenLessonsStack.Navigator 
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
                animation: "slide_from_right"
            }} >
            <ListenLessonsStack.Screen name={"ListenLessonsList"} component={LessonListenListScreen} />
            <ListenLessonsStack.Screen name={"ListenLesson"} component={LessonListenScreen} />
            <ListenLessonsStack.Screen name={"LessonCompleted"} component={LessonCompletedScreen} />
        </ListenLessonsStack.Navigator>
    );
}

export default ListenLessonsStackNavigator;