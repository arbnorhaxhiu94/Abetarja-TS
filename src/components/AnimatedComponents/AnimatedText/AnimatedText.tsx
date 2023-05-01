import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Animated, EasingFunction, TextStyle, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { ReducerStateType } from "../../../redux";
import { DarkLightModeStateType } from "../../../redux/reducers/DarkLightMode/DarkLightModeReducer";
import { styles } from "./styles";

export type AnimationTypes = "OneByOne" | "Wave" | "AllTogether";

interface CharacterType {
    id: number
    char: string
    animation: Animated.Value
    colorAnimation: Animated.Value
}

interface AnimatedTextProps {
    text: string
    duration: number
    animationType?: AnimationTypes
    playAnimation: boolean
    animations: {
        translateY?: {
            value: number
            easing?: EasingFunction
        }
        translateX?: {
            value: number
            easing?: EasingFunction
        }
        rotateX?: {
            degree: number
            easing?: EasingFunction
        }
        rotateY?: {
            degree: number
            easing?: EasingFunction
        }
        rotateZ?: {
            degree: number
            easing?: EasingFunction
        }
        scale?: {
            value: number
            easing?: EasingFunction
        }
        opacity?: {
            value: number
            easing?: EasingFunction
        }
        color?: {
            colors: [string, string, string]
            keepColor: 0 | 0.5 | 1
            easing?: EasingFunction
        },
        width?: {
            value: number,
            easing?: EasingFunction
        },
        height?: {
            value: number,
            easing?: EasingFunction
        }
    }
    waveAnimationSpeed?: number
    repeat?: boolean
    containerStyle?: ViewStyle
    textStyle?: TextStyle
}

const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
    text,
    duration = 2000,
    animationType = 'AllTogether',
    playAnimation = false,
    animations,
    waveAnimationSpeed = 3,
    repeat = false,
    containerStyle,
    textStyle
}: AnimatedTextProps) => {

    const darkLightMode: DarkLightModeStateType = useSelector((state: ReducerStateType) => state.darkLightModeReducer);

    const [ characters, setCharacters ] = useState<CharacterType[]>([]);

    const dimensionsAnimation = useRef(new Animated.Value(0)).current;

    let interval = useRef<NodeJS.Timeout>(setInterval(() => {}));

    const animate = (animatedValue: Animated.Value) => { 
        Animated.timing(
            animatedValue, {
            toValue: 1,
            duration: duration,
            useNativeDriver: false
        }).start();

        setTimeout(() => {
            animatedValue.setValue(0);
        }, duration);
    }

    const animateColor = (animatedValue: Animated.Value) => {
        Animated.timing(
            animatedValue, {
            toValue: 1,
            duration: duration,
            useNativeDriver: false
        }).start();

        setTimeout(() => {
            if (animations.color?.keepColor !== undefined) {
                animatedValue.setValue(animations.color.keepColor);
            }
        }, duration);
    }

    const animateDimensions = () => {
        Animated.timing(
            dimensionsAnimation, {
            toValue: 1,
            duration: duration*(text.length-1)/2,
            useNativeDriver: false
        }).start();
    }

    const oneByOne = () => {
        characters.forEach(char => {
            setTimeout(() => {
                animate(char.animation);
                animateColor(char.colorAnimation);
            }, duration*char.id/2);
        });
    }

    const wave = () => {
        characters.forEach(char => {
            setTimeout(() => {
                animate(char.animation);
                animateColor(char.colorAnimation);
            }, duration*char.id/(waveAnimationSpeed*2));
        });
    }

    const allTogether = () => {
        characters.forEach(char => {
            animate(char.animation);
            animateColor(char.colorAnimation);
        });
    }

    const startAnimation = () => {
        animateDimensions();
        if (animationType == 'OneByOne') {
            oneByOne();
            if (repeat) {
                interval.current = setInterval(() => {
                    oneByOne();
                    animateDimensions();
                }, duration*characters.length/2);
            }
        }
        else if (animationType == 'Wave') {
            wave();
            if (repeat) {
                interval.current = setInterval(() => {
                    wave();
                    animateDimensions();
                }, duration*characters.length/waveAnimationSpeed);
            }
        } else if (animationType == 'AllTogether') {
            allTogether();
            if (repeat) {
                interval.current = setInterval(() => {
                    allTogether();
                    animateDimensions();
                }, duration*3);
            }
        }
    }

    useEffect(() => {
        let tempChars: CharacterType[] = [];
        for (let i = 0; i < text.length; i++) {
            tempChars.push({
                id: i,
                char: text[i],
                animation: new Animated.Value(0),
                colorAnimation: new Animated.Value(0)
            });
        }
        setCharacters(tempChars);
    }, [text]);

    useEffect(() => {
        if (characters && playAnimation) {
            startAnimation();
        } else if (!playAnimation) {
            clearInterval(interval.current);
        }
    }, [characters, playAnimation]);

    useEffect(() => {
        if (characters && playAnimation) {
            clearInterval(interval.current);
            startAnimation();
        }
    }, [animations.color?.keepColor]);

    return (
        <Animated.View 
            style={[
                styles.container, 
                containerStyle, 
                {
                    flexDirection: containerStyle?.flexDirection ? containerStyle.flexDirection : 'row',
                    width: containerStyle?.width ? containerStyle.width : 
                            animations?.width ? dimensionsAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, animations.width.value],
                            easing: animations.width.easing
                    }) : undefined,
                    height: animations?.height ? dimensionsAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, animations.height.value],
                        easing: animations.height.easing
                    }) : undefined
                }]} 
            >
            {characters.map((char) => {
                return (
                    <Animated.Text 
                        key={Math.random().toString()}
                        style={[
                            textStyle, 
                            {
                                marginTop: textStyle?.marginTop ? textStyle.marginTop 
                                        : animations.translateY && animations.translateY?.value < 0 ? 
                                        -animations.translateY.value : 0,
                                marginBottom: textStyle?.marginBottom ? textStyle.marginBottom 
                                        : animations.translateY && animations.translateY?.value > 0 ? 
                                        animations.translateY.value : 0,
                                opacity: animations?.opacity ? char.animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, animations.opacity.value],
                                    easing: animations.opacity.easing
                                }) : textStyle?.opacity,
                                color: animations?.color ? char.colorAnimation.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [
                                        animations.color.colors[0], 
                                        animations.color.colors[1], 
                                        animations.color.colors[2]
                                    ],
                                    easing: animations.color.easing
                                }) : textStyle?.color ? textStyle.color 
                                    : darkLightMode.textColor,
                                transform: [
                                    { 
                                        translateY: animations?.translateY ? char.animation.interpolate({
                                            inputRange: [0, 0.25, 0.5, 0.75, 1],
                                            outputRange: [
                                                0, 
                                                animations.translateY.value/2, 
                                                animations.translateY.value, 
                                                animations.translateY.value/2, 
                                                0
                                            ],
                                            extrapolate: 'clamp',
                                            easing: animations?.translateY.easing
                                        }) : 0
                                    }, 
                                    { 
                                        translateX: animations?.translateX ? char.animation.interpolate({
                                            inputRange: [0, 0.25, 0.5, 0.75, 1],
                                            outputRange: [
                                                0, 
                                                animations.translateX.value/2, 
                                                animations.translateX.value, 
                                                animations.translateX.value/2, 
                                                0
                                            ],
                                            extrapolate: 'clamp',
                                            easing: animations?.translateX.easing
                                        }) : 0
                                    }, 
                                    {
                                        rotateX: animations?.rotateX ? char.animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', animations.rotateX.degree+'deg'],
                                            easing: animations?.rotateX.easing
                                        }) : '0deg'
                                    },
                                    {
                                        rotateY: animations?.rotateY ? char.animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', animations.rotateY.degree+'deg'],
                                            easing: animations?.rotateY.easing
                                        }) : '0deg'
                                    },
                                    {
                                        rotateZ: animations?.rotateZ ? char.animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', animations.rotateZ.degree+'deg'],
                                            easing: animations?.rotateZ.easing
                                        }) : '0deg'
                                    },
                                    {
                                        scale: animations.scale ? char.animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, animations.scale.value],
                                            easing: animations.scale.easing
                                        }) : 1
                                    }
                                ]
                            }
                        ]} >
                        {char.char}
                    </Animated.Text>
                );
            })}
        </Animated.View>
    );
}

export default AnimatedText;