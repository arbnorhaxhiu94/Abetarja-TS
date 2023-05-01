import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonJQuestions: Question[] = [
    {
        type: "Tip",
        question: "J",
        audios: ["j", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "j", "madhe"],
        answers: ["J", "U", "H", "M"],
        correctAnswer: "J",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "j",
        audios: ["j", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "j", "vogel"],
        answers: ["e", "j", "n", "a"],
        correctAnswer: "j",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "j"],
        answers: ["j", "M", "o", "J", "Ë", "k", "a", "I", "j"],
        correctAnswer: ["J", "j"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Jeta",
        audios: ["jeta"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["jeta"],
        answers: ["Pula", "Ora", "Jeta", "Era"],
        correctAnswer: "Jeta"
    },
    {
        type: "Tip",
        question: "Loja",
        audios: ["loja"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["loja"],
        answers: ["Loja", "Jeta", "Ana", "Huti"],
        correctAnswer: "Loja"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["loja", "me", "top"],
        answers: ["Jeta jonë", "Loja me top", "Pulat te pema", "Hëna lart"],
        correctAnswer: "Loja me top"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["jeta", "luan", "me", "anen"],
        answers: ["Ana me Anin", "Mali me pemë", "Jeta luan me Anën", "Muri i ri"],
        correctAnswer: "Jeta luan me Anën"
    },
    {
        type: "Write",
        question: "",
        audios: ["loja", "me", "top"],
        answers: ["t", "r", "e", "j", "m", "P"],
        correctAnswer: "Loja me top",
        givenAnswer: ["L", "o", "", "a", " ", "", "e", " ", "", "o", "p"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["loja", LessonListenConstants.NULL, "ana", "jeta", "e", "ani", LessonListenConstants.NULL, "ata", "luajne", "me", "top", LessonListenConstants.NULL, "jeta", "mori", "topin", LessonListenConstants.NULL, "ani", "na", "topin", LessonListenConstants.NULL, "ani", "mori", "topin", LessonListenConstants.NULL, "ata", "luajne"],
        answers: ['LOJA', LessonListenConstants.NEW_LINE, 'Ana', 'Jeta', 'e', 'Ani', LessonListenConstants.NEW_LINE, 'Ata', 'luajnë', 'me', 'top', LessonListenConstants.NEW_LINE, 'Jeta', 'mori', 'topin', LessonListenConstants.NEW_LINE, 'Ani', 'na', 'topin', LessonListenConstants.NEW_LINE, 'Ani', 'mori', 'topin', LessonListenConstants.NEW_LINE, 'Ata', 'luajnë']
    }
];