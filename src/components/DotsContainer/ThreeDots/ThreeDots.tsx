import React, { FunctionComponent, useEffect } from "react";
import { View, ViewStyle } from "react-native";
import { Dot } from "../Dot/Dot";
import Styles from './styles';

interface ThreeDotsProps {
    dots: any[]
    pageNumber: number
    style?: ViewStyle
}

export const ThreeDots: FunctionComponent<ThreeDotsProps> = ({
    dots,
    pageNumber,
    style
}) => {
    return (
        <View style={[Styles.dotsContainer, style]} >
            {dots.map((dot, index) => {
                return (
                    <Dot 
                        key={index}
                        index={index}
                        pageNumber={pageNumber} />
                )
            })}
        </View>
    )
}