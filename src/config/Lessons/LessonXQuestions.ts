import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonXQuestions: Question[] = [
    {
        type: "Tip",
        question: "X",
        audios: ["x", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "x", "madhe"],
        answers: ["T", "X", "V", "A"],
        correctAnswer: "X",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "x",
        audios: ["x", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "x", "vogel"],
        answers: ["v", "x", "i", "l"],
        correctAnswer: "x",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "x"],
        answers: ["X", "V", "g", "th", "x", "F", "X", "c", "V"],
        correctAnswer: ["X", "x"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Nxito",
        audios: ["nxito"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nxito"],
        answers: ["Nxito", "Gropa", "Guxim", "Nëna"],
        correctAnswer: "Nxito"
    },
    {
        type: "Tip",
        question: "Guxim",
        audios: ["guxim"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["guxim"],
        answers: ["Nxito", "Gropa", "Guxim", "Nëna"],
        correctAnswer: "Guxim"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ani", "ka", "guxim"],
        answers: ["Rruga me gropa", "Ani ka guxim", '"Nxito." - tha Ana', '"Ejani brenda" - tha nëna'],
        correctAnswer: "Ani ka guxim"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["nxito", "tha", "ana"],
        answers: ["Rruga me gropa", "Ani ka guxim", '"Nxito." - tha Ana', '"Ejani brenda" - tha nëna'],
        correctAnswer: '"Nxito." - tha Ana'
    },
    {
        type: "Write",
        question: "",
        audios: ["ani", "ka", "guxim"],
        answers: ["n", "o", "k", "d", "g", "u", "x"],
        correctAnswer: "Ani ka guxim",
        givenAnswer: ["A", "", "i", " ", "", "a", " ", "", "u", "", "i", "m"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["nxito", "ani", LessonListenConstants.NULL, "ani", "e", "miri", "luajne", "me", "top", LessonListenConstants.NULL, "ani", "ka", "topin", LessonListenConstants.NULL, "nxito", "ani", "tha", "miri", LessonListenConstants.NULL, "m", "gjuaj", "topin", "tha", "perseri", "miri", LessonListenConstants.NEW_LINE, "ani", "gjuan", "topin", "te", "miri", LessonListenConstants.NULL, "miri", "mori", "topin", LessonListenConstants.NULL, "miri", "falenderon", "anin"],
        answers: ['NXITO', 'ANI', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'luajnë', 'me', 'top.', LessonListenConstants.NEW_LINE, 'Ani', 'ka', 'topin.', LessonListenConstants.NEW_LINE, '"Nxito,', 'Ani" -', 'tha', 'Miri.', LessonListenConstants.NEW_LINE, '"Më', 'gjuaj', 'topin" -', 'tha', 'përsëri', 'Miri.', LessonListenConstants.NEW_LINE,'Ani', 'gjuan', 'topin', 'te', 'Miri.', LessonListenConstants.NEW_LINE, 'Miri', 'mori', 'topin.', LessonListenConstants.NEW_LINE, "Miri", "falënderon", "Anin."]
    }
];