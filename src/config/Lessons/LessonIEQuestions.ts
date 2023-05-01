import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonIEQuestions: Question[] = [
    {
        type: "Tip",
        question: "I",
        audios: ["i", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "i", "madhe"],
        answers: ["I", "A", "N", "E"],
        correctAnswer: "I",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "i",
        audios: ["i", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "i", "vogel"],
        answers: ["i", "A", "a", "I"],
        correctAnswer: "i",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_i_prek"],
        answers: ["I", "E", "i", "a", "E", "i", "a", "N", "n"],
        correctAnswer: ["I", "i"]
    },
    {
        type: "Tip",
        question: "E",
        audios: ["e1", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "e1", "madhe"],
        answers: ["I", "A", "N", "E"],
        correctAnswer: "E",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "e",
        audios: ["e1", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "e1", "vogel"],
        answers: ["n", "e", "I", "A"],
        correctAnswer: "e",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "e1"],
        answers: ["I", "e", "n", "a", "E", "I", "a", "e", "n"],
        correctAnswer: ["E", "e"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Ne",
        audios: ["ne"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["ne"],
        answers: ["Na", "Eni", "Ne", "Ai"],
        correctAnswer: "Ne"
    },
    {
        type: "Tip",
        question: "Ena",
        audios: ["ena"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ena"],
        answers: ["Ena", "Ani", "Nana", "Ne"],
        correctAnswer: "Ena"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ena", "eni"],
        answers: ["Ne", "Ana, Ani", "Ai", "Ena, Eni"],
        correctAnswer: "Ena, Eni"
    },
    {
        type: "Write",
        question: "",
        audios: ["ena", "e", "eni"],
        answers: ["n", "E", "e", "i", "E", "A"],
        correctAnswer: "Ena e Eni",
        givenAnswer: ["", "n", "a", " ", "", " ", "", "n", "i"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ana", "e", "ani", LessonListenConstants.NULL, "ne", "e", "eni", LessonListenConstants.NULL, "ani", "e", "eni", "mesojne", LessonListenConstants.NULL, "eni", "na", "lapsin", LessonListenConstants.NULL, "ana", "ena", "ani", "eni"],
        answers: ["Ana", "e", "Ani", LessonListenConstants.NEW_LINE, "Ne", "e", "Eni", LessonListenConstants.NEW_LINE, "Ani", "e", "Eni", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "Eni", "na", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "Ana", "Ena", "Ani", "Eni"],
    }
];