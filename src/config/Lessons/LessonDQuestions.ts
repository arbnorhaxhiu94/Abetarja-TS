import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonDQuestions: Question[] = [
    {
        type: "Tip",
        question: "D",
        audios: ["d1", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "d1", "madhe"],
        answers: ["O", "D", "R", "K"],
        correctAnswer: "D",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "d",
        audios: ["d1", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "d1", "vogel"],
        answers: ["l", "h", "d", "m"],
        correctAnswer: "d",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "d1"],
        answers: ["H", "d", "j", "D", "r", "k", "P", "d", "a"],
        correctAnswer: ["D", "d"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Daja",
        audios: ["daja"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["daja"],
        answers: ["Nana", "Daja", "Motra", "Ora"],
        correctAnswer: "Daja"
    },
    {
        type: "Tip",
        question: "Dele",
        audios: ["dele"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["dele"],
        answers: ["Dele", "Ani", "Ora", "Miu"],
        correctAnswer: "Dele"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["daja", "i", "anit"],
        answers: ["Treni te ura", "Topi i ri", "Daja i Anit", "Ora e mirë"],
        correctAnswer: "Daja i Anit"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ani", "n", "dere"],
        answers: ["Ani e Ana", "Daja te nëna", "Ani te daja", "Ani në derë"],
        correctAnswer: "Ani në derë"
    },
    {
        type: "Write",
        question: "",
        audios: ["daja", "i", "anit"],
        answers: ["i", "m", "t", "o", "D", "k"],
        correctAnswer: "Daja i Anit",
        givenAnswer: ["", "a", "j", "a", " ", "", " ", "A", "n", "i", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["daja", "i", "anit", LessonListenConstants.NULL, "daja", "i", "anit", "jeton", "n", "mal", LessonListenConstants.NULL, "ai", "ka", "plot", "dele", LessonListenConstants.NULL, "ani", "e", "nderon", "dajen", "e", "tij"],
        answers: ['DAJA', 'I', 'ANIT', LessonListenConstants.NEW_LINE, 'Daja', 'i', 'Anit', 'jeton', 'në', 'mal', LessonListenConstants.NEW_LINE, 'Ai', 'ka', 'plot', 'dele', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'nderon', 'dajën', 'e', 'tij']
    }
];