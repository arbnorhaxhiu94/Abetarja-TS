import React, { FunctionComponent, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { Colors } from "../../../assets/Colors";
import Styles from './styles';

interface DotProps {
    index: number
    pageNumber: number
}

export const Dot: FunctionComponent<DotProps> = ({
    index,
    pageNumber
}) => {

    const scaleX = useRef(new Animated.Value(1)).current;

    const shrink = () => {
        Animated.timing(scaleX ,{
            toValue: 0.33,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    const grow = () => {
        Animated.timing(scaleX ,{
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        if (pageNumber == index) grow();
        else shrink();
    }, [pageNumber]);

    return (
        <Animated.View 
            style={[Styles.dot, {
                backgroundColor: index == pageNumber ? Colors.WHITE : Colors.LIGHT_GRAY,
                width: index == pageNumber ? 50 : 8,
                transform: [
                    { scaleX: index == pageNumber ? scaleX : 1 },
                    { scaleY: index == pageNumber ? 1.1 : 1 }
                ]
            }]} 
        />
    )
}