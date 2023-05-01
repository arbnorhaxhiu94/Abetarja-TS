import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonËQuestions: Question[] = [
    {
        type: "Tip",
        question: "Ë",
        audios: ["shkronja_e_pa_za"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_e_pa_za_pytje"],
        answers: ["A", "Ë", "N", "E"],
        correctAnswer: "Ë"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_e_pa_za_prek"],
        answers: ["A", "E", "Ë", "Ë", "A", "I", "Ë", "N", "I"],
        correctAnswer: ["Ë"]
    },
    {
        type: "Tip",
        question: "NË",
        audios: ["n"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["n"],
        answers: ["NË", "Ë", "AI", "ANA"],
        correctAnswer: "NË"
    },
    {
        type: "Tip",
        question: "NËNA",
        audios: ["nena"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nena"],
        answers: ["NE", "Ë", "NËNA", "A"],
        correctAnswer: "NËNA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ['nena', 'e', 'ana'],
        answers: ["NËNA, ENI", "NANA, NANI", "NËNA E ANA", "NE E ANI"],
        correctAnswer: "NËNA E ANA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ['ne', 'e', 'nena'],
        answers: ["NËNA, ENI", "NE E NËNA", "NËNA E ANA", "NE E ANI"],
        correctAnswer: "NE E NËNA"
    },
    {
        type: "Write",
        question: "",
        audios: ["ne", "e", "nena"],
        answers: ["I", "N", "Ë", "E", "A"],
        correctAnswer: "NE E NËNA",
        givenAnswer: ["", "E", " ", "E", " ", "N", "", "N", "A"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["nena", LessonListenConstants.NULL, "ne", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "ana", "e", "ani", "mesojne", LessonListenConstants.NULL, "nene", "na", "lapsin", LessonListenConstants.NULL, "nena", "ana", "e", "ani"],
        answers: ["NËNA", LessonListenConstants.NEW_LINE, "NE", "E", "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "ANA", "E", "ANI", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "NËNË,", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "NËNA,", "ANA", "E", "ANI"],
    }
];