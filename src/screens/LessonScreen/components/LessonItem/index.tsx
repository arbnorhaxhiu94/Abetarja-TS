import React from "react";
import { View } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Question from "../../../../models/Question";
import LessonListen from "../LessonListen";
import LessonSelectMultiple from "../LessonSelectMultiple";
import LessonSelectOne from "../LessonSelectOne";
import LessonSelectWord from "../LessonSelectWord";
import LessonTip from "../LessonTip";
import LessonWrite from "../LessonWrite";
import { styles } from "./styles";

interface LessonItemProps {
    isFocused: boolean
    color: Colors
    question: Question
    onNextPress(): void
}

const LessonItem: React.FC<LessonItemProps> = ({
    isFocused,
    color,
    question,
    onNextPress
}) => {

    const questionType = question.type;

    return (
        <View style={styles.questionItem}>
            {questionType === "Tip" ? <LessonTip isFocused={isFocused} question={question} color={color} onNextPress={onNextPress} />
            : questionType === "Select One" ? <LessonSelectOne isFocused={isFocused} question={question} color={color} onNextPress={onNextPress} />
            : questionType === "Select Multiple" ? <LessonSelectMultiple isFocused={isFocused} question={question} color={color} onNextPress={onNextPress} />
            : questionType === "Select Word" ? <LessonSelectWord isFocused={isFocused} question={question} color={color} onNextPress={onNextPress} />
            : questionType === "Write" ? <LessonWrite isFocused={isFocused} question={question} color={color} onNextPress={onNextPress} />
            : questionType === "Listen" ? <LessonListen isFocused={isFocused} question={question} color={color} onNextPress={onNextPress} />
            : null}
        </View>
    )
}

export default LessonItem;