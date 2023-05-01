import React, { FunctionComponent, memo, useEffect, useState } from "react";
import {  Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "../../assets/Colors";
import { styles } from "./styles";
import { Lesson } from "../../models/Lesson";
import LessonsLocalStorage from "../../config/LocalStorage/LessonsLocalStorage";
import LinearGradient from "react-native-linear-gradient";
import { useIsFocused } from "@react-navigation/native";
import Lotties from "../../assets/Lotties";

interface LessonCardProps {
    data: Lesson
    onPress(): void
    style?: ViewStyle
}

const LessonCard: FunctionComponent<LessonCardProps> = memo(({
    data,
    onPress,
    style
}) => {

    let { id, title, color, row1, row2, row3 } = data;

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
        <TouchableOpacity
            activeOpacity={0.95}
            style={{ 
                ...styles.container, 
                shadowColor: textColor,
                ...style
            }}
            onPress={onPress}>
            <LinearGradient 
                colors={backgroundColor}
                style={styles.linearGradient} >
                <View style={[styles.titleContainer, {borderColor: textColor, shadowColor: textColor}]}>
                    <Text style={[styles.titleText, {color: textColor, fontSize: title.length > 4 ? 36 : 60}]}>{title}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.contentText]}>{row1}</Text>
                    <Text style={[styles.contentText]}>{row2}</Text>
                    <Text style={[styles.contentText]}>{row3}</Text>
                </View>
            </LinearGradient>
            {showRibbon && Lotties.Ribbon(null, styles.ribbon)}
        </TouchableOpacity>
    )
});

export default LessonCard;