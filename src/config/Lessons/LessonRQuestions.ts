import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonRQuestions: Question[] = [
    {
        type: "Tip",
        question: "R",
        audios: ["shkronja_r"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_r_pytje"],
        answers: ["R", "Ë", "N", "U"],
        correctAnswer: "R"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_r_prek"],
        answers: ["R", "U", "Ë", "R", "E", "I", "U", "R", "A"],
        correctAnswer: ["R"]
    },
    {
        type: "Tip",
        question: "URA",
        audios: ["ura"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ura"],
        answers: ["URA", "UNË", "ARIU", "ERA"],
        correctAnswer: "URA"
    },
    {
        type: "Tip",
        question: "ERA",
        audios: ["era"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["era"],
        answers: ["URA", "UNË", "ARIU", "ERA"],
        correctAnswer: "ERA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ura", "e", "re"],
        answers: ["RINA", "UNË E NËNA", "URA E RE", "ANA E ANI"],
        correctAnswer: "URA E RE"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ne", "e", "rina"],
        answers: ["AI E ENI", "URA", "URA E RE", "NE E RINA"],
        correctAnswer: "NE E RINA"
    },
    {
        type: "Write",
        question: "",
        audios: ["ura", "e", "re"],
        answers: ["R", "A", "R", "E", "I"],
        correctAnswer: "URA E RE",
        givenAnswer: ["U", "", "A", " ", "E", " ", "", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ura", "e", "re", LessonListenConstants.NULL, "une", "e", "rina", "n", "ure", LessonListenConstants.NULL, "era", "era", LessonListenConstants.NULL, "nena", "n", "shtepi", LessonListenConstants.NULL, "une", "rina", "nena", "ura"],
        answers: ["URA", "E", "RE", LessonListenConstants.NEW_LINE, "UNË", "E", "RINA", "NË", "URË", LessonListenConstants.NEW_LINE, "ERA,", "ERA!", LessonListenConstants.NEW_LINE, "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "UNË", "RINA,", "NËNA", "URA"]
    }
];