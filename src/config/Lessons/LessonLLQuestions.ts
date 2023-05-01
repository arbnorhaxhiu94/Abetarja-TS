import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonLLQuestions: Question[] = [
    {
        type: "Tip",
        question: "Ll",
        audios: ["ll", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "ll", "madhe"],
        answers: ["H", "Ll", "M", "L"],
        correctAnswer: "Ll",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "ll",
        audios: ["ll", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "ll", "vogel"],
        answers: ["l", "ll", "i", "h"],
        correctAnswer: "ll",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "ll"],
        answers: ["H", "ll", "j", "I", "Ll", "M", "ll", "K", "N"],
        correctAnswer: ["Ll", "ll"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Halla",
        audios: ["halla"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["halla"],
        answers: ["Nëna", "Motra", "Halla", "Babai"],
        correctAnswer: "Halla"
    },
    {
        type: "Tip",
        question: "Futboll",
        audios: ["futboll"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["futboll"],
        answers: ["Halla", "Lulet", "Lumi", "Futboll"],
        correctAnswer: "Futboll"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["halla", "e", "anit"],
        answers: ["Ura me lum", "Halla e Anit", "Treni i ri", "Çekiçi i Anit"],
        correctAnswer: "Halla e Anit"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["miri", "luan1", "futboll"],
        answers: ["Miri luan futboll", "Topi i Mirit", "Miri e Ani", "Balonat e bukura"],
        correctAnswer: "Miri luan futboll"
    },
    {
        type: "Write",
        question: "",
        audios: ["miri", "luan1", "futboll"],
        answers: ["l", "T", "l", "p", "M", "l"],
        correctAnswer: "Miri luan futboll",
        givenAnswer: ["", "i", "r", "i", " ", "", "u", "a", "n", " ", "f", "u", "t", "b", "o", "", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ne", "te", "halla", LessonListenConstants.NULL, "ana", "ani", "e", "rina", "te", "halla", LessonListenConstants.NULL, "halle", "ne", "t", "sollem", "ca", "lule", LessonListenConstants.NULL, "halla", "falenderon", "ata", LessonListenConstants.NULL, "ana", "ani", "rina", "e", "duan", "hallen"],
        answers: ['NE', 'TE', 'HALLA', LessonListenConstants.NEW_LINE, 'Ana', 'Ani', 'e', 'Rina', 'te', 'halla.', LessonListenConstants.NEW_LINE, 'Hallë,', 'ne', 'të', 'sollëm', 'ca', 'lule.', LessonListenConstants.NEW_LINE, 'Halla', 'falënderon', 'ata.', LessonListenConstants.NEW_LINE, 'Ana,', 'Ani,', 'Rina', 'e', 'duan', 'hallën.']
    }
];