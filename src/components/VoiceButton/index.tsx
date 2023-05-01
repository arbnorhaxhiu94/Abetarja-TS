import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../assets/Colors";
import Icons from "../../assets/Icons";
import { styles } from "./styles";

interface VoiceButtonProps {
    color: Colors
    disabled: boolean
    onPress(): void
}

const VoiceButton: React.FC<VoiceButtonProps> = ({
    color,
    disabled,
    onPress
}) => {

    return (
        <TouchableOpacity
            disabled={disabled} 
            activeOpacity={0.9} 
            onPress={onPress}
            style={[styles.voiceButton, { shadowColor: color }]}>
            {Icons.Voice({ color: color, size: 40 })}
        </TouchableOpacity>
    )
}

export default VoiceButton;