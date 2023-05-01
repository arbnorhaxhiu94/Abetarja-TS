import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { FlatList, View } from "react-native";
import { Images } from "../../assets/Images";
import Header from "../../components/Header";
import BottomTabActions from "../../store/BottomTab/Actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { styles } from "./styles";
import BottomWhiteShadow from "../../components/BottomWhiteShadow";
import { ListenLessons } from "../../config/Lessons/ListenLesson";
import { ListenLesson } from "../../models/ListenLesson";
import LessonListenCard from "../../components/LessonListenCard";
import { ListenScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import Icons from "../../assets/Icons";
import { Colors } from "../../assets/Colors";

const LessonListenListScreen: FunctionComponent = (): JSX.Element => {

    const navigation = useNavigation<ListenScreenNavigationType>();

    const dispatch = useAppDispatch();
    const { backgroundColor } = useAppSelector((state) => state.DLMode);

    const onCardPress = (listenLesson: ListenLesson) => {
        BottomTabActions.toggleBottomTab(false, dispatch);
        navigation.navigate("ListenLesson", { listenLesson });
    }

    return (
        <View style={[styles.screen, {backgroundColor}]}>
            <Header
                title={Images.VOICE_FILL} />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={ListenLessons}
                numColumns={2}
                renderItem={({item, index}) => (
                    <LessonListenCard 
                        data={item}
                        onPress={() => onCardPress(item)}
                        style={{ marginBottom: index === ListenLessons.length - 1 ? 160 : 0 }} />
                )}
            />
            {/* <BottomWhiteShadow /> */}
        </View>
    )
}

export default LessonListenListScreen;