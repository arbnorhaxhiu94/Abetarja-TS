import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { BackHandler, FlatList, View } from "react-native";
import AnimatedModal from "../../components/AnimatedComponents/AnimatedModal";
import Question from "../../models/Question";
import { MainScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import BottomTabActions from "../../store/BottomTab/Actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import LessonItem from "./components/LessonItem";
import LessonProgressBar from "./components/LessonProgressBar";
import { styles } from "./styles";
import LessonsLocalStorage from "../../config/LocalStorage/LessonsLocalStorage";
import Lotties from "../../assets/Lotties";
import { MainLessonsParamsList } from "../../navigation/Stacks/MainLessonsStack";

const LessonScreen: FunctionComponent = (): JSX.Element => {

    const { params } = useRoute<RouteProp<MainLessonsParamsList, "Lesson">>();
    const navigation = useNavigation<MainScreenNavigationType>();

    const dispatch = useAppDispatch();
    const { backgroundColor } = useAppSelector((state) => state.DLMode);

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    let listRef = useRef<FlatList<Question> | null>(null).current;

    const { id, questions, color } = params.lesson;

    const onNextPress = (index: number) => {
        if (index === questions.length - 1) {
            navigation.navigate("LessonCompleted");
            LessonsLocalStorage.addFinishedLesson(id);
        } else {
            listRef?.scrollToIndex({ index: index + 1, animated: true });
            setActiveIndex(index + 1);
        }
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
    }, []);

    return (
        <View style={[styles.screen, { backgroundColor }]}>
            <LessonProgressBar
                progress={(activeIndex + 1) / questions.length}
                color={color}
                hideCloseIcon={activeIndex === questions.length - 1}
                onClosePress={() => setIsModalVisible(true)} />
            <FlatList
                ref={ref => listRef = ref}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={questions}
                // onMomentumScrollEnd={(e) => { setActiveIndex(Math.round(e.nativeEvent.contentOffset.x / WINDOW.WIDTH)) }}
                renderItem={({ item, index }) => (
                    <LessonItem
                        isFocused={index === activeIndex}
                        question={item}
                        color={color}
                        onNextPress={() => onNextPress(index)} />
                )}
            />

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

export default LessonScreen;