import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons from "../../../../assets/Icons";
import CustomButton from "../../../../components/CustomButton";
import LessonLetterButton from "../../../../components/LessonLetterButton";
import VoiceButton from "../../../../components/VoiceButton";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import Question from "../../../../models/Question";
import { useAppSelector } from "../../../../store/store";
import { styles } from "./styles";
import SoundPlayer from "react-native-sound-player";
import SoundPlayerListener from "../../../../config/SoundPlayerListener/SoundPlayerListener";

interface LessonSelectWordProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonSelectWord: React.FC<LessonSelectWordProps> = ({
    isFocused,
    color,
    question,
    onNextPress
}) => {

    const { backgroundColor } = useAppSelector(state => state.DLMode);

    const [isSoundPlaying, setIsSoundPlaying] = useState<boolean>(false);
    const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState<string | null>(null);
    const [selectedIncorrectAnswers, setSelectedIncorrectAnswers] = useState<string[]>([]);

    const colors = [Colors.BLUE, Colors.RED, Colors.GREEN, Colors.ORANGE];

    const isAnswerDisabled = (answer: string): boolean => {
        return selectedIncorrectAnswers.includes(answer) || isCorrectAnswerSelected !== null;
    }

    const isCorrectAnswer = (answer: string): boolean | null => {
        if (isCorrectAnswerSelected === null) return null;
        else if (isCorrectAnswerSelected === answer) return true;
        else return false;
    }

    const onAnswerSelect = (answer: string) => {
        if (isCorrectAnswerSelected) return;
        if (answer === question.correctAnswer) {SoundPlayerListener.playCorrectAnswerSound(); setIsCorrectAnswerSelected(answer);}
        else {SoundPlayerListener.playIncorrectAnswerSound(); setSelectedIncorrectAnswers((prev => [...prev, answer]));}
    }

    const getVoiceButtonColor = (): Colors => {
        if (isCorrectAnswerSelected) return Colors.GRAY;
        else return color;
    }

    const playSounds = () => {
        SoundPlayerListener.playMultipleSounds(question.audios!);
    }

    useEffect(() => {
        SoundPlayerListener.add();
        if (isFocused) playSounds();
        return () => { SoundPlayerListener.remove(); }
    }, [isFocused]);

    return (
        <View style={[styles.screen, {backgroundColor}]}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <VoiceButton 
                    disabled={isCorrectAnswerSelected !== null}
                    color={getVoiceButtonColor()}
                    onPress={playSounds} />
            </View>
            <View style={styles.answersContainer}>
                {question.answers!.map((answer, index) => (
                    <LessonLetterButton
                        key={index}
                        isCorrectAnswer={isCorrectAnswer(answer)}
                        question={answer}
                        color={colors[index]}
                        isDisabled={isAnswerDisabled(answer)}
                        onPress={() => onAnswerSelect(answer)}
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                        checkIcon={"right"} />
                ))}
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <CustomButton
                    disabled={!isCorrectAnswerSelected}
                    buttonText={Icons.ArrowRight({ color: Colors.WHITE, size: 20, style: { marginTop: 3 } })}
                    onPress={onNextPress}
                    shadowColor={color}
                    backgroundColor={[color, color]}
                    shadowStyle={{ width: WINDOW.WIDTH - 40 }} />
            </View>
        </View>
    )
}

export default LessonSelectWord;