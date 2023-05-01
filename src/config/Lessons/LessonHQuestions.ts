import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonHQuestions: Question[] = [
    {
        type: "Tip",
        question: "H",
        audios: ["l", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "h", "madhe"],
        answers: ["H", "U", "T", "I"],
        correctAnswer: "H",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "h",
        audios: ["l", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "h", "vogel"],
        answers: ["e", "h", "k", "m"],
        correctAnswer: "h",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "h"],
        answers: ["t", "l", "h", "H", "ë", "u", "H", "u", "K"],
        correctAnswer: ["H", "h"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Hëna",
        audios: ["hena"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["hena"],
        answers: ["Muri", "Eni", "Hëna", "Kali"],
        correctAnswer: "Hëna"
    },
    {
        type: "Tip",
        question: "Hani",
        audios: ["hani"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["hani"],
        answers: ["Hani", "Ani", "Lulet", "Miu"],
        correctAnswer: "Hani"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["hena", "lart"],
        answers: ["Kali i ri", "Ora, era", "Hëna lart", "Nëna ime"],
        correctAnswer: "Hëna lart"
    },
    {
        type: "Write",
        question: "",
        audios: ["hena", "lart"],
        answers: ["t", "u", "H", "a", "e"],
        correctAnswer: "Hëna lart",
        givenAnswer: ["", "ë", "n", "a", " ", "l", "", "r", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["hena", LessonListenConstants.NULL, "nene", "hena", "lart", LessonListenConstants.NULL, "mire", "rina", "tani", "nate", LessonListenConstants.NULL, "nene", "une", "kam", "kohe", "te", "lire", LessonListenConstants.NULL, "rina", "luan", "me", "anen", "e", "nenen"],
        answers: ['HËNA', LessonListenConstants.NEW_LINE, 'Nënë,', 'hëna', 'lart', LessonListenConstants.NEW_LINE, 'Mirë', 'Rina,', 'tani', 'natë', LessonListenConstants.NEW_LINE, 'Nënë,', 'unë', 'kam', 'kohë', 'të', 'lirë', LessonListenConstants.NEW_LINE, 'Rina', 'luan', 'me', 'Anën', 'e', 'nënën']
    }
];