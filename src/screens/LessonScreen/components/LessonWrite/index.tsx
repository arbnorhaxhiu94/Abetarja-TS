import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons from "../../../../assets/Icons";
import CustomButton from "../../../../components/CustomButton";
import LessonLetterButton from "../../../../components/LessonLetterButton";
import LessonLetterContainer from "../../../../components/LessonLetterContainer";
import VoiceButton from "../../../../components/VoiceButton";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import SoundPlayerListener from "../../../../config/SoundPlayerListener/SoundPlayerListener";
import Question from "../../../../models/Question";
import { useAppSelector } from "../../../../store/store";
import { styles } from "./styles";

interface LessonWriteProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonWrite: React.FC<LessonWriteProps> = ({
    isFocused,
    color,
    question,
    onNextPress
}) => {

    const { backgroundColor } = useAppSelector(state => state.DLMode);

    const [userAnswer, setUserAnswer] = useState<string[]>(() => [...question.givenAnswer!]);
    const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState<boolean | null>(null);
    const [selectedCorrectAnswersIndexes, setSelectedCorrectAnswersIndexes] = useState<number[]>([]);
    const [selectedIncorrectAnswersIndexes, setSelectedIncorrectAnswersIndexes] = useState<number[]>([]);

    const colors = [
        Colors.BLUE, Colors.RED, Colors.GREEN, Colors.ORANGE, Colors.YELLOW, Colors.DARK_BLUE, 
        Colors.PURPLE, Colors.PINK, Colors.DARK_GREEN, Colors.BLUE, Colors.RED, Colors.GREEN, 
        Colors.ORANGE, Colors.YELLOW, Colors.DARK_BLUE, Colors.PURPLE, Colors.PINK, Colors.DARK_GREEN
    ];

    const isAnswerDisabled = (index: number): boolean => {
        return selectedIncorrectAnswersIndexes.includes(index) || 
                selectedCorrectAnswersIndexes.includes(index) || 
                isCorrectAnswerSelected !== null;
    }

    const isAnswerCompleted = () => {
        let answer = "";
        userAnswer.map(a => answer += a);
        if (answer === question.correctAnswer) setIsCorrectAnswerSelected(true);
    }

    const isCorrectAnswer = (index: number): boolean | null => {
        if (selectedCorrectAnswersIndexes.includes(index)) return true;
        else if (selectedIncorrectAnswersIndexes.includes(index)) return false;
        else return null;
    }

    const onAnswerSelect = (answer: string, index: number) => {
        if (isCorrectAnswerSelected) return;
        let nextLetterIndex = userAnswer!.findIndex(g => g === "");
        let nextLetterCorrectAnswer = question.correctAnswer![nextLetterIndex];
        if (answer === nextLetterCorrectAnswer) {
            SoundPlayerListener.playCorrectAnswerSound();
            userAnswer[nextLetterIndex] = answer;
            setUserAnswer(() => [...userAnswer]);
            setSelectedCorrectAnswersIndexes(prev => [...prev, index]);
        } else {
            SoundPlayerListener.playIncorrectAnswerSound();
            setSelectedIncorrectAnswersIndexes((prev => [...prev, index]));
            setTimeout(() => { setSelectedIncorrectAnswersIndexes((() => [])); }, 1000);
        }
    }

    const getVoiceButtonColor = (): Colors => {
        if (isCorrectAnswerSelected) return Colors.GRAY;
        else return color;
    }

    useEffect(() => { isAnswerCompleted(); }, [selectedCorrectAnswersIndexes]);

    const playSounds = () => {
        SoundPlayerListener.playMultipleSounds(question.audios!);
    }

    useEffect(() => {
        SoundPlayerListener.add();
        if (isFocused) playSounds();
        return () => { SoundPlayerListener.remove(); }
    }, [isFocused]);

    useEffect(() => { 
        return () => { setUserAnswer(() => []); } 
    }, []);

    return (
        <View style={[styles.screen, { backgroundColor }]}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <VoiceButton
                    disabled={isCorrectAnswerSelected !== null}
                    color={getVoiceButtonColor()}
                    onPress={playSounds} />
            </View>
            <View style={styles.answersContainer}>
                <View style={styles.answersSubContainer}>
                    {userAnswer.map((letter, index) => (
                        <LessonLetterContainer
                            key={index}
                            index={index}
                            letter={letter}
                            color={color}
                            size={userAnswer.length > 10 ? "small" : "normal"} />
                    ))}
                </View>
                <View style={styles.answersSubContainer}>
                    {question.answers!.map((answer, index) => (
                        <LessonLetterButton
                            key={index}
                            type={"2"}
                            isCorrectAnswer={isCorrectAnswer(index)}
                            question={answer}
                            color={colors[index]}
                            isDisabled={isAnswerDisabled(index)}
                            onPress={() => onAnswerSelect(answer, index)}
                            buttonStyle={styles.button}
                            textStyle={styles.buttonText}
                            checkIcon={"right"} />
                    ))}
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

export default LessonWrite;