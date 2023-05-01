import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonQQuestions: Question[] = [
    {
        type: "Tip",
        question: "Q",
        audios: ["q", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "q", "madhe"],
        answers: ["Q", "O", "D", "B"],
        correctAnswer: "Q",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "q",
        audios: ["q", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "q", "vogel"],
        answers: ["p", "j", "q", "g"],
        correctAnswer: "q",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "q"],
        answers: ["O", "g", "q", "Q", "D", "p", "q", "o", "p"],
        correctAnswer: ["Q", "q"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Qeni",
        audios: ["qeni"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["qeni"],
        answers: ["Shoqja", "Dera", "Qeni", "Shokët"],
        correctAnswer: "Qeni"
    },
    {
        type: "Tip",
        question: "Shoqja",
        audios: ["shoqja"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["shoqja"],
        answers: ["Shoqja", "Dera", "Qeni", "Shokët"],
        correctAnswer: "Shoqja"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["shoqja", "e", "anes"],
        answers: ["Shoku i Anit", "Qeni i Mirit", "Shoqja e Anës", "Shkolla ime"],
        correctAnswer: "Shoqja e Anës"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["qeni", "i", "mirit"],
        answers: ["Shoku i Anit", "Qeni i Mirit", "Shoqja e Anës", "Shkolla ime"],
        correctAnswer: "Qeni i Mirit"
    },
    {
        type: "Write",
        question: "",
        audios: ["qeni", "i", "mirit"],
        answers: ["t", "y", "Q", "i", "H", "n", "M", "A"],
        correctAnswer: "Qeni i Mirit",
        givenAnswer: ["", "e", "n", "", " ", "i", " ", "", "i", "r", "i", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["shoqja", "e", "anes", LessonListenConstants.NULL, "shoqja", "e", "anes", "quhet", "rina", LessonListenConstants.NULL, "ana", "e", "rina", "jane", "shoqe", "banke", LessonListenConstants.NULL, "rina", "ka", "plot", "lapsa", "t", "kuq", LessonListenConstants.NULL, "rina", "ia", "jep", "anes", "dy", "lapsa", "t", "kuq", LessonListenConstants.NEW_LINE, "ana", "falenderon", "rinen"],
        answers: ['SHOQJA', 'E', 'ANËS', LessonListenConstants.NEW_LINE, 'Shoqja', 'e', 'Anës', 'quhet', 'Rina.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Rina', 'janë', 'shoqe', 'banke.', LessonListenConstants.NEW_LINE, 'Rina', 'ka', 'plot', 'lapsa', 'të', 'kuq', LessonListenConstants.NEW_LINE, 'Rina', 'ia', 'jep', 'Anës', 'dy', 'lapsa', 'të', 'kuq.', LessonListenConstants.NEW_LINE, 'Ana', 'falënderon', 'Rinën.']
    }
];