import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonAIQuestions: Question[] = [
    {
        type: "Tip",
        question: "A",
        audios: ["shkronja_a"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_a_pytje"],
        answers: ["A", "I", "N", "E"],
        correctAnswer: "A"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_a_prek"],
        answers: ["A", "I", "N", "E", "A", "N", "I", "A", "E"],
        correctAnswer: ["A"]
    },
    {
        type: "Tip",
        question: "I",
        audios: ["shkronja_i"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_i_pytje"],
        answers: ["A", "I", "N", "E"],
        correctAnswer: "I"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_i_prek"],
        answers: ["A", "I", "N", "E", "I", "N", "I", "A", "A"],
        correctAnswer: ["I"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["word_a_a_a"],
        answers: ["A A A", "I I I"],
        correctAnswer: "A A A"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["word_i_i_i"],
        answers: ["A A A", "I I I"],
        correctAnswer: "I I I"
    },
    {
        type: "Tip",
        question: "AI",
        audios: ["ai"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ai"],
        answers: ["AI", "I"],
        correctAnswer: "AI"
    },
    {
        type: "Tip",
        question: "IA",
        audios: ["ia"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ia"],
        answers: ["A", "IA"],
        correctAnswer: "IA"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["word_ai_ai_ai"],
        answers: ["AI AI AI", "IA IA IA"],
        correctAnswer: "AI AI AI"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["word_ia_ia_ia"],
        answers: ["AI AI AI", "IA IA IA"],
        correctAnswer: "IA IA IA"
    },
    {
        type: "Write",
        question: "",
        audios: ["ai"],
        answers: ["A", "E", "N", "I"],
        correctAnswer: "AI",
        givenAnswer: ["A", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["a", "a", "a", LessonListenConstants.NULL, "i", "i", "i", LessonListenConstants.NULL, "ai", "ai", "ai", LessonListenConstants.NULL, "ia", "ia", "ia"],
        answers: ["A", "A", "A", LessonListenConstants.NEW_LINE, "I", "I", "I", LessonListenConstants.NEW_LINE, "AI", "AI", "AI", LessonListenConstants.NEW_LINE, "IA", "IA", "IA"]
    }
]