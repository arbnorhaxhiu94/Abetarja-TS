import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonDHQuestions: Question[] = [
    {
        type: "Tip",
        question: "Dh",
        audios: ["dh", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "dh", "madhe"],
        answers: ["D", "Ll", "Dh", "Sh"],
        correctAnswer: "Dh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "dh",
        audios: ["dh", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "dh", "vogel"],
        answers: ["h", "d", "sh", "dh"],
        correctAnswer: "dh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "dh"],
        answers: ["D", "g", "dh", "Dh", "O", "dh", "K", "F", "b"],
        correctAnswer: ["Dh", "dh"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Dhurata",
        audios: ["dhurata"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["dhurata"],
        answers: ["Vrapimi", "Dhurata", "Pylli", "Dhjetor"],
        correctAnswer: "Dhurata"
    },
    {
        type: "Tip",
        question: "Dhjetor",
        audios: ["dhjetor"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["dhjetor"],
        answers: ["Vrapimi", "Dhurata", "Pylli", "Dhjetor"],
        correctAnswer: "Dhjetor"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["dhurata", "ime1"],
        answers: ["Muaji Dhjetor", "Fletorja ime", "Dhurata ime", "Treni i ri"],
        correctAnswer: "Dhurata ime"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["muaji", "dhjetor"],
        answers: ["Muaji Dhjetor", "Fletorja ime", "Dhurata ime", "Treni i ri"],
        correctAnswer: "Muaji Dhjetor"
    },
    {
        type: "Write",
        question: "",
        audios: ["dhurata", "ime1"],
        answers: ["m", "y", "a", "i", "D", "n", "h", "E"],
        correctAnswer: "Dhurata ime",
        givenAnswer: ["", "", "u", "r", "a", "t", "", " ", "i", "", "e"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["dhuratat", LessonListenConstants.NULL, "tani", "erdhi", "muaji", "dhjetor", LessonListenConstants.NULL, "n", "dhjetor", "eshte", "viti", "i", "ri", LessonListenConstants.NULL, "ana", "e", "ani", "jane", "femije", "t", "mire", LessonListenConstants.NULL, "prandaj", "babadimri", "u", "solli", "plot", "dhurata", LessonListenConstants.NEW_LINE, "ata", "falenderuan", "babadimrin"],
        answers: ['DHURATAT', LessonListenConstants.NEW_LINE, 'Tani', 'erdhi', 'muaji', 'Dhjetor.', LessonListenConstants.NEW_LINE, 'Në', 'Dhjetor', 'është', 'Viti', 'i', 'ri.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'janë', 'fëmijë', 'të', 'mirë.', LessonListenConstants.NEW_LINE, 'Prandaj,', 'Babadimri', 'u', 'solli', 'plot', 'dhurata.', LessonListenConstants.NEW_LINE, 'Ata', 'falënderuan', 'Babadimrin.']
    }
];