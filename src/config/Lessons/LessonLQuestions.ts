import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonLQuestions: Question[] = [
    {
        type: "Tip",
        question: "L",
        audios: ["l", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "l", "madhe"],
        answers: ["U", "R", "A", "L"],
        correctAnswer: "L",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "l",
        audios: ["l", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "l", "vogel"],
        answers: ["a", "l", "i", "r"],
        correctAnswer: "l",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "l"],
        answers: ["a", "l", "M", "u", "t", "L", "l", "u", "E"],
        correctAnswer: ["L", "l"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Lumi",
        audios: ["lumi"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["lumi"],
        answers: ["Lumi", "Ura", "Muri", "Rina"],
        correctAnswer: "Lumi"
    },
    {
        type: "Tip",
        question: "Lulet",
        audios: ["lulet"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["lulet"],
        answers: ["Era", "Miri", "Lulet", "Treni"],
        correctAnswer: "Lulet"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["lulet", "e", "mirit1"],
        answers: ["Nëna e Ani", "Lulet e Mirit", "Ena e Ani", "Ne e Miri"],
        correctAnswer: "Lulet e Mirit"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ne", "te", "lumi"],
        answers: ["Ora e re", "Treni i ri", "Motra ime", "Ne te lumi"],
        correctAnswer: "Ne te lumi"
    },
    {
        type: "Write",
        question: "",
        audios: ["ne", "te", "lumi"],
        answers: ["r", "l", "t", "i", "N"],
        correctAnswer: "Ne te lumi",
        givenAnswer: ["", "e", " ", "", "e", " ", "", "u", "m", "i"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ne", "n", "lum", LessonListenConstants.NULL, "mira", "e", "ana", "n", "lum", LessonListenConstants.NULL, "rina", "te", "lulet", LessonListenConstants.NULL, "o", "mira", LessonListenConstants.NULL, "mira", "na", "lulet", LessonListenConstants.NULL, "mira", "ana", "e", "rina"],
        answers: ['NE', 'NË', 'LUM', LessonListenConstants.NEW_LINE, 'Mira', 'e', 'Ana', 'në', 'lum', LessonListenConstants.NEW_LINE, 'Rina', 'te', 'lulet', LessonListenConstants.NEW_LINE, 'O,', 'Mira!', LessonListenConstants.NEW_LINE, 'Mira,', 'na', 'lulet', LessonListenConstants.NEW_LINE, 'Mira', 'Ana', 'e', 'Rina']
    }
];