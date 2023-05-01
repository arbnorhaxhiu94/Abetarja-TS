import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonPQuestions: Question[] = [
    {
        type: "Tip",
        question: "P",
        audios: ["p", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "p", "madhe"],
        answers: ["R", "K", "P", "M"],
        correctAnswer: "P",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "p",
        audios: ["p", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "p", "vogel"],
        answers: ["p", "a", "t", "ë"],
        correctAnswer: "p",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "p"],
        answers: ["E", "t", "p", "o", "P", "k", "p", "N", "m"],
        correctAnswer: ["P", "p"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Pula",
        audios: ["pula"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["pula"],
        answers: ["Pula", "Mali", "Treni", "Ura"],
        correctAnswer: "Pula"
    },
    {
        type: "Tip",
        question: "Pak",
        audios: ["pak"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["pak"],
        answers: ["Mirë", "Tani", "Pak", "Me"],
        correctAnswer: "Pak"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["pulat", "e", "anit"],
        answers: ["Pulat e Anit", "Ani me Mirin", "Muri i ri", "Kali i kaltër"],
        correctAnswer: "Pulat e Anit"
    },
    {
        type: "Write",
        question: "",
        audios: ["ani", "ka", "plot", "pula"],
        answers: ["k", "A", "p", "r", "p", "o", "m"],
        correctAnswer: "Ani ka plot pula",
        givenAnswer: ["", "n", "i", " ", "", "a", " ", "", "l", "o", "t", " ", "", "u", "l", "a"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["pulat", LessonListenConstants.NULL, "ani", "ka", "plot", "pula", LessonListenConstants.NULL, "pulat", "kane", "pupla", LessonListenConstants.NULL, "pulat", "hapin", "krahet", LessonListenConstants.NULL, "hani", "o", "pulat", "e", "mia", LessonListenConstants.NULL, "pulat", "e", "anit", "hane"],
        answers: ['PULAT', LessonListenConstants.NEW_LINE, 'Ani', 'ka', 'plot', 'pula', LessonListenConstants.NEW_LINE, 'Pulat', 'kanë', 'pupla', LessonListenConstants.NEW_LINE, 'Pulat', 'hapin', 'krahët', LessonListenConstants.NEW_LINE, 'Hani,', 'o', 'pulat', 'e', 'mia', LessonListenConstants.NEW_LINE, 'Pulat', 'e', 'Anit', 'hanë']
    }
];