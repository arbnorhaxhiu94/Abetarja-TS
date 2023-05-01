import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { FlatList, View } from "react-native";
import { Images } from "../../assets/Images";
import Header from "../../components/Header";
import { MainScreenNavigationType, WriteScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import BottomTabActions from "../../store/BottomTab/Actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { styles } from "./styles";
import BottomWhiteShadow from "../../components/BottomWhiteShadow";
import { WriteLessons } from "../../config/Lessons/WriteLessons";
import { WriteLesson } from "../../models/WriteLesson";
import LessonWriteCard from "../../components/LessonWriteCard";
import Icons from "../../assets/Icons";
import { Colors } from "../../assets/Colors";

const LessonWriteListScreen: FunctionComponent = (): JSX.Element => {

    const navigation = useNavigation<WriteScreenNavigationType>();

    const dispatch = useAppDispatch();
    const { backgroundColor } = useAppSelector((state) => state.DLMode);

    const onCardPress = (writeLesson: WriteLesson) => {
        BottomTabActions.toggleBottomTab(false, dispatch);
        navigation.navigate("WriteLesson", { writeLesson });
    }

    return (
        <View style={[styles.screen, {backgroundColor}]}>
            <Header 
                titleIcon={Icons.PencilFill({ color: Colors.WHITE, size: 30 })} />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={WriteLessons}
                numColumns={2}
                renderItem={({item, index}) => (
                    <LessonWriteCard 
                        data={item}
                        onPress={() => onCardPress(item)}
                        style={{ marginBottom: index === WriteLessons.length - 1 ? 160 : 0 }} />
                )}
            />
            {/* <BottomWhiteShadow /> */}
        </View>
    )
}

export default LessonWriteListScreen;