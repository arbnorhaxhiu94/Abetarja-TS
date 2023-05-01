import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonANQuestions: Question[] = [
    {
        type: "Tip",
        question: "A",
        audios: ["a", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "a", "madhe"],
        answers: ["I", "A", "N", "E"],
        correctAnswer: "A",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "a",
        audios: ["a", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "a", "vogel"],
        answers: ["n", "A", "a", "N"],
        correctAnswer: "a",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_a_prek"],
        answers: ["I", "E", "A", "a", "E", "I", "a", "N", "n"],
        correctAnswer: ["A", "a"]
    },
    {
        type: "Tip",
        question: "N",
        audios: ["n", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "n", "madhe"],
        answers: ["I", "A", "N", "E"],
        correctAnswer: "N",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "n",
        audios: ["n", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "n", "vogel"],
        answers: ["n", "A", "a", "N"],
        correctAnswer: "n",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_n_prek"],
        answers: ["I", "E", "n", "a", "E", "I", "a", "N", "n"],
        correctAnswer: ["N", "n"]
    },
    {
        type: "Tip",
        question: "Na",
        audios: ["na"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["na"],
        answers: ["a", "A", "Na", "n"],
        correctAnswer: "Na"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ana"],
        answers: ["Ana", "Na", "Nana", "A"],
        correctAnswer: "Ana"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["a", "ana"],
        answers: ["A, Ana", "N", "NËNA E ANA", "NE E ANI"],
        correctAnswer: "A, Ana"
    },
    {
        type: "Write",
        question: "",
        audios: ["ana"],
        answers: ["n", "a", "A"],
        correctAnswer: "Ana",
        givenAnswer: ["A", "", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["a", "a", "a", LessonListenConstants.NULL, "na", "na", "na", LessonListenConstants.NULL, "ana", "ana", "ana", LessonListenConstants.NULL, "ana", "na", "lapsin"],
        answers: ["A", "a", "a", LessonListenConstants.NEW_LINE, "Na", "na", "na", LessonListenConstants.NEW_LINE, "Ana", "Ana", "Ana", LessonListenConstants.NEW_LINE, "Ana,", "na", LessonListenConstants.PENCIL_ICON]
    }
];