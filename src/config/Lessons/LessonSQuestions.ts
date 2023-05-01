import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonSQuestions: Question[] = [
    {
        type: "Tip",
        question: "S",
        audios: ["s", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "s", "madhe"],
        answers: ["S", "H", "M", "L"],
        correctAnswer: "S",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "s",
        audios: ["s", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "s", "vogel"],
        answers: ["u", "s", "f", "i"],
        correctAnswer: "s",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "s"],
        answers: ["i", "P", "e", "s", "B", "S", "j", "s", "C"],
        correctAnswer: ["S", "s"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Sepse",
        audios: ["sepse"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["sepse"],
        answers: ["Po", "Pse", "Mirë", "Sepse"],
        correctAnswer: "Sepse"
    },
    {
        type: "Tip",
        question: "Lapsi",
        audios: ["lapsi"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["lapsi"],
        answers: ["Ora", "Muri", "Lapsi", "Sepse"],
        correctAnswer: "Lapsi"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["lapsi", "i", "anes"],
        answers: ["Lapsi i Anës", "Fletorja e Anës", "Nëna e Anit", "Topi i Anit"],
        correctAnswer: "Lapsi i Anës"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ani", "meson"],
        answers: ["Libri i Anit", "Ani mëson", "Ana luan", "Ana tregon"],
        correctAnswer: "Ani mëson"
    },
    {
        type: "Write",
        question: "",
        audios: ["ani", "meson"],
        answers: ["J", "i", "n", "k", "s", "T"],
        correctAnswer: "Ani mëson",
        givenAnswer: ["A", "n", "", " ", "m", "ë", "", "o", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["lapsi", "i", "anit", LessonListenConstants.NULL, "ani", "ka", "humbur", "lapsin", LessonListenConstants.NULL, "ani", "kerkon", "lapsin", "e", "tij", LessonListenConstants.NULL, "ani", "na", "lapsin", LessonListenConstants.NULL, "ani", "mori", "lapsin", "e", "anes", LessonListenConstants.NULL, "ani", "falenderon", "anen"],
        answers: ['LAPSI', 'I', 'ANIT', LessonListenConstants.NEW_LINE, 'Ani', 'ka', 'humbur', 'lapsin', LessonListenConstants.NEW_LINE, 'Ani', 'kërkon', 'lapsin', 'e', 'tij', LessonListenConstants.NEW_LINE, 'Ani', 'na', 'lapsin', LessonListenConstants.NEW_LINE, 'Ani', 'mori', 'lapsin', 'e', 'Anës', LessonListenConstants.NEW_LINE, 'Ani', 'falënderon', 'Anën']
    }
];