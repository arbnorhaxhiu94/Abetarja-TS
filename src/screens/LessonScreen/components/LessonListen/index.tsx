import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Icons, { IconDirectoriesType } from "../../../../assets/Icons";
import CustomButton from "../../../../components/CustomButton";
import CustomText from "../../../../components/CustomText";
import LessonListenConstants from "../../../../config/Constants/LessonListenConstants.enum";
import SoundPlayerListener from "../../../../config/SoundPlayerListener/SoundPlayerListener";
import Question from "../../../../models/Question";
import { styles } from "./styles";

interface LessonListenProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonListen: React.FC<LessonListenProps> = ({
    isFocused,
    color,
    question,
    onNextPress
}) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [nullIndexes, setNullIndexes] = useState<number[]>([]);

    const getDirectoryName = (word: string) => word.split(":")[1].split("|")[0] as IconDirectoriesType;

    const getIconName = (word: string) => word.split(":")[1].split("|")[1];

    const getColor = (currentIndex: number, index: number) => {
        let i = 0;
        nullIndexes.forEach(x => index >= x && i++);
        if (currentIndex === index - i) return color;
        else return Colors.BLACK;
    }

    const isNextButtonDisabled = (currentIndex: number): boolean => {
        let sounds = question.audios!.filter(q => q !== LessonListenConstants.NULL);
        if (currentIndex === sounds.length - 1) return false;
        else return true;
    }

    const onReplayPress = () => {
        SoundPlayerListener.add();
        playSounds();
    }

    const playSounds = () => {
        SoundPlayerListener.playMultipleSounds(question.audios!);
        question.audios!.filter(q => q !== LessonListenConstants.NULL).forEach((_, index) => {
            setTimeout(() => { setActiveIndex(index); }, 1000*index);
        });
    }

    useEffect(() => {
        SoundPlayerListener.add();
        if (isFocused) playSounds();
        return () => { SoundPlayerListener.remove(); }
    }, [isFocused]);

    useEffect(() => {
        let nullIndexes: number[] = [];
        question.audios!.forEach((q, i) => q === LessonListenConstants.NULL && nullIndexes.push(i) );        
        setNullIndexes(() => [...nullIndexes]);
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.storyContainer}>
                {question.answers!.map((word, index) => word === LessonListenConstants.NEW_LINE ? (
                    <View 
                        key={index} 
                        style={styles.newLineView} />
                ) : word.includes("icon") ?  (
                    <View 
                        key={index} 
                        style={{ marginRight: 5 }}>
                        {Icons.Other(getDirectoryName(word), getIconName(word), getColor(activeIndex, index))}
                    </View>
                ) : (
                    <CustomText 
                        key={index}
                        text={word}
                        color={getColor(activeIndex, index)}
                        style={styles.text} />
                ))}
            </View>
            <CustomButton
                disabled={isNextButtonDisabled(activeIndex)}
                buttonText={Icons.Play({ color: Colors.WHITE, size: 20, style: { marginTop: 3 } })}
                onPress={onReplayPress}
                shadowColor={color}
                backgroundColor={[color, color]}
                shadowStyle={styles.replayButton} />
            <CustomButton
                disabled={isNextButtonDisabled(activeIndex)}
                buttonText={Icons.ArrowRight({ color: Colors.WHITE, size: 20, style: { marginTop: 3 } })}
                onPress={onNextPress}
                shadowColor={color}
                backgroundColor={[color, color]}
                shadowStyle={styles.nextButton} />
        </View>
    )
}

export default LessonListen;