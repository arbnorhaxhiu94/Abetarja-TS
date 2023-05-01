import React from "react";
import { ActivityIndicator, Easing, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../assets/Colors";
import { LanguageType } from "../../models/Language";
import { ReducerStateType } from "../../redux";
import { DarkLightModeStateType } from "../../redux/reducers/DarkLightMode/DarkLightModeReducer";
import AnimatedText from "../AnimatedComponents/AnimatedText";
import { styles } from "./styles";

const LoadingView = () => {

    const language: LanguageType = useSelector((state: ReducerStateType) => state.languageReducer);
    const darkLightMode: DarkLightModeStateType = useSelector((state: ReducerStateType) => state.darkLightModeReducer);

    return (
        <View 
            style={styles(darkLightMode.backgroundColor).screen}>
            <ActivityIndicator 
                size={30}
                color={Colors.GREEN_BLUE} />
            <AnimatedText 
                text={language.LOADING+'...'}
                playAnimation={true}
                animationType={'Wave'}
                waveAnimationSpeed={6}
                animations={{
                    translateY: {
                        value: -12,
                        easing: Easing.ease
                    },
                    rotateY: {
                        degree: 360
                    },
                    color: {
                        colors: [Colors.PURPLE, Colors.PURPLE, Colors.RED],
                        keepColor: 1
                    }
                }}
                repeat={true}
                duration={1000}
                textStyle={styles(darkLightMode.backgroundColor).text} />
        </View>
    );
}

export default LoadingView;