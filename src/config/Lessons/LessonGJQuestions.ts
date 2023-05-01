import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonGJQuestions: Question[] = [
    {
        type: "Tip",
        question: "Gj",
        audios: ["gj", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "gj", "madhe"],
        answers: ["J", "Gj", "Nj", "G"],
        correctAnswer: "Gj",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "gj",
        audios: ["gj", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "gj", "vogel"],
        answers: ["gj", "g", "nj", "j"],
        correctAnswer: "gj",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "gj"],
        answers: ["g", "G", "gj", "nj", "Gj", "g", "gj", "G", "j"],
        correctAnswer: ["Gj", "gj"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Gjeli",
        audios: ["gjeli"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["gjeli"],
        answers: ["Pula", "Gjeli", "Zogu", "Ngjyra"],
        correctAnswer: "Gjeli"
    },
    {
        type: "Tip",
        question: "Ngjyra",
        audios: ["ngjyra"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ngjyra"],
        answers: ["Pula", "Gjeli", "Zogu", "Ngjyra"],
        correctAnswer: "Ngjyra"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ngjyra", "e", "kuqe"],
        answers: ["Ngjyra e kuqe", "Zogu fluturon", "Gjeli e pula", "Ariu i zi"],
        correctAnswer: "Ngjyra e kuqe"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["gjeli", "e", "pula"],
        answers: ["Ngjyra e kuqe", "Zogu fluturon", "Gjeli e pula", "Ariu i zi"],
        correctAnswer: "Gjeli e pula"
    },
    {
        type: "Write",
        question: "",
        audios: ["gjeli", "e", "pula"],
        answers: ["p", "y", "g", "G", "j", "u", "a"],
        correctAnswer: "Gjeli e pula",
        givenAnswer: ["", "", "e", "l", "i", " ", "e", " ", "", "u", "l", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ngjyra", "e", "kuqe", LessonListenConstants.NULL, "ana", "te", "tezja", "e", "saj", LessonListenConstants.NULL, "tezja", "e", "anes", "ka", "plot", "pula", LessonListenConstants.NULL, "pulat", "i", "ruan", "gjeli", LessonListenConstants.NULL, "pulat", "kane", "ngjyre", "t", "kuqe", LessonListenConstants.NEW_LINE, "gjeli", "ka", "ngjyre", "te", "bardhe"],
        answers: ['NGJYRA', 'E', 'KUQE', LessonListenConstants.NEW_LINE, 'Ana', 'te', 'tezja', 'e', 'saj.', LessonListenConstants.NEW_LINE, 'Tezja', 'e', 'Anës', 'ka', 'plot', 'pula.', LessonListenConstants.NEW_LINE, 'Pulat', 'i', 'ruan', 'gjeli.', LessonListenConstants.NEW_LINE, 'Pulat', 'kanë', 'ngjyrë', 'të', 'kuqe.', LessonListenConstants.NEW_LINE, 'Gjeli', 'ka', 'ngjyrë', 'të', 'bardhë.']
    }
];