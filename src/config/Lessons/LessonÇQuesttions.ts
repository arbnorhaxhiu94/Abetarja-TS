import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonÇQuestions: Question[] = [
    {
        type: "Tip",
        question: "Ç",
        audios: ["qq", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "qq", "madhe"],
        answers: ["H", "Ç", "O", "C"],
        correctAnswer: "Ç",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "ç",
        audios: ["qq", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "qq", "vogel"],
        answers: ["c", "d", "ç", "u"],
        correctAnswer: "ç",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "qq"],
        answers: ["Ç", "H", "ç", "I", "c", "D", "c", "Ç", "f"],
        correctAnswer: ["Ç", "ç"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Çekiçi",
        audios: ["qqekiqqi"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["qqekiqqi"],
        answers: ["Lapsi", "Muri", "Çekiçi", "Treni"],
        correctAnswer: "Çekiçi"
    },
    {
        type: "Tip",
        question: "Çaj",
        audios: ["qqaj"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["qqaj"],
        answers: ["Çaj", "Lule", "Abetare", "Ora"],
        correctAnswer: "Çaj"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["une", "pi", "qqaj"],
        answers: ["Lumi i kaltër", "Çekiçi i Anit", "Lulet e bukura", "Unë pi çaj"],
        correctAnswer: "Unë pi çaj"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["qqekiqqi", "i", "anit"],
        answers: ["Lumi i kaltër", "Çekiçi i Anit", "Lulet e bukura", "Unë pi çaj"],
        correctAnswer: "Çekiçi i Anit"
    },
    {
        type: "Write",
        question: "",
        audios: ["qqekiqqi", "i", "anit"],
        answers: ["H", "A", "ç", "e", "Ç", "b"],
        correctAnswer: "Çekiçi i Anit",
        givenAnswer: ["", "e", "k", "i", "", "i", " ", "i", " ", "", "n", "i", "t"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ana", "u", "ftoh", LessonListenConstants.NULL, "ana", "si", "je", LessonListenConstants.NULL, "nene", "u", "ftoha", "pak", LessonListenConstants.NULL, "mire", "pra", "doo", "t", "t", "bej", "qqaj", LessonListenConstants.NULL, "ana", "pi", "qqajin", LessonListenConstants.NULL, "ana", "ben", "m", "mire"],
        answers: ['ANA', 'U', 'FTOH', LessonListenConstants.NEW_LINE, 'Ana,', 'si', 'je?', LessonListenConstants.NEW_LINE, 'Nënë', 'u', 'ftoha', 'pak', LessonListenConstants.NEW_LINE, 'Mirë', 'pra,', 'do', 'të', 'të', 'bëj', 'çaj.', LessonListenConstants.NEW_LINE, 'Ana', 'pi', 'çajin.', LessonListenConstants.NEW_LINE, 'Ana', 'bën', 'më', 'mirë.']
    }
];