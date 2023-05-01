import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonTQuestions: Question[] = [
    {
        type: "Tip",
        question: "T",
        audios: ["t", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "t", "madhe"],
        answers: ["M", "O", "T", "I"],
        correctAnswer: "T",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "t",
        audios: ["t", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "t", "vogel"],
        answers: ["t", "i", "a", "r"],
        correctAnswer: "t",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "t"],
        answers: ["N", "m", "T", "i", "t", "u", "t", "E", "o"],
        correctAnswer: ["T", "t"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Treni",
        audios: ["treni"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["treni"],
        answers: ["Ani", "Ora", "Treni", "Nëna"],
        correctAnswer: "Treni"
    },
    {
        type: "Tip",
        question: "Motra",
        audios: ["motra"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["motra"],
        answers: ["Muri", "Motra", "Ana", "Ura"],
        correctAnswer: "Motra"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["treni", "i", "ri1"],
        answers: ["Treni i ri", "Nëna", "Ana e Ani", "Ne në urë"],
        correctAnswer: "Treni i ri"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["motra", "ime1"],
        answers: ["Era, era", "Treni", "Motra ime", "Ora"],
        correctAnswer: "Motra ime"
    },
    {
        type: "Write",
        question: "",
        audios: ["treni", "i", "ri1"],
        answers: ["r", "m", "T", "i", "e"],
        correctAnswer: "Treni i ri",
        givenAnswer: ["", "r", "e", "n", "", " ", "i", " ", "", "i"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["treni", "i", "ri1", LessonListenConstants.NULL, "une", "e", "motra", "n", "tren", LessonListenConstants.NULL, "treni", "n", "ure", LessonListenConstants.NULL, "tani", "nate", LessonListenConstants.NULL, "moter", "tani", "nate", LessonListenConstants.NULL, "une", "motra", "e", "treni"],
        answers: ['TRENI', 'I', 'RI', LessonListenConstants.NEW_LINE, 'Unë', 'e', 'motra', 'në', 'tren', LessonListenConstants.NEW_LINE, 'Treni', 'në', 'urë', LessonListenConstants.NEW_LINE, 'Tani', 'natë', LessonListenConstants.NEW_LINE, 'Motër,', 'tani', 'natë', LessonListenConstants.NEW_LINE, 'Unë', 'motra', 'e', 'treni']
    }
];