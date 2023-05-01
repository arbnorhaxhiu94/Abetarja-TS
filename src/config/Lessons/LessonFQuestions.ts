import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonFQuestions: Question[] = [
    {
        type: "Tip",
        question: "F",
        audios: ["f1", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "f1", "madhe"],
        answers: ["P", "F", "R", "J"],
        correctAnswer: "F",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "f",
        audios: ["f1", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "f1", "vogel"],
        answers: ["o", "a", "f", "k"],
        correctAnswer: "f",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "f1"],
        answers: ["r", "f", "O", "b", "n", "o", "F", "f", "D"],
        correctAnswer: ["F", "f"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Fletore",
        audios: ["fletore"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["fletore"],
        answers: ["Ura", "Bleta", "Fletore", "Daja"],
        correctAnswer: "Fletore"
    },
    {
        type: "Tip",
        question: "Fluturat",
        audios: ["fluturat"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["fluturat"],
        answers: ["Nëna", "Fluturat", "Ariu", "Treni"],
        correctAnswer: "Fluturat"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ana", "u", "ftoh"],
        answers: ["Ana u ftoh", "Ani luan me top", "Nëna te dera", "Mira me flutura"],
        correctAnswer: "Ana u ftoh"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["fluturat", "fluturojne"],
        answers: ["Balonat e bukura", "Ana luan me Anin", "Treni te ura", "Fluturat fluturojnë"],
        correctAnswer: "Fluturat fluturojnë"
    },
    {
        type: "Write",
        question: "",
        audios: ["fluturat"],
        answers: ["m", "t", "j", "a", "u", "F"],
        correctAnswer: "Fluturat",
        givenAnswer: ["", "l", "u", "", "u", "r", "", "t"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["fluturat", LessonListenConstants.NULL, "fluturat", "fluturojne", "lule", "m", "lule", LessonListenConstants.NULL, "fluturat", "hapin", "krahet", LessonListenConstants.NULL, "ato", "ikin", "e", "fluturojne", "lart", LessonListenConstants.NULL, "ana", "i", "do", "fluturat"],
        answers: ['FLUTURAT', LessonListenConstants.NEW_LINE, 'Fluturat', 'fluturojnë', 'lule', 'më', 'lule', LessonListenConstants.NEW_LINE, 'Fluturat', 'hapin', 'krahët', LessonListenConstants.NEW_LINE, 'Ato', 'ikin', 'e', 'fluturojnë', 'lart', LessonListenConstants.NEW_LINE, 'Ana', 'i', 'do', 'fluturat' ]
    }
];