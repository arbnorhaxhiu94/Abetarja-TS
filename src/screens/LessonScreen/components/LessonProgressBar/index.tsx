import React, { useEffect, useRef } from "react";
import { Animated, Easing, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons from "../../../../assets/Icons";
import CustomStatusBar from "../../../../components/CustomStatusBar";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import { useAppSelector } from "../../../../store/store";
import { styles } from "./styles";

interface LessonProgressBarProps {
    progress: number
    color: Colors
    onClosePress(): void
    hideCloseIcon?: boolean
}

const LessonProgressBar: React.FC<LessonProgressBarProps> = ({
    progress,
    color,
    onClosePress,
    hideCloseIcon = false
}) => {

    const { backgroundColor } = useAppSelector(state => state.DLMode);

    const widthAnimation = new Animated.Value((WINDOW.WIDTH - 20 - 80) * progress);

    return (
        <>
            <CustomStatusBar backgroundColor={[Colors.WHITE, Colors.WHITE]} barStyle={"dark-content"} />
            <View style={styles.container}>
                <TouchableOpacity
                    disabled={hideCloseIcon}
                    activeOpacity={0.9} 
                    style={styles.closeButton} 
                    onPress={onClosePress}>
                    {Icons.Close({ color: hideCloseIcon ? backgroundColor : Colors.GRAY })}
                </TouchableOpacity>
                <View style={styles.progressBarContainer}>
                    <Animated.View style={[
                        styles.progressBar,
                        {
                            backgroundColor: color,
                            width: widthAnimation.interpolate({
                                    inputRange: [0, WINDOW.WIDTH - 20 - 80],
                                    outputRange: [20, WINDOW.WIDTH - 20 - 80],
                                    easing: Easing.ease
                                })
                        }
                    ]} />
                </View>
            </View>
        </>
    )
}

export default LessonProgressBar;