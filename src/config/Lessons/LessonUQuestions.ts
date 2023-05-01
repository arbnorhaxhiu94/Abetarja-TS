import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonUQuestions: Question[] = [
    {
        type: "Tip",
        question: "U",
        audios: ["shkronja_u"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_u_pytje"],
        answers: ["A", "Ë", "N", "U"],
        correctAnswer: "U"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_u_prek"],
        answers: ["A", "U", "Ë", "U", "E", "I", "U", "N", "Ë"],
        correctAnswer: ["U"]
    },
    {
        type: "Tip",
        question: "UNË",
        audios: ["une"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["une"],
        answers: ["NËNA", "UNË", "AI", "ENI"],
        correctAnswer: "UNË"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["une", "e", "nena"],
        answers: ["NËNA, ENI", "UNË E NËNA", "NËNA E ANA", "NE E ANI"],
        correctAnswer: "UNË E NËNA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["une", "e", "eni"],
        answers: ["UNË E NËNA", "NE E NËNA", "NËNA E ANA", "UNË E ENI"],
        correctAnswer: "UNË E ENI"
    },
    {
        type: "Write",
        question: "",
        audios: ["une", "e", "nena"],
        answers: ["I", "U", "Ë", "E", "N"],
        correctAnswer: "UNË E NËNA",
        givenAnswer: ["", "N", "Ë", " ", "", " ", "N", "Ë", "", "A"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["une", "e", "nena", LessonListenConstants.NULL, "une", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "une", "mesoj2", LessonListenConstants.NULL, "nene", "na", "lapsin", LessonListenConstants.NULL, "une", "nena", "nena", "une"],
        answers: ["UNË", "E", "NËNA", LessonListenConstants.NEW_LINE, "UNË", "E", "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "UNË", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "NËNË", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "UNË", "NËNA,", "NËNA", "UNË"]
    }
];