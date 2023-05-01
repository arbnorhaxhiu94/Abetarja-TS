import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonBQuestions: Question[] = [
    {
        type: "Tip",
        question: "B",
        audios: ["b1", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "b1", "madhe"],
        answers: ["M", "U", "Ë", "B"],
        correctAnswer: "B",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "b",
        audios: ["b1", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "b1", "vogel"],
        answers: ["e", "b", "n", "p"],
        correctAnswer: "b",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "b1"],
        answers: ["h", "a", "B", "j", "b", "d", "B", "m", "A"],
        correctAnswer: ["B", "b"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Balona",
        audios: ["balona"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["balona"],
        answers: ["Balona", "Ora", "Era", "Dora"],
        correctAnswer: "Balona"
    },
    {
        type: "Tip",
        question: "Babadimri",
        audios: ["babadimri"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["babadimri"],
        answers: ["Bora", "Dera", "Babadimri", "Kali"],
        correctAnswer: "Babadimri"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["miri", "bleu", "balona"],
        answers: ["Miri bleu balona", "Ura e re", "Lumi me balona", "Miri me balona"],
        correctAnswer: "Miri bleu balona"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["balonat", "e", "bukura"],
        answers: ["Ani bleu balona", "Lumi me borë", "Balonat e bukura", "Nëna me Anin"],
        correctAnswer: "Balonat e bukura"
    },
    {
        type: "Write",
        question: "",
        audios: ["balonat", "e", "bukura"],
        answers: ["m", "o", "b", "a", "K", "B"],
        correctAnswer: "Balonat e bukura",
        givenAnswer: ["", "a", "l", "", "n", "a", "t", " ", "e", " ", "", "u", "k", "u", "r", ""]
    },
    {
        type: "Listen",
        question: "",
        audios: ["balonat", LessonListenConstants.NULL, "miri", "bleu", "plot", "balona", LessonListenConstants.NULL, "balonat", "jane", "t", "bukura", LessonListenConstants.NULL, "ana", "na", "balonen", "e", "kalter", LessonListenConstants.NULL, "ana", "luan", "me", "balonen", "e", "kalter"],
        answers: ['BALONAT', LessonListenConstants.NEW_LINE, 'Miri', 'bleu', 'plot', 'balona', LessonListenConstants.NEW_LINE, 'Balonat', 'janë', 'të', 'bukura', LessonListenConstants.NEW_LINE, 'Ana', 'na', 'balonën', 'e', 'kaltër', LessonListenConstants.NEW_LINE, 'Ana', 'luan', 'me', 'balonën', 'e', 'kaltër']
    }
];