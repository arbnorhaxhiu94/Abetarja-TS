import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamsList } from "../RootNavigator/RootNavigator";
import { MainLessonsParamsList } from "../Stacks/MainLessonsStack";
import { WriteLessonsParamsList } from "../Stacks/WriteLessonsStack";
import { ListenLessonsParamsList } from "../Stacks/ListenLessonsStack";

export type SplashScreenNavigationType = NativeStackNavigationProp<RootParamsList, 'SplashScreen'>;
export type BottomNavigationNavigationType = NativeStackNavigationProp<RootParamsList, "BottomTabNavigator">;

export type MainScreenNavigationType = NativeStackNavigationProp<MainLessonsParamsList, "Main">;

export type WriteScreenNavigationType = NativeStackNavigationProp<WriteLessonsParamsList, "WriteLessonsList">;

export type ListenScreenNavigationType = NativeStackNavigationProp<ListenLessonsParamsList, "ListenLessonsList">;
