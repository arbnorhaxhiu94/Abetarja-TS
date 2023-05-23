import React, { useRef } from "react";
import { Animated, ColorValue, Pressable, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../assets/Colors";
import { styles } from "./styles";

interface CustomButtonProps {
    buttonText: string | JSX.Element
    onPress(): void
    disabled?: boolean
    textColor?: ColorValue
    backgroundColor?: [any, any]
    shadowColor?: Colors
    shadowStyle?: ViewStyle
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
}

const CustomButton = ({
    buttonText,
    onPress,
    disabled = false,
    textColor,
    backgroundColor,
    shadowColor,
    shadowStyle,
    buttonStyle,
    textStyle
}: CustomButtonProps) => {

    const translateY = useRef(new Animated.Value(0));

    const onPressIn = () => {
        Animated.timing(translateY.current, {
            toValue: 5,
            duration: 20,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            Animated.timing(translateY.current, {
                toValue: 0,
                duration: 40,
                useNativeDriver: true
            }).start();
        }, 40);
    }

    const onLongPress = () => {
        Animated.timing(translateY.current, {
            toValue: 5,
            duration: 10,
            useNativeDriver: true
        }).start();
    }

    const onPressOut = () => {
        Animated.timing(translateY.current, {
            toValue: 0,
            duration: 40,
            useNativeDriver: true
        }).start();
        setTimeout(() => {onPress()}, 40);
    }

    return (
        <Pressable
            disabled={disabled}
            onPress={onPressIn}
            onLongPress={onLongPress}
            onPressOut={onPressOut}
            style={[
                styles.shadow,
                shadowStyle,
                { backgroundColor: shadowColor || shadowStyle?.backgroundColor || disabled ? Colors.GRAY : Colors.RED }
            ]} >
            <Animated.View 
                style={[
                    styles.innerContainer,
                    { transform: [ { translateY: translateY.current } ] }
                ]}>
                <LinearGradient 
                    colors={
                        disabled ? [ Colors.GRAY, Colors.LIGHT_GRAY ] : 
                        backgroundColor ? [ backgroundColor[0], backgroundColor[1] ] : 
                        [ Colors.PURPLE, Colors.RED ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.linearGradientContainer, buttonStyle]} >
                    {typeof(buttonText) === "string" ?
                        <Text 
                            style={[
                                styles.buttonText,
                                textStyle,
                                { color: textColor || textStyle?.color || Colors.WHITE }
                            ]}>
                            {buttonText}
                        </Text>
                    :
                        buttonText
                    }
                </LinearGradient>
            </Animated.View>
        </Pressable>
    )
}

export default CustomButton;