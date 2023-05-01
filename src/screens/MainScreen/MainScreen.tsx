import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useEffect } from "react";
import { FlatList, View } from "react-native";
import { Images } from "../../assets/Images";
import Header from "../../components/Header";
import LessonCard from "../../components/LessonCard";
import { MainLessons } from "../../config/Lessons/MainLessons";
import { MainScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import BottomTabActions from "../../store/BottomTab/Actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { styles } from "./styles";
import { Lesson } from "../../models/Lesson";
import BottomWhiteShadow from "../../components/BottomWhiteShadow";
import FirebaseCloudMessaging from "../../config/Firebase/CloudMessaging";

const MainScreen: FunctionComponent = (): JSX.Element => {

    const navigation = useNavigation<MainScreenNavigationType>();

    const dispatch = useAppDispatch();
    const { backgroundColor } = useAppSelector((state) => state.DLMode);

    const onCardPress = (lesson: Lesson) => {
        BottomTabActions.toggleBottomTab(false, dispatch);
        navigation.navigate("Lesson", { lesson });
    }

    useEffect(() => {
        FirebaseCloudMessaging.listen();
    }, []);

    return (
        <View style={[styles.screen, {backgroundColor}]}>
            <Header title={Images.LOGO} />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={MainLessons}
                renderItem={({item, index}) => (
                    <LessonCard 
                        data={item}
                        onPress={() => onCardPress(item)}
                        style={{ marginBottom: index === MainLessons.length - 1 ? 160 : 0 }} />
                )}
            />
            {/* <BottomWhiteShadow /> */}
        </View>
    )
}

export default MainScreen;