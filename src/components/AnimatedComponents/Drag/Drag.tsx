import React, { FunctionComponent } from "react";
import { ViewStyle } from "react-native";
import { GestureEventPayload, PanGestureHandler, PanGestureHandlerEventPayload, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay, withSpring } from "react-native-reanimated";

export interface Position {
    x: number
    y: number
}

interface Borders {
    x: [number, number]
    y: [number, number]
}

interface DragProps {
    children: JSX.Element | JSX.Element[]
    style?: ViewStyle
    onDrag?(position: Position): void
    onDrop?(position: Position): void
    dropAnimation?: "none" | "smooth" | "bounce"
    borders?: Borders
    borderShape?: "square" | "circle"
}

type ContextType = {
    translateX: number
    translateY: number
}

const Drag: FunctionComponent<DragProps> = ({
    children,
    style,
    onDrag,
    onDrop,
    dropAnimation = 'none',
    borders,
    borderShape = 'square'
}) => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const dropEffects = (event: Readonly<GestureEventPayload & PanGestureHandlerEventPayload>) => {
        // console.log(event.velocityX, event.velocityY);
        switch (dropAnimation) {
            case 'smooth':
                translateX.value = withDecay({ velocity: translateX.value+event.velocityX });
                translateY.value = withDecay({ velocity: translateY.value+event.velocityY });
                break;
            case 'bounce':
                translateX.value = withSpring(translateX.value+event.velocityX);
                translateY.value = withSpring(translateY.value+event.velocityY);
            default:
                break;
        }
    }

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            if (borders && borderShape == 'square') {
                if (event.translationX + context.translateX <= borders.x[0] || 
                    event.translationX + context.translateX >= borders.x[1] ||
                    event.translationY + context.translateY <= borders.y[0] || 
                    event.translationY + context.translateY >= borders.y[1]
                ) {
                    return;
                }
            } 
            if (borders && borderShape == 'circle') {
                if (Math.sqrt((event.translationX + context.translateX)**2 + (event.translationY + context.translateY)**2) > borders.x[1]) {
                    return;
                }
            } 
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
            if (onDrag !== undefined) {
                runOnJS(onDrag)(({
                    x: translateX.value,
                    y: translateY.value
                }));
            }
        },
        onEnd: (event) => {
            if (onDrop !== undefined) {
                runOnJS(onDrop)({
                    x: translateX.value,
                    y: translateY.value
                });
            }
            runOnJS(dropEffects)(event);
        }
    });

    return (
        <PanGestureHandler 
            onGestureEvent={panGestureEvent} >
            <Animated.View 
                style={[style, { 
                    width: style?.width || 50, 
                    height: style?.height || 50
                }, useAnimatedStyle(() => {
                    return {
                        transform: [
                            { translateX: translateX.value },
                            { translateY: translateY.value }
                        ]
                    }
                })]}>
                {children}
            </Animated.View>
        </PanGestureHandler>
    );
}

export default Drag;