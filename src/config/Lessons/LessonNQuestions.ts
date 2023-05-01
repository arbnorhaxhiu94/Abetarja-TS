import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonNQuestions: Question[] = [
    {
        type: "Tip",
        question: "N",
        audios: ["shkronja_n1"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_n_pytje"],
        answers: ["A", "I", "N", "E"],
        correctAnswer: "N"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_n_prek"],
        answers: ["A", "I", "N", "E", "A", "N", "I", "N", "A"],
        correctAnswer: ["N"]
    },
    {
        type: "Tip",
        question: "NA",
        audios: ["na"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["na"],
        answers: ["AI", "AN", "NA", "IA"],
        correctAnswer: "NA"
    },
    {
        type: "Tip",
        question: "ANA",
        audios: ["ana"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["ana"],
        answers: ["ANA", "A", "INA", "NA"],
        correctAnswer: "ANA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nana"],
        answers: ["NA", "ANA", "NANA", "NA, ANA"],
        correctAnswer: "NANA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["na", "ana"],
        answers: ["NANA", "ANA", "NINA", "NA, ANA"],
        correctAnswer: "NA, ANA"
    },
    {
        type: "Tip",
        question: "ANI",
        audios: ["ani"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ani"],
        answers: ["ANA", "ANI", "INA", "NANA"],
        correctAnswer: "ANI"
    },
    {
        type: "Tip",
        question: "NANI",
        audios: ["nani"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nani"],
        answers: ["NANA", "ANI", "INA", "NANI"],
        correctAnswer: "NANI"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nina"],
        answers: ["NINA", "NANI", "NA, ANI", "ANI, ANI"],
        correctAnswer: "NINA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ana", "ani"],
        answers: ["NINA", "NANI", "NA, ANI", "ANA, ANI"],
        correctAnswer: "ANA, ANI"
    },
    {
        type: "Write",
        question: "",
        audios: ["ana"],
        answers: ["I", "N", "A"],
        correctAnswer: "ANA",
        givenAnswer: ["A", "", "A"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ana", "ani", LessonListenConstants.NULL, "ana", "na", "topin", LessonListenConstants.NULL, "ani", "na", "lapsin", LessonListenConstants.NULL, "a", "ana", "a", "ani"],
        answers: ["ANA,", "ANI", LessonListenConstants.NEW_LINE, "ANA,", "NA", LessonListenConstants.BALL_ICON, LessonListenConstants.NEW_LINE, "ANI,", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "A", "ANA", "A", "ANI"],
    }
]