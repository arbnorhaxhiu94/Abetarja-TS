import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons from "../../../../assets/Icons";
import CustomButton from "../../../../components/CustomButton";
import CustomText from "../../../../components/CustomText";
import LessonLetterButton from "../../../../components/LessonLetterButton";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import SoundPlayerListener from "../../../../config/SoundPlayerListener/SoundPlayerListener";
import Question from "../../../../models/Question";
import { styles } from "./styles";

interface LessonSelectOneProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonSelectOne: React.FC<LessonSelectOneProps> = ({ isFocused, color, question, onNextPress }) => {

    const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState<string | null>(null);
    const [selectedIncorrectAnswers, setSelectedIncorrectAnswers] = useState<string[]>([]);

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

    const playSound = () => {
        if (question.audios!.length === 1) SoundPlayerListener.playSound(question.audios![0]);
        else if (question.audioDelays) SoundPlayerListener.playMultipleSoundsWithCustomDelay(question.audios!, question.audioDelays);
        else SoundPlayerListener.playMultipleSounds(question.audios!);
    }

    useEffect(() => {
        SoundPlayerListener.add();
        if (isFocused) playSound();
        return () => { SoundPlayerListener.remove(); }
    }, [isFocused]);

    return (
        <View style={styles.screen}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <TouchableOpacity
                    disabled={isCorrectAnswerSelected !== null} 
                    activeOpacity={0.9} 
                    onPress={playSound}
                    style={[styles.voiceButton, { shadowColor: getVoiceButtonColor() }]}>
                    {Icons.Voice({ color: getVoiceButtonColor(), size: 40 })}
                </TouchableOpacity>
            </View>
            <View style={styles.answersContainer}>
                <View style={styles.answersSubContainer}>
                    <LessonLetterButton
                        isCorrectAnswer={isCorrectAnswer(question.answers![0])}
                        question={question.answers![0]}
                        color={Colors.RED}
                        isDisabled={isAnswerDisabled(question.answers![0])}
                        onPress={() => onAnswerSelect(question.answers![0])} />
                    <LessonLetterButton
                        isCorrectAnswer={isCorrectAnswer(question.answers![1])}
                        question={question.answers![1]}
                        color={Colors.GREEN}
                        isDisabled={isAnswerDisabled(question.answers![1])}
                        onPress={() => onAnswerSelect(question.answers![1])} />
                </View>
                <View style={styles.answersSubContainer}>
                    <LessonLetterButton
                        isCorrectAnswer={isCorrectAnswer(question.answers![2])}
                        question={question.answers![2]}
                        color={Colors.BLUE}
                        isDisabled={isAnswerDisabled(question.answers![2])}
                        onPress={() => onAnswerSelect(question.answers![2])} />
                    <LessonLetterButton
                        isCorrectAnswer={isCorrectAnswer(question.answers![3])}
                        question={question.answers![3]}
                        color={Colors.PURPLE}
                        isDisabled={isAnswerDisabled(question.answers![3])}
                        onPress={() => onAnswerSelect(question.answers![3])} />
                </View>
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

export default LessonSelectOne;