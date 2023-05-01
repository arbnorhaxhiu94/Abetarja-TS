import React from "react";
import { View } from "react-native";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";
import CustomText from "../CustomText";
import { styles } from "./styles";

interface LessonLetterContainerProps {
    index: number
    letter: string
    color: Colors
    size: "normal" | "small"
}

const LessonLetterContainer: React.FC<LessonLetterContainerProps> = ({
    index,
    letter,
    color,
    size = "normal"
}) => {

    const width = size === "normal" ? 30 : 20;
    const height = size === "normal" ? 30 : 24;
    const fontSize = size === "normal" ? 24 : 18;

    return letter === " " ? (
        <View style={{ height: 5, width: index > 7 ? WINDOW.WIDTH : 10 }} />
    ) : (
        <View style={[styles.container, {width, height}]}>
            <CustomText 
                text={letter}
                color={color}
                style={{...styles.letter, fontSize }} />
        </View>
    )
}

export default LessonLetterContainer;