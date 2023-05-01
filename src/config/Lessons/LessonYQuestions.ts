import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonYQuestions: Question[] = [
    {
        type: "Tip",
        question: "Y",
        audios: ["y", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "y", "madhe"],
        answers: ["Y", "S", "Ll", "A"],
        correctAnswer: "Y",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "y",
        audios: ["y", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "y", "vogel"],
        answers: ["o", "h", "y", "p"],
        correctAnswer: "y",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "y"],
        answers: ["f", "y", "j", "Y", "Ll", "Y", "o", "T", "C"],
        correctAnswer: ["Y", "y"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Pylli",
        audios: ["pylli"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["pylli"],
        answers: ["Mali", "Pylli", "Lulet", "Pema"],
        correctAnswer: "Pylli"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ne", "n", "pyll"],
        answers: ["Ne në pyll", "Lumi i kaltër", "Çaji i ftohtë", "Halla e Anit"],
        correctAnswer: "Ne në pyll"
    },
    {
        type: "Write",
        question: "",
        audios: ["ne", "n", "pyll"],
        answers: ["N", "s", "y", "p", "ë", "o"],
        correctAnswer: "Ne në pyll",
        givenAnswer: ["", "e", " ", "n", "", " ", "p", "", "l", "l"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["pylli", LessonListenConstants.NULL, "ani", "e", "miri", "n", "pyll", LessonListenConstants.NULL, "ata", "luajne", "n", "pyll", "qqdo", "t", "diel", LessonListenConstants.NULL, "pylli", "ka", "plot", "lule", LessonListenConstants.NULL, "ata", "moren", "disa", "lule", LessonListenConstants.NULL, "nene", "na", "lulet", LessonListenConstants.NULL, "ata", "duan", "nenen", "e", "tyre"],
        answers: ['PYLLI', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'në', 'pyll.', LessonListenConstants.NEW_LINE, 'Ata', 'luajnë', 'në', 'pyll', 'çdo', 'të', 'diel.', LessonListenConstants.NEW_LINE, 'Pylli', 'ka', 'plot', 'lule.', LessonListenConstants.NEW_LINE, 'Ata', 'morën', 'disa', 'lule.', LessonListenConstants.NEW_LINE, 'Nënë,', 'na', 'lulet.', LessonListenConstants.NEW_LINE, 'Ata', 'duan', 'nënën', 'e', 'tyre.' ]
    }
];