import React, { FunctionComponent } from "react";
import { Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import CustomText from "../../CustomText";
import { styles } from "./styles";

type ContextType = {
    x: number
}

interface SwipeButtonsProps {
    text: string
    icon?: any
    onPress(): void
    buttonStyle?: ViewStyle
    iconStyle?: ImageStyle
    textStyle?: TextStyle
}

interface SwipeProps {
    children: JSX.Element | JSX.Element[]
    style?: ViewStyle
    rightButtons?: SwipeButtonsProps[]
    leftButtons?: SwipeButtonsProps[]
}

const Swipe: FunctionComponent<SwipeProps> = ({
    children,
    style,
    rightButtons = [],
    leftButtons = []
}) => {

    let initialPosition: number = -leftButtons.length*70;
    const translateX = useSharedValue(initialPosition);

    const swipe = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            context.x = translateX.value;
        },
        onActive: (event, context) => {
            if ((translateX.value >= 0 && leftButtons) ||
                (translateX.value <= 0 && rightButtons) ) {
                translateX.value = event.translationX + context.x;
            }
        },
        onEnd: (event, context) => {
            if (event.translationX+context.x > 50-(70*leftButtons.length) && leftButtons) {
                translateX.value = withTiming(0, {
                    duration: 500
                });
            } else if (event.translationX+context.x < -50-(70*leftButtons.length) && rightButtons) {
                translateX.value = withTiming(-70*(leftButtons.length) - 70*(rightButtons.length), {
                    duration: 500
                });
            } else {
                translateX.value = withTiming(initialPosition, {
                    duration: 500
                });
            }
        }
    });

    const swipeButton = (button: SwipeButtonsProps) => {
        return (
            <TouchableOpacity 
                key={button.text}
                style={[button.buttonStyle, {
                    width: 70,
                    height: style?.height ? style.height : 50,
                    justifyContent: button.buttonStyle?.justifyContent || 'center',
                    alignItems: button.buttonStyle?.alignItems || 'center'
                }]}
                onPress={button.onPress} >
                {button?.icon ? 
                    <Image 
                        source={button.icon}
                        style={[
                            button.iconStyle, { 
                                width: button.iconStyle?.width || 20, 
                                height: button.iconStyle?.height || 20 
                            }
                        ]} />
                : null}
                <CustomText 
                    text={button.text}
                    color={button.textStyle?.color}
                    fontSize={button.textStyle?.fontSize}
                    fontWeight={button.textStyle?.fontWeight}
                    textAlign={button.textStyle?.textAlign} />
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styles.container, style]} >
            <PanGestureHandler 
                onGestureEvent={swipe} >
                <Animated.View 
                    style={[
                        styles.item,
                        { height: style?.height ? style.height : 50 },
                        useAnimatedStyle(() => {
                            return {
                                transform: [{ translateX: translateX.value }]
                            }
                        })
                    ]} >
                    <View 
                        style={{ flexDirection: 'row' }} >
                        {leftButtons.length > 0 ? leftButtons.map(leftButton => swipeButton(leftButton)) : null}
                    </View>
                    <View 
                        style={{width: '100%'}}>
                        {children}
                    </View>
                    <View 
                        style={{ flexDirection: 'row' }} >
                        {rightButtons.length > 0 ? rightButtons.map(rightButton => swipeButton(rightButton)) : null}
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

export default Swipe;