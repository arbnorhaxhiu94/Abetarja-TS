import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons from "../../../../assets/Icons";
import CustomButton from "../../../../components/CustomButton";
import LessonLetterButton from "../../../../components/LessonLetterButton";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import SoundPlayerListener from "../../../../config/SoundPlayerListener/SoundPlayerListener";
import Question from "../../../../models/Question";
import { styles } from "./styles";

interface LessonSelectMultipleProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonSelectMultiple: React.FC<LessonSelectMultipleProps> = ({ isFocused, color, question, onNextPress }) => {

    const [selectedCorrectAnswers, setSelectedCorrectAnswers] = useState<number[]>([]);
    const [selectedIncorrectAnswers, setSelectedIncorrectAnswers] = useState<number[]>([]);

    const isAnswerDisabled = (index: number): boolean => {
        return selectedIncorrectAnswers.includes(index) ||
            selectedCorrectAnswers.includes(index) ||
            selectedCorrectAnswers.length === 3;
    }

    const isCorrectAnswer = (index: number): boolean | null => {
        if (selectedCorrectAnswers.includes(index)) return true;
        else if (selectedIncorrectAnswers.includes(index)) return false;
        else return null;
    }

    const onAnswerSelect = (answer: string, index: number) => {
        if (question.correctAnswer!.includes(answer)) {SoundPlayerListener.playCorrectAnswerSound(); setSelectedCorrectAnswers(prev => [...prev, index]);}
        else {SoundPlayerListener.playIncorrectAnswerSound(); setSelectedIncorrectAnswers((prev => [...prev, index]));}
    }

    const getVoiceButtonColor = (): Colors => {
        if (selectedCorrectAnswers.length === 3) return Colors.GRAY;
        else return color;
    }

    const isQuestionCompleted = (): boolean => {
        if (selectedCorrectAnswers.length === 3) return true;
        else return false;
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
                    disabled={isQuestionCompleted()}
                    activeOpacity={0.9} 
                    onPress={playSound}
                    style={[styles.voiceButton, { shadowColor: getVoiceButtonColor() }]}>
                    {Icons.Voice({ color: getVoiceButtonColor(), size: 40 })}
                </TouchableOpacity>
            </View>
            <View style={styles.answersContainer}>
                <View style={styles.answersSubContainer}>
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(0)}
                        question={question.answers![0]}
                        color={Colors.PURPLE}
                        isDisabled={isAnswerDisabled(0)}
                        onPress={() => onAnswerSelect(question.answers![0], 0)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(1)}
                        question={question.answers![1]}
                        color={Colors.YELLOW}
                        isDisabled={isAnswerDisabled(1)}
                        onPress={() => onAnswerSelect(question.answers![1], 1)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(2)}
                        question={question.answers![2]}
                        color={Colors.DARK_GREEN}
                        isDisabled={isAnswerDisabled(2)}
                        onPress={() => onAnswerSelect(question.answers![2], 2)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                </View>
                <View style={styles.answersSubContainer}>
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(3)}
                        question={question.answers![3]}
                        color={Colors.RED}
                        isDisabled={isAnswerDisabled(3)}
                        onPress={() => onAnswerSelect(question.answers![3], 3)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(4)}
                        question={question.answers![4]}
                        color={Colors.BLUE}
                        isDisabled={isAnswerDisabled(4)}
                        onPress={() => onAnswerSelect(question.answers![4], 4)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(5)}
                        question={question.answers![5]}
                        color={Colors.ORANGE}
                        isDisabled={isAnswerDisabled(5)}
                        onPress={() => onAnswerSelect(question.answers![5], 5)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                </View>
                <View style={styles.answersSubContainer}>
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(6)}
                        question={question.answers![6]}
                        color={Colors.DARK_BLUE}
                        isDisabled={isAnswerDisabled(6)}
                        onPress={() => onAnswerSelect(question.answers![6], 6)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(7)}
                        question={question.answers![7]}
                        color={Colors.PINK}
                        isDisabled={isAnswerDisabled(7)}
                        onPress={() => onAnswerSelect(question.answers![7], 7)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                    <LessonLetterButton
                        checkIcon={"small"}
                        isCorrectAnswer={isCorrectAnswer(8)}
                        question={question.answers![8]}
                        color={Colors.GREEN}
                        isDisabled={isAnswerDisabled(8)}
                        onPress={() => onAnswerSelect(question.answers![8], 8)}
                        buttonStyle={styles.letterContainer}
                        textStyle={styles.letter} />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <CustomButton
                    disabled={!isQuestionCompleted()}
                    buttonText={Icons.ArrowRight({ color: Colors.WHITE, size: 20, style: { marginTop: 3 } })}
                    onPress={onNextPress}
                    shadowColor={Colors.LIGHT_GRAY}
                    backgroundColor={isQuestionCompleted() ? [color, color] : [Colors.GRAY, Colors.GRAY]}
                    shadowStyle={{ width: WINDOW.WIDTH - 40 }} />
            </View>
        </View>
    )
}

export default LessonSelectMultiple;