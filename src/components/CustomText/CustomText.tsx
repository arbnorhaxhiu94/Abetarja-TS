import React from "react";
import { ColorValue, Text, TextProps, TextStyle } from "react-native";

interface CustomTextProps extends TextProps {
    text: string | number | undefined
    fontSize?: number
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    color?: ColorValue
    textAlign?: "center" | "auto" | "left" | "right" | "justify"
    style?: TextStyle
}

const CustomText = ({
    text,
    fontSize,
    fontWeight,
    color,
    textAlign,
    style,
    ...props
}: CustomTextProps) => {
    return (
        <Text 
            style={[
                style, {
                    fontSize: fontSize ? fontSize : style?.fontSize,
                    fontWeight: fontWeight ? fontWeight : style?.fontWeight,
                    color: color ? color : style?.color,
                    textAlign: textAlign ? textAlign : style?.textAlign
                }
            ]}
            {...props} >
            {text}
        </Text>
    );
}

export default CustomText;