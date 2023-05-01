import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons from "../../../../assets/Icons";
import CustomButton from "../../../../components/CustomButton";
import CustomText from "../../../../components/CustomText";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import SoundPlayerListener from "../../../../config/SoundPlayerListener/SoundPlayerListener";
import Question from "../../../../models/Question";
import { styles } from "./styles";

interface LessonTipProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonTip: React.FC<LessonTipProps> = ({ isFocused, color, question, onNextPress }) => {

    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    
    const playSounds = () => {
        SoundPlayerListener.playMultipleSounds(question.audios!);
    }

    useEffect(() => {
        SoundPlayerListener.add();
        if (isFocused) {
            playSounds();
            setTimeout(() => { setIsDisabled(false); }, 1500);
        }
        return () => { SoundPlayerListener.remove(); }
    }, [isFocused]);

    return (
        <View style={styles.screen}>
            <View style={{ flex: 4, justifyContent: "center" }}>
                <TouchableOpacity
                    onPress={playSounds}
                    activeOpacity={0.9}
                    style={[styles.letterContainer, { borderColor: color }]}>
                    <CustomText
                        text={question.question}
                        style={{ color, fontSize: question.question.length > 6 ? 50 : question.question.length > 3 ? 75 : 100 }} />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={playSounds}
                        style={styles.voiceIcon} >
                        {Icons.Voice({ size: 32, color })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <CustomButton
                    disabled={isDisabled}
                    buttonText={Icons.ArrowRight({ color: Colors.WHITE, size: 20, style: { marginTop: 3 } })}
                    onPress={onNextPress}
                    shadowColor={color}
                    backgroundColor={[color, color]}
                    shadowStyle={{ width: WINDOW.WIDTH - 40 }} />
            </View>
        </View>
    )
}

export default LessonTip;