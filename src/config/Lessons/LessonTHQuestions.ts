import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonTHQuestions: Question[] = [
    {
        type: "Tip",
        question: "Th",
        audios: ["th", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "th", "madhe"],
        answers: ["DH", "H", "Th", "T"],
        correctAnswer: "Th",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "th",
        audios: ["th", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "th", "vogel"],
        answers: ["h", "th", "t", "dh"],
        correctAnswer: "th",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "th"],
        answers: ["t", "T", "th", "th", "T", "dh", "Th", "h", "dh"],
        correctAnswer: ["Th", "th"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Gjethet",
        audios: ["gjethet"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["gjethet"],
        answers: ["Tha", "Gjeli", "Gjethet", "Tani"],
        correctAnswer: "Gjethet"
    },
    {
        type: "Tip",
        question: "Tha",
        audios: ["tha"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["tha"],
        answers: ["Tha", "Gjeli", "Gjethet", "Tani"],
        correctAnswer: "Tha"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["mire", "tha", "nena"],
        answers: ["Gjethet në tokë", "Gjeli thërret", '"Mirë." - tha nëna', "Treni te ura"],
        correctAnswer: '"Mirë." - tha nëna'
    },
    {
        type: "Select Word",
        question: "",
        audios: ["gjethet", "n", "toke"],
        answers: ["Gjethet në tokë", "Gjeli thërret", '"Mirë." - tha nëna', "Treni te ura"],
        correctAnswer: "Gjethet në tokë"
    },
    {
        type: "Write",
        question: "",
        audios: ["gjethet", "n", "toke"],
        answers: ["ë", "t", "a", "d", "t", "u", "h"],
        correctAnswer: "Gjethet në tokë",
        givenAnswer: ["G", "j", "e", "", "", "e", "t", " ", "n", "", " ", "", "o", "k", "ë"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["gjethet", LessonListenConstants.NULL, "tani", "eshte", "vjeshte", LessonListenConstants.NULL, "n", "vjeshte", "gjethet", "bien", "n", "toke", LessonListenConstants.NULL, "ana", "e", "ani", "mbledhin", "gjethet", LessonListenConstants.NULL, "sa", "shume", "gjethe", "tha", "ani", LessonListenConstants.NEW_LINE, "por", "ata", "pastruan", "tere", "oborrin"],
        answers: ['GJETHET', LessonListenConstants.NEW_LINE, 'Tani', 'është', 'vjeshtë.', LessonListenConstants.NEW_LINE, 'Në', 'vjeshtë,', 'gjethet', 'bien', 'në', 'tokë.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'mbledhin', 'gjethet.', LessonListenConstants.NEW_LINE, '"Sa', 'shumë', 'gjethe" -', 'tha', 'Ani.', LessonListenConstants.NEW_LINE, 'Por,', 'ata', 'pastruan', 'tërë', 'oborrin.']
    }
];