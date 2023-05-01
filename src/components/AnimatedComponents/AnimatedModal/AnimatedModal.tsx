import { useIsFocused } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Image, ImageStyle, Modal, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { Colors } from "../../../assets/Colors";
import { SCREEN } from "../../../config/Constants/ScreenDimensions";
import { useAppSelector } from "../../../store/store";
import CustomButton from "../../CustomButton";
import CustomText from "../../CustomText";
import { styles } from "./styles";

interface AnimatedModalProps {
    title?: string | undefined
    message?: string
    buttonText1?: string | JSX.Element
    buttonText2?: string | JSX.Element
    image?: any
    icon?: JSX.Element
    visible?: boolean
    transparent?: boolean
    onRequestClose?(): void
    onButtonPress1?(): void
    onButtonPress2?(): void
    onOutOfPopupPress?(): void
    dontHideAtFirstPress?: boolean
    modalStyle?: ViewStyle
    containerStyle?: ViewStyle
    titleStyle?: TextStyle
    messageStyle?: TextStyle
    buttonsContainerStyle?: ViewStyle
    buttonStyle1?: ViewStyle
    buttonTextStyle1?: TextStyle
    buttonStyle2?: ViewStyle
    buttonTextStyle2?: TextStyle
    imageStyle?: ImageStyle
    spacingBetweenElements?: number
    animationIn?: "from-top" | "from-bottom" | "from-left" | "from-right" | "zoom-in" | "fade-in"
    animationOut?: "to-top" | "to-bottom" | "to-left" | "to-right" | "zoom-out" | "fade-out"
    additionalContentBetweenTextAndButtons?: JSX.Element
}

const AnimatedModal: FunctionComponent<AnimatedModalProps> = ({
    title,
    message,
    buttonText1,
    buttonText2,
    image,
    icon,
    visible = true,
    transparent = true,
    onRequestClose,
    onButtonPress1,
    onButtonPress2,
    onOutOfPopupPress,
    dontHideAtFirstPress,
    modalStyle,
    containerStyle,
    titleStyle,
    messageStyle,
    buttonsContainerStyle,
    buttonStyle1,
    buttonTextStyle1,
    buttonStyle2,
    buttonTextStyle2,
    imageStyle,
    spacingBetweenElements = 10,
    animationIn,
    animationOut,
    additionalContentBetweenTextAndButtons
}) => {

    const DLMode = useAppSelector((state) => state.DLMode);

    const [ show, setShow ] = useState(visible);

    let initialVPosition = 0;
    let finalVPosition = 0;
    let initialHPosition = 0;
    let finalHPosition = 0;

    let translateY = useSharedValue(0);
    let translateX = useSharedValue(0);
    let scale = useSharedValue(animationIn == "zoom-in" ? 0 : 1);
    let opacity = useSharedValue(animationIn == "fade-in" ? 0 : 1);

    const setPopupPositions = () => {
        initialVPosition = animationIn == "from-top" ? -SCREEN.HEIGHT : animationIn == "from-bottom" ? SCREEN.HEIGHT : 0;
        finalVPosition = animationOut == "to-top" ? -SCREEN.HEIGHT : animationOut == "to-bottom" ? SCREEN.HEIGHT : 0;
        initialHPosition = animationIn == "from-left" ? -SCREEN.WIDTH : animationIn == "from-right" ? SCREEN.WIDTH : 0;
        finalHPosition = animationOut == "to-left" ? -SCREEN.WIDTH : animationOut == "to-right" ? SCREEN.WIDTH : 0;
        translateY.value = initialVPosition;
        translateX.value = initialHPosition;
    }

    const showPopup = () => {
        translateY.value = withTiming(0, {
            duration: 500
        });
        translateX.value = withTiming(0, {
            duration: 500
        });
        scale.value = withSpring(1);
        opacity.value = withTiming(1, {
            duration: 500
        });
    }

    const hidePopup = () => {
        translateY.value = withTiming(finalVPosition, {
            duration: 500
        });
        translateX.value = withTiming(finalHPosition, {
            duration: 500
        });
        scale.value = withTiming(animationOut == "zoom-out" ? 0 : 1, {
            duration: 500
        });
        opacity.value = withTiming(animationOut == "fade-out" ? 0 : 1, {
            duration: 500
        });
    }

    const resetValues = () => {
        translateY.value = 0;
        translateX.value = 0;
        scale.value = animationIn == "zoom-in" ? 0 : 1;
        opacity.value = animationIn == "fade-in" ? 0 : 1;
    }

    useEffect(() => {
        if (!visible) {
            hidePopup();
            setTimeout(() => {
                setShow(false);
                resetValues();
            }, 500);
        } else {
            setShow(true);
            setPopupPositions();
            showPopup();
        }
    }, [visible]);

    return (
        <Modal 
            visible={show}
            transparent={transparent}
            animationType={'fade'}
            onRequestClose={() => {
                if (onRequestClose) onRequestClose();
                else return;
            }}>
            <View 
                style={[
                    styles.screen, 
                    modalStyle, {
                        backgroundColor: modalStyle?.backgroundColor || Colors.TRANSPARENT_SHADOW_5
                    }
                ]} >
                <TouchableWithoutFeedback 
                    onPress={onOutOfPopupPress} >
                    <View style={{ flex: 1, width: '100%' }} />
                </TouchableWithoutFeedback>
                <Animated.View style={[
                    containerStyle, {
                        width: containerStyle?.width || SCREEN.WIDTH-40,
                        paddingTop: containerStyle?.paddingTop ? containerStyle.paddingTop : 20,
                        backgroundColor: containerStyle?.backgroundColor || DLMode.backgroundColor
                    }, useAnimatedStyle(() => {
                        return {
                            opacity: opacity.value,
                            transform: [
                                { translateY: translateY.value },
                                { translateX: translateX.value },
                                { scale: scale.value }
                            ]
                        }
                    })
                ]} >
                    {image ? 
                        <Image 
                            source={image}
                            style={{
                                ...imageStyle,
                                width: imageStyle?.width || 40,
                                height:  imageStyle?.height || 40,
                                alignSelf: imageStyle?.alignSelf || 'center'
                            }} />
                    : null}
                    {icon ? 
                        icon
                    : null}
                    <View style={{ height: spacingBetweenElements }} />
                    {title ?
                    <CustomText 
                        text={title}
                        textAlign={'center'}
                        fontSize={titleStyle?.fontSize || 18}
                        color={titleStyle?.color ? titleStyle.color : DLMode.textColor}
                        style={{...styles.titleText, ...titleStyle}} />
                    : null}
                    <View style={{ height: spacingBetweenElements }} />
                    {message &&
                    <>
                        <CustomText 
                            text={message}
                            textAlign={messageStyle?.textAlign}
                            fontSize={messageStyle?.fontSize}
                            color={messageStyle?.color ? messageStyle.color : DLMode.textColor}
                            style={{
                                ...messageStyle, 
                                paddingHorizontal: messageStyle?.paddingHorizontal || 10 
                            }} />
                        <View style={{ height: spacingBetweenElements }} />
                    </>}
                    {additionalContentBetweenTextAndButtons}
                    <View style={{ height: spacingBetweenElements }} />
                    <View style={[styles.buttonsContainer, buttonsContainerStyle]} >
                        {buttonText1 ? 
                        <CustomButton 
                            buttonText={buttonText1 || "Close"}
                            onPress={onButtonPress1!}
                            backgroundColor={buttonStyle1?.backgroundColor ?
                                [buttonStyle1.backgroundColor.toString(), buttonStyle1.backgroundColor.toString()] : 
                                [Colors.PURPLE, Colors.RED]}
                            textColor={buttonTextStyle1?.color || Colors.WHITE}
                            shadowColor={Colors.LIGHT_GRAY}
                            shadowStyle={{ ...buttonStyle1 }}
                            textStyle={buttonTextStyle1} /> :null}
                        {buttonText2 ? 
                        <CustomButton 
                            buttonText={buttonText2 || "Close"}
                            onPress={() => {
                                if (dontHideAtFirstPress && onButtonPress2) onButtonPress2();
                                else onButtonPress2!();
                            }}
                            backgroundColor={buttonStyle2?.backgroundColor ?
                                [buttonStyle2.backgroundColor.toString(), buttonStyle2.backgroundColor.toString()] : 
                                [Colors.RED, Colors.RED]}
                            textColor={buttonTextStyle2?.color || Colors.WHITE}
                            shadowColor={Colors.LIGHT_GRAY}
                            shadowStyle={{ ...buttonStyle2 }}
                            // buttonStyle={{ ...buttonStyle2 }}
                            textStyle={buttonTextStyle2} /> : null}
                    </View>
                </Animated.View>
                <TouchableWithoutFeedback 
                    onPress={onOutOfPopupPress} >
                    <View style={{ flex: 1, width: '100%' }} />
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    );
}

export default AnimatedModal;