import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonMQuestions: Question[] = [
    {
        type: "Tip",
        question: "M",
        audios: ["shkronja_m"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_m_pytje"],
        answers: ["R", "A", "M", "U"],
        correctAnswer: "M"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_m_prek"],
        answers: ["R", "U", "M", "R", "E", "M", "M", "I", "A"],
        correctAnswer: ["M"]
    },
    {
        type: "Tip",
        question: "MIRI",
        audios: ["miri"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["miri"],
        answers: ["URA", "MIRI", "ANI", "ERA"],
        correctAnswer: "MIRI"
    },
    {
        type: "Tip",
        question: "MIRA",
        audios: ["mira"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["mira"],
        answers: ["MIRA", "UNË", "MURI", "NANI"],
        correctAnswer: "MIRA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["mira", "e", "miri"],
        answers: ["MURI", "MIRA E MIRI", "URA E RE", "NINA"],
        correctAnswer: "MIRA E MIRI"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["muri", "i", "ri1"],
        answers: ["MURI I RI", "URA", "MIRI", "NE E ENI"],
        correctAnswer: "MURI I RI"
    },
    {
        type: "Write",
        question: "",
        audios: ["muri", "i", "ri1"],
        answers: ["R", "M", "A", "E", "I"],
        correctAnswer: "MURI I RI",
        givenAnswer: ["", "U", "R", "I", " ", "", " ", "", "I"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "era", "era", LessonListenConstants.NULL, "muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "muri"],
        answers: ["MURI", "I", "RI", LessonListenConstants.NEW_LINE, "MIRA,", "MIRI", "E", "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "ERA,", "ERA!", LessonListenConstants.NEW_LINE, "MURI", "I", "RI", LessonListenConstants.NEW_LINE, "MIRA", "MIRI", "MURI"]
    }
];