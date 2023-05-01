import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { EasingFunction, ViewStyle } from "react-native";
import Animated, { Easing, Extrapolate, interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { Colors } from "../../../assets/Colors";
import NeoMorphView from "../NeoMorphView";
import { NeomorphShadowProps } from "../NeoMorphView/NeomorphView";

export type RepeatButtonAnimationTypes = 'repeat-many' | 'repeat-once' | 'repeat-half' | 'none';

type TSAnimationPropType = {
    value: number
    easing?: EasingFunction
}

type RotateAnimationPropType = {
    degrees: number
    easing?: EasingFunction
}

type ColorAnimationPropType = {
    start: string
    end: string
}

interface AnimatedViewProps {
    children: JSX.Element | JSX.Element[]
    dimensions: {
        width: number | string
        height: number | string
        borderRadius?: number
    },
    animations?: {
        borderRadius?: {
            value: {
                from: number
                to: number
            }
            easing?: EasingFunction
        }
        translateX?: TSAnimationPropType
        translateY?: TSAnimationPropType
        rotationX?: RotateAnimationPropType
        rotationY?: RotateAnimationPropType
        rotationZ?: RotateAnimationPropType
        scale?: TSAnimationPropType
        opacity?: number
        backgroundColor?: ColorAnimationPropType
        borderColor?: ColorAnimationPropType
    },
    delay?: number
    duration?: number
    repeatType?: RepeatButtonAnimationTypes
    neomorph?: NeomorphShadowProps
    additionalStyle?: ViewStyle
}

const AnimatedView: FunctionComponent<AnimatedViewProps> = ({
    children,
    dimensions,
    animations,
    delay = 0,
    duration = 500,
    repeatType = 'repeat-once',
    neomorph,
    additionalStyle
}) => {

    let opacity = useSharedValue(0);
    let translateX = useSharedValue(0);
    let translateY = useSharedValue(0);
    let rotateX = useSharedValue(0);
    let rotateY = useSharedValue(0);
    let rotateZ = useSharedValue(0);
    let scalingValue = useSharedValue(0);
    let borderRadius = useSharedValue(0);

    const [ intervalId, setIntervalId ] = useState<number>(0);
    const [ backgroundColorValue, setBackgroundColorValue ] = useState<string>(animations?.backgroundColor?.start || Colors.TRANSPARENT);
    const [ borderColorValue, setBorderColorValue ] = useState<string>(animations?.borderColor?.start || Colors.TRANSPARENT);

    const bgColorProgress = useDerivedValue(() => {
        return withTiming(
            backgroundColorValue === animations?.backgroundColor?.start ? 0 : 1, 
            {
                duration: duration
            }
        );
    });
    
    const borderColorProgress = useDerivedValue(() => {
        return withTiming(
            borderColorValue === animations?.borderColor?.start ? 0 : 1,
            {
                duration: duration
            }
        );
    });

    const opacityValue = useDerivedValue(() => {
        if (animations?.opacity !== undefined) {
            return withTiming(opacity.value, {
                duration: duration,
                easing: Easing.ease
            });
        }
    });

    const translationX = useDerivedValue(() => {
        if (animations?.translateX) {
            return withTiming(
                translateX.value, 
                {
                    duration: duration,
                    easing: animations.translateX?.easing ? animations.translateX.easing : Easing.ease
                }
            );
        }
    });

    const translationY = useDerivedValue(() => {
        if (animations?.translateY) {
            return withTiming(
                translateY.value, 
                {
                    duration: duration,
                    easing: animations.translateY?.easing ? animations.translateY.easing : Easing.ease
                }
            );
        }
    });

    const rotationX = useDerivedValue(() => {
        if (animations?.rotationX) {
            return withTiming(interpolate(
                rotateX.value, 
                [0, 1], 
                [0, animations.rotationX.degrees], 
                Extrapolate.CLAMP
            ), {
                duration: duration,
                easing: animations.rotationX?.easing ? animations.rotationX.easing : Easing.ease
            });
        } else {
            return 0;
        }
    });

    const rotationY = useDerivedValue(() => {
        if (animations?.rotationY) {
            return withTiming(interpolate(
                rotateY.value, 
                [0, 1], 
                [0, animations.rotationY.degrees], 
                Extrapolate.CLAMP
            ), {
                duration: duration,
                easing: animations.rotationY?.easing ? animations.rotationY.easing : Easing.ease
            });
        } else {
            return 0;
        }
    });

    const rotationZ = useDerivedValue(() => {
        if (animations?.rotationZ) {
            return withTiming(interpolate(
                rotateZ.value, 
                [0, 1], 
                [0, animations.rotationZ.degrees], 
                Extrapolate.CLAMP
            ), {
                duration: duration,
                easing: animations.rotationZ?.easing ? animations.rotationZ.easing : Easing.ease
            });
        } else {
            return 0;
        }
    });

    const scaling = useDerivedValue(() => {
        if (animations?.scale) {
            return withTiming(interpolate(
                scalingValue.value,
                [0, 1],
                [1, animations.scale.value],
                Extrapolate.CLAMP
            ), {
                duration: duration,
                easing: animations.scale?.easing ? animations.scale.easing : Easing.ease
            });
        } else {
            return 1;
        }
    });

    const borderRadiusValue = useDerivedValue(() => {
        if (animations?.borderRadius) {
            return withTiming(interpolate(
                borderRadius.value,
                [0, 1, 2],
                [
                    animations.borderRadius.value.from,
                    animations.borderRadius.value.from,
                    animations.borderRadius.value.to
                ]
            ), {
                duration: borderRadius.value !== 0 ? duration : 0,
                easing: animations.borderRadius?.easing ? animations.borderRadius.easing : Easing.linear
            })
        }
    });

    const start = () => {
        if (animations?.opacity !== undefined) {
            opacity.value = 1;
        }
        if (animations?.backgroundColor) {
            setBackgroundColorValue(animations.backgroundColor.end)
        }
        if (animations?.borderColor) {
            setBorderColorValue(animations.borderColor.end);
        }
        if (animations?.borderRadius) {
            borderRadius.value = 2;
        }
        if (animations?.translateX) {
            translateX.value = animations.translateX.value;
        }
        if (animations?.translateY) {
            translateY.value = animations.translateY.value;
        }
        if (animations?.rotationX) {
            rotateX.value = 1;
        }
        if (animations?.rotationY) {
            rotateY.value = 1;
        }
        if (animations?.rotationZ) {
            rotateZ.value = 1;
        }
        if (animations?.scale) {
            scalingValue.value = 1;
        }
        if (repeatType !== 'repeat-half') {
            end();
        }
        
    }

    const end = () => {
        if (repeatType === 'repeat-half') {
            if (animations?.backgroundColor) {
                setBackgroundColorValue(animations.backgroundColor.start);
            }
            if (animations?.borderColor) {
                setBorderColorValue(animations.borderColor.start);
            }
            if (animations?.borderRadius) {
                borderRadius.value = 1;
            }    
            if (animations?.translateX) {
                translateX.value = 0;
            }
            if (animations?.translateY) {
                translateY.value = 0;
            }
            if (animations?.rotationX) {
                rotateX.value = 0;
            }
            if (animations?.rotationY) {
                rotateY.value = 0;
            }
            if (animations?.rotationZ) {
                rotateZ.value = 0;
            }
            if (animations?.scale) {
                scalingValue.value = 0;
            }
            if (animations?.opacity !== undefined) {
                opacity.value = animations.opacity;
            }
        } else {
            setTimeout(() => {
                if (animations?.backgroundColor) {
                    setBackgroundColorValue(animations.backgroundColor.start);
                }
                if (animations?.borderColor) {
                    setBorderColorValue(animations.borderColor.start);
                }
                if (animations?.borderRadius) {
                    borderRadius.value = 1;
                }    
                if (animations?.translateX) {
                    translateX.value = 0;
                }
                if (animations?.translateY) {
                    translateY.value = 0;
                }
                if (animations?.rotationX) {
                    rotateX.value = 0;
                }
                if (animations?.rotationY) {
                    rotateY.value = 0;
                }
                if (animations?.rotationZ) {
                    rotateZ.value = 0;
                }
                if (animations?.scale) {
                    scalingValue.value = 0;
                }
                if (animations?.opacity !== undefined) {
                    opacity.value = animations.opacity;
                }
            }, duration);    
        }
    }

    const handleAnimations = () => {
        if (repeatType === 'repeat-many') {
            start();
            const newIntervalId = setInterval(() => {
                start();
            }, duration*2);
            setIntervalId(newIntervalId);
        } else if (repeatType === 'repeat-once') {
            start();
        } else if (repeatType === 'repeat-half') {
            start();
        } else {
            clearInterval(intervalId);
        }
    }

    useEffect(() => {

        setTimeout(() => {
            handleAnimations();
        }, delay);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <Animated.View 
            style={[additionalStyle, 
                {
                    width: dimensions.width,
                    height: dimensions.height,
                }, useAnimatedStyle(() => {
                    return {
                        borderRadius: animations?.borderRadius ? borderRadiusValue.value : dimensions.borderRadius,
                        opacity: opacityValue.value,
                        backgroundColor: animations?.backgroundColor?.start && animations.backgroundColor.end ? 
                            interpolateColor(
                                bgColorProgress.value,
                                [0, 1],
                                [animations.backgroundColor?.start, animations.backgroundColor?.end]
                            ) 
                            : 
                            additionalStyle?.backgroundColor,
                        borderColor: animations?.borderColor?.start && animations.borderColor.end ? 
                            interpolateColor(
                                borderColorProgress.value,
                                [0, 1],
                                [animations.borderColor?.start, animations.borderColor?.end]
                            ) 
                            : 
                            additionalStyle?.borderColor,
                        transform: [
                            { translateX: translationX.value ? translationX.value : 0 },
                            { translateY: translationY.value ? translationY.value : 0 },
                            { rotateX: rotationX.value+'deg'},
                            { rotateY: rotationY.value+'deg'},
                            { rotateZ: rotationZ.value+'deg'},
                            { scale: scaling.value }
                        ]
                    }
                })
            ]} >
            {neomorph ?
                <NeoMorphView 
                    dimensions={{
                        width: dimensions.width,
                        height: dimensions.height,
                        borderRadius: animations?.borderRadius ? 
                                            borderRadiusValue.value : 
                                            additionalStyle?.borderRadius,
                    }}
                    shadow={neomorph}
                    duration={duration}
                    style={additionalStyle} >
                    {children}
                </NeoMorphView>
            :
                children
            }
        </Animated.View>
    );
}

export default AnimatedView;