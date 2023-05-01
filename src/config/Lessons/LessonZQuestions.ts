import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonZQuestions: Question[] = [
    {
        type: "Tip",
        question: "Z",
        audios: ["z", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "z", "madhe"],
        answers: ["Z", "S", "F", "E"],
        correctAnswer: "Z",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "z",
        audios: ["z", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "z", "vogel"],
        answers: ["h", "s", "z", "k"],
        correctAnswer: "z",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "z"],
        answers: ["sh", "z", "Z", "o", "Z", "S", "s", "p", "T"],
        correctAnswer: ["Z", "z"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Zogu",
        audios: ["zogu"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["zogu"],
        answers: ["Lopa", "Zogu", "Ariu", "Kali"],
        correctAnswer: "Zogu"
    },
    {
        type: "Tip",
        question: "Tezja",
        audios: ["tezja"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["tezja"],
        answers: ["Nëna", "Daja", "Halla", "Tezja"],
        correctAnswer: "Tezja"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["zogu", "i", "lire"],
        answers: ["Lumi i kaltër", "Kali në mal", "Zogu i lirë", "Ariu i kaftë"],
        correctAnswer: "Zogu i lirë"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ne", "te", "tezja"],
        answers: ["Ne te tezja", "Daja jonë", "Ani te tezja", "Ne te halla"],
        correctAnswer: "Ne te tezja"
    },
    {
        type: "Write",
        question: "",
        audios: ["zogu", "i", "lire"],
        answers: ["S", "u", "Z", "i", "p", "h", "j", "l"],
        correctAnswer: "Zogu i lirë",
        givenAnswer: ["", "o", "g", "", " ", "", " ", "", "i", "r", "ë"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["zogu", "i", "lire", LessonListenConstants.NULL, "zogu", "fluturon", "i", "lire", LessonListenConstants.NULL, "ana", "e", "rina", "pane", "zogun", LessonListenConstants.NULL, "zogu", "zbriti", "n", "toke", LessonListenConstants.NULL, "ato", "iu", "afruan", "zogut", LessonListenConstants.NEW_LINE, "por", "zogu", "u", "frikesua", LessonListenConstants.NULL, "zogu", "filloi", "t", "fluturoje", "perseri"],
        answers: ['ZOGU', 'I', 'LIRË', LessonListenConstants.NEW_LINE, 'Zogu', 'fluturon', 'i', 'lirë.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Rina', 'panë', 'zogun.', LessonListenConstants.NEW_LINE, 'Zogu', 'zbriti', 'në', 'tokë.', LessonListenConstants.NEW_LINE, 'Ato', 'iu', 'afruan', 'zogut.', LessonListenConstants.NEW_LINE, 'Por,', 'zogu', 'u', 'frikësua.', LessonListenConstants.NEW_LINE, 'Zogu', 'filloi', 'të', 'fluturojë', 'përsëri.']
    }
];