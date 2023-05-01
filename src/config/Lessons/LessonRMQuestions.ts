import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonRMQuestions: Question[] = [
    {
        type: "Tip",
        question: "R",
        audios: ["r", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "r", "madhe"],
        answers: ["U", "A", "R", "I"],
        correctAnswer: "R",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "r",
        audios: ["r", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "r", "vogel"],
        answers: ["r", "a", "i", "ë"],
        correctAnswer: "r",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "r"],
        answers: ["U", "r", "Ë", "r", "A", "u", "e", "R", "i"],
        correctAnswer: ["R", "r"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "M",
        audios: ["m", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "m", "madhe"],
        answers: ["M", "U", "R", "I"],
        correctAnswer: "M",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "m",
        audios: ["m", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "m", "vogel"],
        answers: ["r", "a", "m", "i"],
        correctAnswer: "m",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "m"],
        answers: ["i", "m", "n", "M", "ë", "m", "I", "N", "r"],
        correctAnswer: ["M", "m"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Ura",
        audios: ["ura"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ura"],
        answers: ["Muri", "Ura", "Unë", "Eni"],
        correctAnswer: "Ura"
    },
    {
        type: "Tip",
        question: "Muri",
        audios: ["muri"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["muri"],
        answers: ["Muri", "Ura", "Unë", "Eni"],
        correctAnswer: "Muri"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["muri", "i", "ri"],
        answers: ["Ura e re", "Nëna e Ani", "Muri i ri", "Ana e Ani"],
        correctAnswer: "Muri i ri"
    },
    {
        type: "Write",
        question: "",
        audios: ["muri", "i", "ri"],
        answers: ["i", "E", "r", "M", "ë"],
        correctAnswer: "Muri i ri",
        givenAnswer: ["", "u", "r", "i", " ", "", " ", "", "i"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "era", "era", LessonListenConstants.NULL, "muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "muri", "ura"],
        answers: ["Muri", "i", "ri", LessonListenConstants.NEW_LINE, "Mira,", "Miri", "e", "nëna", "në", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "Era,", "era!", LessonListenConstants.NEW_LINE, "Muri", "i", "ri", LessonListenConstants.NEW_LINE, "Mira,", "Miri,", "muri,", "ura"]
    }
];