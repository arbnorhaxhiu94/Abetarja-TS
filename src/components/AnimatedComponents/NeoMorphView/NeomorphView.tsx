import React, { FunctionComponent, useEffect, useState } from "react";
import { ColorValue, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, { Easing, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { Colors } from "../../../assets/Colors";
import { ReducerStateType } from "../../../redux";

export interface NeomorphShadowProps {
    colors?: {
        topShadow?: ColorValue
        bottomShadow?: ColorValue
    }
    offset?: number
    opacity?: number
    radius?: number
}

interface NeomorphViewProps {
    children: JSX.Element | JSX.Element[]
    dimensions?: {
        width?: number | string
        height?: number | string
        borderRadius?: number
    },
    shadow?: NeomorphShadowProps
    duration?: number
    style?: ViewStyle
}

const NeomorphView: FunctionComponent<NeomorphViewProps> = ({
    children,
    dimensions,
    shadow,
    duration,
    style
}) => {

    const darkLightMode = useSelector((state: ReducerStateType) => state.darkLightModeReducer);

    const borderRadius = useSharedValue(0);

    const [ mounted, setMounted ] = useState<boolean>(false);

    useEffect(() => {
        if (dimensions?.borderRadius !== undefined) {
            borderRadius.value = dimensions.borderRadius;
        }
    }, [dimensions?.borderRadius]);

    const borderRadiusValue = useDerivedValue(() => {
        return withTiming(borderRadius.value, {
                duration: mounted ? duration || 2000 : 0,
                easing: Easing.linear
            }
        )
    });

    useEffect(() => {
        setTimeout(() => {
            setMounted(true);
        }, duration ? duration - 1 : 1999);
    }, []);

    return (
        <Animated.View 
            style={[useAnimatedStyle(() => {
                return {
                    shadowOffset: { 
                        width: shadow?.offset !== undefined ?
                            withTiming(-shadow.offset, {
                                duration: duration || 2000
                            }) : -2, 
                        height: shadow?.offset !== undefined ?
                            withTiming(-shadow.offset, {
                                duration: duration || 2000
                            }) : -2, 
                    },
                    elevation: shadow?.offset !== undefined ?
                        withTiming(-shadow.offset, {
                            duration: duration || 2000
                        }) : -2,
                    shadowOpacity: shadow?.opacity !== undefined ? 
                        withTiming(shadow.opacity, {
                            duration: duration || 2000
                        }) : 1,
                    shadowRadius: shadow?.radius !== undefined ?
                        withTiming(shadow.radius, {
                            duration: duration || 2000
                        }) : 2,
                    shadowColor: shadow?.colors?.topShadow || Colors.BLUE
                }
            })]}>
            <Animated.View
                style={[useAnimatedStyle(() => {
                    return {
                        shadowOffset: { 
                            width: shadow?.offset !== undefined ?
                                withTiming(shadow.offset, {
                                    duration: duration || 2000
                                }) : 2, 
                            height: shadow?.offset !== undefined ?
                                withTiming(shadow.offset, {
                                    duration: duration || 2000
                                }) : 2, 
                        },
                        elevation: shadow?.offset !== undefined ?
                            withTiming(shadow.offset, {
                                duration: duration || 2000
                            }) : -2,
                        shadowOpacity: shadow?.opacity !== undefined ? 
                            withTiming(shadow.opacity, {
                                duration: duration || 2000
                            }) : 1,
                        shadowRadius: shadow?.radius !== undefined ?
                            withTiming(shadow.radius, {
                                duration: duration || 2000
                            }) : 2,
                        shadowColor: shadow?.colors?.bottomShadow || Colors.RED
                    }
                })]}>
                <Animated.View 
                    style={[
                        style, 
                        {
                            width: dimensions?.width ? dimensions.width : 50,
                            height: dimensions?.height ? dimensions.height : 50,
                            backgroundColor: style?.backgroundColor ? 
                                style.backgroundColor : darkLightMode.backgroundColor,
                            borderWidth: 0,
                            borderColor: Colors.TRANSPARENT,
                        }, useAnimatedStyle(() => {
                            return {
                                borderRadius: borderRadiusValue.value
                            }
                    })]}>
                    {children}
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}

export default NeomorphView;