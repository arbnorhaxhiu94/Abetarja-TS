import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonOQuestions: Question[] = [
    {
        type: "Tip",
        question: "O",
        audios: ["o", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "o", "madhe"],
        answers: ["I", "O", "A", "E"],
        correctAnswer: "O",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "o",
        audios: ["o", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "o", "vogel"],
        answers: ["e", "a", "o", "r"],
        correctAnswer: "o",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "o"],
        answers: ["O", "m", "a", "i", "o", "u", "n", "M", "o"],
        correctAnswer: ["O", "o"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Ora",
        audios: ["ora"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ora"],
        answers: ["Ana", "Ura", "Ora", "Miri"],
        correctAnswer: "Ora"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ora", "e", "re"],
        answers: ["Ora e re", "Ani e ora", "Miri me Anin", "Ura e re"],
        correctAnswer: "Ora e re"
    },
    {
        type: "Write",
        question: "",
        audios: ["ora", "e", "re"],
        answers: ["O", "m", "r", "u", "e"],
        correctAnswer: "Ora e re",
        givenAnswer: ["", "r", "a", " ", "e", " ", "", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ora", "ime1", LessonListenConstants.NULL, "ana", "mori", "oren", LessonListenConstants.NULL, "o", "ana", "ora", "ime1", LessonListenConstants.NULL, "mire", "rina", "na", "oren", LessonListenConstants.NULL, "rina", "mori", "oren", LessonListenConstants.NULL, "rina", "ana", "e1", "ora"],
        answers: ['ORA', 'IME', LessonListenConstants.NEW_LINE, 'Ana', 'mori', 'orën', LessonListenConstants.NEW_LINE, 'O', 'Ana,', 'ora', 'ime', LessonListenConstants.NEW_LINE, 'Mirë', 'Rina,', 'na', 'orën', LessonListenConstants.NEW_LINE, 'Rina', 'mori', 'orën', LessonListenConstants.NEW_LINE, 'Rina,', 'Ana', 'e', 'ora']
    }
];