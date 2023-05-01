import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonEQuestions: Question[] = [
    {
        type: "Tip",
        question: "E",
        audios: ["shkronja_e"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["shkronja_e_pytje"],
        answers: ["A", "I", "N", "E"],
        correctAnswer: "E"
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["shkronja_e_prek"],
        answers: ["A", "E", "N", "E", "A", "E", "I", "N", "I"],
        correctAnswer: ["E"]
    },
    {
        type: "Tip",
        question: "NE",
        audios: ["ne"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["ne"],
        answers: ["AI", "NA", "NE", "IA"],
        correctAnswer: "NE"
    },
    {
        type: "Tip",
        question: "ENA",
        audios: ["ena"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["ena"],
        answers: ["ENA", "E", "ANI", "ANA"],
        correctAnswer: "ENA"
    },
    {
        type: "Tip",
        question: "ENI",
        audios: ["eni"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["eni"],
        answers: ["ANI", "ENA", "ENI", "NANI"],
        correctAnswer: "ENI"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ena", "eni"],
        answers: ["ENA, ENI", "ANA, ANI", "NA, ANA", "NE, ANI"],
        correctAnswer: "ENA, ENI"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ne", "e", "eni"],
        answers: ["ANA", "ENA", "NE E ENI", "NE, ANA"],
        correctAnswer: "NE E ENI"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["ana", "e", "eni"],
        answers: ["NANI", "ANA E ENI", "ENA, ANI", "NE, ANI"],
        correctAnswer: "ANA E ENI"
    },
    {
        type: "Write",
        question: "",
        audios: ["ne", "e", "ana"],
        answers: ["I", "N", "A", "E", "I", "E"],
        correctAnswer: "NE E ANA",
        givenAnswer: ["", "", " ", "", " ", "A", "N", "A"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["ana", "e", "ani", LessonListenConstants.NULL, "ne", "e", "eni", LessonListenConstants.NULL, "ani", "e", "eni", "mesojne", LessonListenConstants.NULL, "eni", "na", "lapsin", LessonListenConstants.NULL, "ana", "ena", "ani", "eni"],
        answers: ["ANA", "E", "ANI", LessonListenConstants.NEW_LINE, "NE", "E", "ENI", LessonListenConstants.NEW_LINE, "ANI", "E", "ENI", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "ENI", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "ANA", "ENA", "ANI", "ENI"],
    }
];