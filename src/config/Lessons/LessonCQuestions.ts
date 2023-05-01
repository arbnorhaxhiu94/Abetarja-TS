import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonCQuestions: Question[] = [
    {
        type: "Tip",
        question: "C",
        audios: ["c", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "c", "madhe"],
        answers: ["O", "D", "B", "C"],
        correctAnswer: "C",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "c",
        audios: ["c", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "c", "vogel"],
        answers: ["c", "u", "b", "i"],
        correctAnswer: "c",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "c"],
        answers: ["c", "f", "i", "O", "C", "e", "C", "A", "M"],
        correctAnswer: ["C", "c"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Ca",
        audios: ["ca"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ca"],
        answers: ["Pak", "Ca", "Mirë", "Unë"],
        correctAnswer: "Ca"
    },
    {
        type: "Tip",
        question: "Cili",
        audios: ["cili"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["cili"],
        answers: ["Miri", "Kur", "Cili", "Ani"],
        correctAnswer: "Cili"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["une", "kam", "ca", "lule"],
        answers: ["Fletorja ime", "Unë kam ca lule", "Ani luan me Anën", "Balonat fluturojnë"],
        correctAnswer: "Unë kam ca lule"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["cili", "je", "ti"],
        answers: ["Cili je ti?", "Ti apo unë?", "Ani me Anën", "Ku je ti?"],
        correctAnswer: "Cili je ti?"
    },
    {
        type: "Write",
        question: "",
        audios: ["cili", "je", "ti"],
        answers: ["C", "t", "o", "M", "j", "a"],
        correctAnswer: "Cili je ti?",
        givenAnswer: ["", "i", "l", "i", " ", "", "e", " ", "", "i", "?"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ani", "te", "miri", LessonListenConstants.NULL, "ani", "troket", "n", "dere", LessonListenConstants.NULL, "nena", "e", "mirit", "doli", LessonListenConstants.NULL, "cili", "je", "ti", LessonListenConstants.NULL, "une", "jam", "ani", LessonListenConstants.NULL, "mire", "eja", "brenda", LessonListenConstants.NULL, "ani", "e", "miri", "luajne"],
        answers: ['ANI', 'TE', 'MIRI', LessonListenConstants.NEW_LINE, 'Ani', 'troket', 'në', 'derë.', LessonListenConstants.NEW_LINE, 'Nëna', 'e', 'Mirit', 'doli.', LessonListenConstants.NEW_LINE, 'Cili', 'je', 'ti?', LessonListenConstants.NEW_LINE, 'Unë', 'jam', 'Ani', LessonListenConstants.NEW_LINE, 'Mirë,', 'eja', 'brenda.', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'luajnë.']
    }
];