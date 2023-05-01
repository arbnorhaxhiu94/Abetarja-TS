import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonNJQuestions: Question[] = [
    {
        type: "Tip",
        question: "Nj",
        audios: ["nj", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "nj", "madhe"],
        answers: ["N", "J", "Nj", "H"],
        correctAnswer: "Nj",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "nj",
        audios: ["nj", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "nj", "vogel"],
        answers: ["nj", "n", "j", "h"],
        correctAnswer: "nj",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "nj"],
        answers: ["n", "N", "nj", "j", "J", "Nj", "J", "n", "nj"],
        correctAnswer: ["Nj", "nj"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Një",
        audios: ["nj"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nj"],
        answers: ["Dy", "Një", "Njëri", "Tjetri"],
        correctAnswer: "Një"
    },
    {
        type: "Tip",
        question: "Njëri",
        audios: ["njeri"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["njeri"],
        answers: ["Dy", "Një", "Njëri", "Tjetri"],
        correctAnswer: "Njëri"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nj", "laps"],
        answers: ["Një laps", "Dy lapsa", "Një fletore", "Disa fletore"],
        correctAnswer: "Një laps"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nj", "fletore"],
        answers: ["Një laps", "Dy lapsa", "Një fletore", "Disa fletore"],
        correctAnswer: "Një fletore"
    },
    {
        type: "Write",
        question: "",
        audios: ["nj", "fletore"],
        answers: ["o", "y", "N", "i", "M", "j", "h", "f"],
        correctAnswer: "Një fletore",
        givenAnswer: ["", "", "ë", " ", "", "l", "e", "t", "", "r", "e"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["nj", "zog", LessonListenConstants.NULL, "ani", "e", "miri", "shkuan", "n", "mal", LessonListenConstants.NULL, "ata", "pane", "nj", "shtepi", LessonListenConstants.NULL, "nga", "aty", "vinte", "nj", "z", LessonListenConstants.NULL, "ata", "u", "afruan", "t", "frikesuar", LessonListenConstants.NEW_LINE, "por", "pane", "vetem", "nj", "zog", LessonListenConstants.NULL, "pastaj", "qeshen", "me", "njeri", "tjetrin"],
        answers: ['NJË', 'ZOG', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'shkuan', 'në', 'mal.', LessonListenConstants.NEW_LINE, 'Ata', 'panë', 'një', 'shtëpi.', LessonListenConstants.NEW_LINE, 'Nga', 'aty', 'vinte', 'një', 'zë.', LessonListenConstants.NEW_LINE, 'Ata', 'u', 'afruan', 'të', 'frikësuar.', LessonListenConstants.NEW_LINE, 'Por,', 'panë', 'vetëm', 'një', 'zog.', LessonListenConstants.NEW_LINE, 'Pastaj,', 'qeshën', 'me', 'njëri', 'tjetrin.']
    }
];