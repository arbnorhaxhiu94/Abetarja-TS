import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonVQuestions: Question[] = [
    {
        type: "Tip",
        question: "V",
        audios: ["v", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "v", "madhe"],
        answers: ["Ll", "I", "V", "M"],
        correctAnswer: "V",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "v",
        audios: ["v", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "v", "vogel"],
        answers: ["l", "v", "e", "i"],
        correctAnswer: "v",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "v"],
        answers: ["L", "t", "s", "o", "v", "V", "v", "i", "l"],
        correctAnswer: ["V", "v"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Viti",
        audios: ["viti"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["viti"],
        answers: ["Viti", "Miri", "Vjeshta", "Lumi"],
        correctAnswer: "Viti"
    },
    {
        type: "Tip",
        question: "Vjeshta",
        audios: ["vjeshta"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["vjeshta"],
        answers: ["Viti", "Miri", "Vjeshta", "Lumi"],
        correctAnswer: "Vjeshta"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["viti", "i", "ri"],
        answers: ["Muri i mirë", "Viti i ri", "Zogu i lirë", "Treni i ri"],
        correctAnswer: "Viti i ri"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ani", "vrapon"],
        answers: ["Ani mëson", "Ani vallëzon", "Ani vrapon", "Ani luan"],
        correctAnswer: "Ani vrapon"
    },
    {
        type: "Write",
        question: "",
        audios: ["ani", "vrapon"],
        answers: ["u", "v", "Z", "h", "p", "n", "T", "A"],
        correctAnswer: "Ani vrapon",
        givenAnswer: ["A", "", "i", " ", "", "r", "a", "", "o", "n"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ani", "vrapon", LessonListenConstants.NULL, "ani", "vrapon", "n", "pyll", LessonListenConstants.NULL, "pse", "vrapon", "e", "pyeten", "shoket", LessonListenConstants.NULL, "sepse", "vrapimi", "eshte", "i", "dobishem", "ua", "priti", "ani", LessonListenConstants.NULL, "tani", "shoket", "vrapojne", "s", "bashku", "me", "anin", "n", "pyll"],
        answers: ['ANI', 'VRAPON', LessonListenConstants.NEW_LINE, 'Ani', 'vrapon', 'në', 'pyll.', LessonListenConstants.NEW_LINE, '"Pse', 'vrapon?" -', 'e', 'pyetën', 'shokët.',  LessonListenConstants.NEW_LINE, '"Sepse', 'vrapimi', 'është', 'i', 'dobishëm." -', 'ua', 'priti', 'Ani.', LessonListenConstants.NEW_LINE, 'Tani,', 'shokët', 'vrapojnë', 'së', 'bashku', 'me', 'Anin', 'në', 'pyll.']
    }
];