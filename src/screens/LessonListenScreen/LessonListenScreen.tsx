import React, { useEffect, useState } from "react";
import { BackHandler, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { WriteLessonsParamsList } from "../../navigation/Stacks/WriteLessonsStack";
import Icons from "../../assets/Icons";
import { Colors } from "../../assets/Colors";
import AnimatedModal from "../../components/AnimatedComponents/AnimatedModal/AnimatedModal";
import Lotties from "../../assets/Lotties";
import { WriteScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import BottomTabActions from "../../store/BottomTab/Actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import LessonListen from "../LessonScreen/components/LessonListen";
import LessonsLocalStorage from "../../config/LocalStorage/LessonsLocalStorage";
import { ListenLessonsParamsList } from "../../navigation/Stacks/ListenLessonsStack";

const LessonListenScreen = () => {

    const { params } = useRoute<RouteProp<ListenLessonsParamsList, "ListenLesson">>();
    const navigation = useNavigation<WriteScreenNavigationType>();

    const dispatch = useAppDispatch();
    const { backgroundColor } = useAppSelector((state) => state.DLMode);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const { id, title, color, data } = params.listenLesson;

    const onNextPress = () => {
        navigation.navigate("LessonCompleted");
        LessonsLocalStorage.addFinishedLesson(id);
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
    }, []);

    return (
        <View style={styles.screen}>
            <Header 
                title={title} />
            <LessonListen 
                isFocused={true} 
                question={data} 
                color={color} 
                onNextPress={onNextPress} />

            <AnimatedModal
                visible={isModalVisible}
                buttonText1={Lotties.Reading(null, styles.modalLottieIcon)}
                buttonText2={Lotties.Sleeping(null, styles.modalLottieIcon)}
                onButtonPress1={() => setIsModalVisible(false)}
                onButtonPress2={() => {
                    navigation.goBack();
                    BottomTabActions.toggleBottomTab(true, dispatch);
                }}
                imageStyle={styles.modalImage}
                buttonStyle1={styles.modalStayButton}
                buttonStyle2={styles.modalExitButton}
                buttonsContainerStyle={{ flexDirection: "column" }}
                containerStyle={styles.modalContainer}
                animationIn={"from-bottom"}
                animationOut={"zoom-out"} />
        </View>
    )
}

export default LessonListenScreen;