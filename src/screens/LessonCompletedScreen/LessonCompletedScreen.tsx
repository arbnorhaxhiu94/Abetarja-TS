import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Colors } from "../../assets/Colors";
import Icons from "../../assets/Icons";
import { Images } from "../../assets/Images";
import Lotties from "../../assets/Lotties";
import CustomButton from "../../components/CustomButton";
import { LinearGradientText } from 'react-native-linear-gradient-text';
import IphoneType from "../../config/IsIphoneX/IphoneType";
import { MainScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import BottomTabActions from "../../store/BottomTab/Actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { styles } from "./styles";
import SoundPlayerListener from "../../config/SoundPlayerListener/SoundPlayerListener";

const LessonCompletedScreen: React.FC = () => {

    const navigation = useNavigation<MainScreenNavigationType>();

    const dispatch = useAppDispatch();
    const { backgroundColor } = useAppSelector(state => state.DLMode);

    const [index, setIndex] = useState<number | null>(null);

    const CongratulationsText = ["Urimeeee", "Bravooo", "Gëzuaaar"]

    const LottieAnimations = [
        [Lotties.ConffetiCircle(), Lotties.PeachesBalloon()],
        [Lotties.ConfettiExplode(), Lotties.GiraffeCycling()],
        [Lotties.PeachesBalloon(), Lotties.ConfettiExplode()]
    ];

    const onButtonPress = () => {
        BottomTabActions.toggleBottomTab(true, dispatch);
        navigation.pop(2);
    }

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 3);
        setIndex(randomNumber);
        SoundPlayerListener.add();
        SoundPlayerListener.playLessonCompletedSound();
        return () => { SoundPlayerListener.remove(); }
    }, []);

    return (
        <View style={[styles.screen, { backgroundColor }]}>
            <LinearGradientText
                colors={[Colors.PURPLE, Colors.RED]}
                text={index !== null ? CongratulationsText[index] : ""}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.9, y: 0 }}
                textStyle={styles.congratsText}
            />
            <View style={styles.view}>
                {index !== null && LottieAnimations[index][0]}
                {index !== null && LottieAnimations[index][1]}
                <CustomButton
                    buttonText={Icons.ArrowRight({ color: Colors.WHITE })}
                    onPress={onButtonPress}
                    shadowStyle={styles.button} />
            </View>
        </View>
    )
}

export default LessonCompletedScreen;