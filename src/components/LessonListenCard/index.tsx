import React, { FunctionComponent, memo, useEffect, useState } from "react";
import {  Pressable, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "../../assets/Colors";
import { styles } from "./styles";
import LessonsLocalStorage from "../../config/LocalStorage/LessonsLocalStorage";
import LinearGradient from "react-native-linear-gradient";
import { useIsFocused } from "@react-navigation/native";
import Lotties from "../../assets/Lotties";
import { WriteLesson } from "../../models/WriteLesson";
import Icons from "../../assets/Icons";

interface LessonListenCardProps {
    data: WriteLesson
    onPress(): void
    style?: ViewStyle
}

const LessonListenCard: FunctionComponent<LessonListenCardProps> = memo(({
    data,
    onPress,
    style
}) => {

    let { id, title, color } = data;

    const isFocused = useIsFocused();

    const [ backgroundColor, setBackgroundColor ] = useState<[Colors, Colors]>([color, color]);
    const [ textColor, setTextColor ] = useState<Colors>(color);
    const [ showRibbon, setShowRibbon ] = useState<boolean>(false);

    const checkIfIsFinished = async() => {
        if (await LessonsLocalStorage.isLessonFinished(id)) {
            setTextColor(Colors.ORANGE);
            setBackgroundColor(() => [Colors.YELLOW, Colors.ORANGE]);
            setShowRibbon(true);
        }
    }

    useEffect(() => {
        if (isFocused) checkIfIsFinished();
    }, [isFocused]);

    return (
        <Pressable
            // activeOpacity={0.95}
            style={{ 
                ...styles.container, 
                shadowColor: textColor,
                ...style
            }}
            onPress={onPress}>
            <LinearGradient 
                colors={backgroundColor}
                style={styles.linearGradient} >
                    {Icons.Voice({style: styles.imageBackground, color: textColor, size: 150})}
                <View style={[styles.titleContainer, {borderColor: textColor, shadowColor: textColor}]}>
                    <Text style={[styles.titleText, {color: textColor, fontSize: title.length > 4 ? 36 : 60}]}>{title}</Text>
                </View>
                {/* {Icons.Voice({style: styles.voiceIcon, color: textColor})} */}
            </LinearGradient>
            {showRibbon && Lotties.Ribbon(null, styles.ribbon)}
        </Pressable>
    )
});

export default LessonListenCard;