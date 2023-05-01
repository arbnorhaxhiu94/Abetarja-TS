import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonKQuestions: Question[] = [
    {
        type: "Tip",
        question: "K",
        audios: ["k", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "k", "madhe"],
        answers: ["T", "M", "E", "K"],
        correctAnswer: "K",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "k",
        audios: ["k", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "k", "vogel"],
        answers: ["k", "l", "o", "n"],
        correctAnswer: "k",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "k"],
        answers: ["k", "l", "O", "K", "t", "u", "ë", "K", "R"],
        correctAnswer: ["K", "k"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Kali",
        audios: ["kali"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["kali"],
        answers: ["Treni", "Ora", "Kali", "Ariu"],
        correctAnswer: "Kali"
    },
    {
        type: "Tip",
        question: "Kaltër",
        audios: ["kalter"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["kalter"],
        answers: ["Nëna", "Kaltër", "Kali", "Muri"],
        correctAnswer: "Kaltër"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["kali", "i", "kalter"],
        answers: ["Kali i kaltër", "Lulet e Mirit", "Unë e Ani", "Ne e kali"],
        correctAnswer: "Kali i kaltër"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ani", "e", "kali"],
        answers: ["Ura me lum", "Ora e Mirit", "Treni te ura", "Ani e kali"],
        correctAnswer: "Ani e kali"
    },
    {
        type: "Write",
        question: "",
        audios: ["kali", "i", "kalter"],
        answers: ["a", "t", "k", "u", "K"],
        correctAnswer: "Kali i kaltër",
        givenAnswer: ["", "a", "l", "i", " ", "i", " ", "", "a", "l", "", "ë", "r"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["kali", "n", "mal", LessonListenConstants.NULL, "kali", "im", "iku", "n", "mal", LessonListenConstants.NULL, "une", "n", "mal", LessonListenConstants.NULL, "ku", "ike", "o", "kali", "im", LessonListenConstants.NULL, "une", "mora", "kalin"],
        answers: ['KALI', 'NË', 'MAL', LessonListenConstants.NEW_LINE, 'Kali', 'im', 'iku', 'në', 'mal', LessonListenConstants.NEW_LINE, 'Unë', 'në', 'mal', LessonListenConstants.NEW_LINE, 'Ku', 'ike,', 'o', 'kali', 'im?', LessonListenConstants.NEW_LINE, 'Unë', 'mora', 'kalin']
    }
];