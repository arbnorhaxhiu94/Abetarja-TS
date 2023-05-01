import React, { FunctionComponent, useState } from "react";
import { TouchableOpacity } from "react-native";
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

interface ZoomProps {
    children: JSX.Element | JSX.Element[]
    zoomOnPressOnly?: boolean
    zoomOnPinchOnly?: boolean
}

const Zoom: FunctionComponent<ZoomProps> = ({
    children,
    zoomOnPressOnly,
    zoomOnPinchOnly
}) => {

    const scale = useSharedValue(1);

    const [ doublePress, setDoublePress ] = useState<boolean>(false);

    const pinchEvent = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
        onStart: (event) => {
            console.log('Start: '+event.scale);
        },
        onActive: (event) => {
            if (!zoomOnPressOnly) {
                scale.value = event.scale;
            }
        },
        onEnd: (_) => {
            scale.value = withTiming(1);
        }
    });

    const zoom = () => {
        if (zoomOnPinchOnly) {
            return;
        }
        setDoublePress(true);
        setTimeout(() => {
            setDoublePress(false);
        }, 500);
        if (doublePress) {
            scale.value = withSpring(scale.value + 0.2);
            setDoublePress(false);            
        }
    }

    return (
        <PinchGestureHandler 
            onGestureEvent={pinchEvent} >
            <Animated.View 
                style={[useAnimatedStyle(() => {
                    return { 
                        transform: [ {scale: scale.value } ] 
                    }
                })]} >
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={zoom} >
                    {children}
                </TouchableOpacity>
            </Animated.View>
        </PinchGestureHandler>
    )
}

export default Zoom;