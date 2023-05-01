import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonZHQuestions: Question[] = [
    {
        type: "Tip",
        question: "Zh",
        audios: ["zh", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "zh", "madhe"],
        answers: ["Zh", "X", "Xh", "Z"],
        correctAnswer: "Zh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "zh",
        audios: ["zh", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "zh", "vogel"],
        answers: ["xh", "x", "z", "zh"],
        correctAnswer: "zh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "zh"],
        answers: ["Z", "xh", "zh", "zh", "xh", "z", "Zh", "th", "dh"],
        correctAnswer: ["Zh", "zh"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Vazhdo",
        audios: ["vazhdo"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["vazhdo"],
        answers: ["Vazhdo", "Xhaxhai", "Zhurmë", "Xhami"],
        correctAnswer: "Vazhdo"
    },
    {
        type: "Tip",
        question: "Zhurmë",
        audios: ["zhurme"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["zhurme"],
        answers: ["Vazhdo", "Xhaxhai", "Zhurmë", "Xhami"],
        correctAnswer: "Zhurmë"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["vazhdo", "ani"],
        answers: ["Vazhdo Ani", "Prit Ani", "Gjuaj Ani", "Nxito Ani"],
        correctAnswer: "Vazhdo Ani"
    },
    {
        type: "Write",
        question: "",
        audios: ["vazhdo", "ani"],
        answers: ["o", "X", "z", "j", "h", "n", "i"],
        correctAnswer: "Vazhdo Ani",
        givenAnswer: ["V", "a", "", "", "d", "", " ", "A", "", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["vazhdo", "ani", LessonListenConstants.NULL, "ana", "e", "ani", "vrapojne", "n", "pyll", LessonListenConstants.NULL, "ani", "degjoi", "nj", "zhurme", LessonListenConstants.NULL, "ai", "u", "ndal", LessonListenConstants.NULL, "vazhdo", "ani", "eshte", "vetem", "nj", "zog", "tha", "ana", LessonListenConstants.NEW_LINE, "ani", "pa", "zogun", "dhe", "filloi", "t", "vrapoje", "perseri"],
        answers: ['VAZHDO', 'ANI', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'vrapojnë', 'në', 'pyll.', LessonListenConstants.NEW_LINE, 'Ani', 'dëgjoi', 'një', 'zhurmë.', LessonListenConstants.NEW_LINE, 'Ai', 'u', 'ndal.', LessonListenConstants.NEW_LINE, '"Vazhdo', 'Ani,', 'është', 'vetëm', 'një', 'zog." -', 'tha', 'Ana.', LessonListenConstants.NEW_LINE, 'Ani', 'pa', 'zogun', 'dhe', 'filloi', 'të', 'vrapojë', 'përsëri.']
    }
];