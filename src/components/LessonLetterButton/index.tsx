import React from "react";
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "../../assets/Colors";
import Lotties from "../../assets/Lotties";
import CustomText from "../CustomText";
import { styles } from "./styles";

interface LessonLetterButtonProps {
    type?: "1" | "2"
    isCorrectAnswer: boolean | null
    question: string
    color: Colors
    isDisabled: boolean
    onPress(): void
    checkIcon?: "small" | "large" | "right"
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
}

const LessonLetterButton: React.FC<LessonLetterButtonProps> = ({
    type = "1",
    isCorrectAnswer,
    question,
    color,
    isDisabled,
    onPress,
    checkIcon = "large",
    buttonStyle,
    textStyle
}) => {

    const getColor = (): Colors => {
        if (isCorrectAnswer === true) return Colors.WHITE;
        else if (isCorrectAnswer === false) return Colors.WHITE;
        else if (isDisabled) return type === "2" ? Colors.GRAY : Colors.WHITE;
        else return color;
    }

    const getBackgroundColor = (): Colors => {
        if (isCorrectAnswer === true) return type === "1" ? Colors.GREEN : Colors.WHITE;
        else if (isCorrectAnswer === false) return Colors.RED;
        else if (isDisabled) return type === "2" ? Colors.WHITE : Colors.RED; 
        else return Colors.WHITE;
    }

    const getIconStyle = (): ViewStyle => {
        if (checkIcon === "large") return styles.checkIconLarge;
        else if (checkIcon === "small") return styles.checkIconSmall;
        else return styles.checkIconRight;
    }

    return (
        <TouchableOpacity
            disabled={isDisabled}
            activeOpacity={0.9}
            onPress={onPress}
            style={[
                styles.letterContainer,
                {
                    borderColor: getColor(),
                    shadowColor: getColor(),
                    backgroundColor: getBackgroundColor()
                },
                buttonStyle
            ]}>
            <CustomText
                text={question}
                color={getColor()}
                style={{...styles.letter, ...textStyle}} 
            />
            {isCorrectAnswer && Lotties.Check(undefined, getIconStyle())}
        </TouchableOpacity>
    )
}

export default LessonLetterButton;