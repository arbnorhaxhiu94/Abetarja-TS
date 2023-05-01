import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonSHQuestions: Question[] = [
    {
        type: "Tip",
        question: "Sh",
        audios: ["sh", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "sh", "madhe"],
        answers: ["G", "Sh", "S", "K"],
        correctAnswer: "Sh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "sh",
        audios: ["sh", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "sh", "vogel"],
        answers: ["b", "s", "h", "sh"],
        correctAnswer: "sh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "sh"],
        answers: ["sh", "s", "g", "o", "sh", "Sh", "b", "S", "J"],
        correctAnswer: ["Sh", "sh"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Shokët",
        audios: ["shoket"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["shoket"],
        answers: ["Rruga", "Shokët", "Treni", "Kali"],
        correctAnswer: "Shokët"
    },
    {
        type: "Tip",
        question: "Shkollë",
        audios: ["shkolle"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["shkolle"],
        answers: ["Jeta", "Shokët", "Ora", "Shkollë"],
        correctAnswer: "Shkollë"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["shoket", "e", "anit"],
        answers: ["Shokët e Anit", "Kali në mal", "Rruga jonë", "Ura e re"],
        correctAnswer: "Shokët e Anit"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ne", "n", "shkolle"],
        answers: ["Nëna na shtëpi", "Shkolla e re", "Ne në shkollë", "Goma e rrotës"],
        correctAnswer: "Ne në shkollë"
    },
    {
        type: "Write",
        question: "",
        audios: ["shoket", "e", "anit"],
        answers: ["o", "h", "R", "e", "n", "S"],
        correctAnswer: "Shokët e Anit",
        givenAnswer: ["", "", "o", "k", "ë", "t", " ", "", " ", "A", "", "i", "t"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ana", "e", "ani", "n", "shkolle", LessonListenConstants.NULL, "ana", "e", "ani", "shkojne", "n", "shkolle", LessonListenConstants.NULL, "ata", "ulen", "n", "banken", "e", "pare", LessonListenConstants.NULL, "ata", "kane", "shume", "shoke", LessonListenConstants.NULL, "ana", "meson", LessonListenConstants.NEW_LINE, "ani", "shkruan", "n", "fletoren", "e", "tij"],
        answers: ['ANA', 'E', 'ANI', 'NË', 'SHKOLLË', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'shkojnë', 'në', 'shkollë.', LessonListenConstants.NEW_LINE, 'Ata', 'ulen', 'në', 'bankën', 'e', 'parë.', LessonListenConstants.NEW_LINE, 'Ata', 'kanë', 'shumë', 'shokë.', LessonListenConstants.NEW_LINE, 'Ana', 'mëson.', LessonListenConstants.NEW_LINE, 'Ani', 'shkruan', 'në', 'fletoren', 'e', 'tij.']
    }
];