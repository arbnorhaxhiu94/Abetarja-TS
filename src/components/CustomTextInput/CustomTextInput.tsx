import React from "react";
import { KeyboardTypeOptions, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";
import { ReducerStateType } from "../../redux";
import { styles } from "./styles";

interface CustomTextInputProps {
    placeholder: string,
    onChangeText(input: string, field: string): void
    value: any
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
    editable?: boolean
    multiline?: boolean
    numberOfLines?: number
    maxLength?: number
    style?: TextStyle
    containerStyle?: ViewStyle
    rightIcon?: JSX.Element
    leftIcon?: JSX.Element
}

const CustomTextInput = ({
    placeholder,
    onChangeText,
    value,
    keyboardType,
    secureTextEntry,
    autoCapitalize,
    editable,
    multiline,
    numberOfLines,
    maxLength,
    style,
    containerStyle,
    rightIcon,
    leftIcon
}: CustomTextInputProps) => {

    const DLMode = useSelector((state: ReducerStateType) => state.darkLightModeReducer);

    const WIDTH = containerStyle?.width ? 
        typeof(containerStyle.width) === "string" ? 
        parseInt(containerStyle.width) : 
        containerStyle.width : 
        WINDOW.WIDTH - 40;

    const getTextInputWidth = (): number => {
        if (rightIcon && leftIcon) return WIDTH - 80;
        else if (rightIcon && !leftIcon) return WIDTH - 40;
        else if (!rightIcon && leftIcon) return WIDTH - 40;
        else if (WIDTH < 100) return WIDTH;
        else return WIDTH;
    }

    return (
        <View style={[styles.textInputContainer, containerStyle]}>
            {leftIcon &&
                <View style={[styles.textInputIcon, { alignItems: "center" }]} >
                    {leftIcon}
                </View>
            }
            <TextInput 
                style={[
                    styles.textInput, 
                    {
                        borderColor: Colors.LIGHT_GRAY,
                        color: DLMode.textColor,
                        opacity: editable === false ? 0.6 : 1,
                        paddingHorizontal: !leftIcon ? 15 : 0
                    }, 
                    style,
                    {
                        width: getTextInputWidth()
                    }
                ]}
                placeholder={placeholder}
                placeholderTextColor={Colors.GRAY}
                onChangeText={(input) => onChangeText(input, placeholder)}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                editable={editable}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength} />
            {rightIcon &&
                <View style={[styles.textInputIcon, { alignItems: "flex-start" }]} >
                    {rightIcon}
                </View>
            }
        </View>
    )
}

export default CustomTextInput;