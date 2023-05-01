import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonËUQuestions: Question[] = [
    {
        type: "Tip",
        question: "Ë",
        audios: ["e_pz", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "e_pz", "madhe"],
        answers: ["Ë", "A", "N", "E"],
        correctAnswer: "Ë",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "ë",
        audios: ["e_pz", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "e_pz", "vogel"],
        answers: ["i", "ë", "Ë", "a"],
        correctAnswer: "ë",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_e_pa_za_prek"],
        answers: ["ë", "E", "Ë", "a", "A", "i", "e", "ë", "i"],
        correctAnswer: ["Ë", "ë"]
    },
    {
        type: "Tip",
        question: "U",
        audios: ["u", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "u", "madhe"],
        answers: ["I", "U", "A", "Ë"],
        correctAnswer: "U",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "u",
        audios: ["u", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "u", "vogel"],
        answers: ["ë", "e", "a", "u"],
        correctAnswer: "u",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_u_prek"],
        answers: ["u", "e", "n", "U", "i", "ë", "A", "e", "u"],
        correctAnswer: ["U", "u"]
    },
    {
        type: "Tip",
        question: "Unë",
        audios: ["une"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["une"],
        answers: ["Ana", "Eni", "Unë", "Ai"],
        correctAnswer: "Unë"
    },
    {
        type: "Tip",
        question: "Nëna",
        audios: ["nena"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nena"],
        answers: ["Nëna", "Ena", "Nana", "Ne"],
        correctAnswer: "Nëna"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["une", "e", "nena"],
        answers: ["Unë e nëna", "Ne", "Nëna", "Ena, Eni"],
        correctAnswer: "Unë e nëna"
    },
    {
        type: "Write",
        question: "",
        audios: ["une", "e", "nena"],
        answers: ["a", "U", "ë", "i", "ë", "A"],
        correctAnswer: "Unë e nëna",
        givenAnswer: ["", "n", "", " ", "e", " ", "n", "", "n", "a"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["une", "e", "nena", LessonListenConstants.NULL, "une", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "une", "mesoj2", LessonListenConstants.NULL, "nene", "na", "lapsin", LessonListenConstants.NULL, "une", "nena", "nena", "une"],
        answers: ["Unë", "e", "nëna", LessonListenConstants.NEW_LINE, "Unë", "e", "nëna", "në", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "Unë", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "Nënë", "na", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "Unë", "nëna,", "nëna", "unë"]
    }
];