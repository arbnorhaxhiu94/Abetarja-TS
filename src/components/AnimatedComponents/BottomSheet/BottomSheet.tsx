import React, { FunctionComponent, useEffect, useState } from "react";
import { Modal, ScrollView, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { SCREEN } from "../../../config/Constants/ScreenDimensions";
import { ReducerStateType } from "../../../redux";
import { DarkLightModeStateType } from "../../../redux/reducers/DarkLightMode/DarkLightModeReducer";
import { styles } from "./styles";

type ContextType = {
    y: number
}

interface BottomSheetProps {
    children: JSX.Element | JSX.Element[]
    visible: boolean
    close(): void
    style?: ViewStyle
}

const BottomSheet: FunctionComponent<BottomSheetProps> = ({
    children,
    visible,
    close,
    style
}) => {

    const darkLightMode: DarkLightModeStateType = useSelector((state: ReducerStateType) => state.darkLightModeReducer);

    const translateY = useSharedValue(SCREEN.HEIGHT);

    const closePopup = () => {
        translateY.value = withTiming(SCREEN.HEIGHT);
        setTimeout(() => {
            close();
        }, 300);
    }

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            context.y = translateY.value;
        },
        onActive: (event, context) => {
            translateY.value = event.translationY + context.y;
        },
        onEnd: (event) => {
            if (event.translationY >= 100 || event.absoluteY >= SCREEN.HEIGHT - 50) {
                runOnJS(closePopup)()
            } else {
                translateY.value = withTiming(0);
            }
        }
    });

    useEffect(() => {
        if (visible) {
            translateY.value = withTiming(0);
        } else {
            translateY.value = SCREEN.HEIGHT;
        }
    }, [visible]);

    return (
        <Modal 
            transparent={true}
            visible={visible}
            onRequestClose={closePopup} >
            <View 
                style={styles.screen} >
                <TouchableWithoutFeedback 
                    onPress={closePopup} >
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>
                <PanGestureHandler 
                    onGestureEvent={onGestureEvent} >
                    <Animated.View 
                        style={[
                            style,
                            styles.bottomSheet, 
                            useAnimatedStyle(() => {
                                return {
                                    transform: [ { translateY: translateY.value } ]
                                }
                            }),
                            {
                                backgroundColor: style?.backgroundColor || darkLightMode.backgroundColor,
                                padding: style?.padding || 10,
                                borderTopRightRadius: style?.borderTopRightRadius || 10,
                                borderTopLeftRadius: style?.borderTopLeftRadius || 10
                            }
                        ]} >
                        <View 
                            style={styles.headerDragLine} />
                        <ScrollView>
                            {children}
                        </ScrollView>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </Modal>
    )
}

export default BottomSheet;