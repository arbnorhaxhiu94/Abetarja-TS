import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonRRQuestions: Question[] = [
    {
        type: "Tip",
        question: "Rr",
        audios: ["rr", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "rr", "madhe"],
        answers: ["Rr", "R", "G", "P"],
        correctAnswer: "Rr",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "rr",
        audios: ["rr", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "rr", "vogel"],
        answers: ["r", "p", "rr", "f"],
        correctAnswer: "rr",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "rr"],
        answers: ["g", "Rr", "r", "rr", "t", "Y", "rr", "p", "s"],
        correctAnswer: ["Rr", "rr"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Rrota",
        audios: ["rrota"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["rrota"],
        answers: ["Rrota", "Bora", "Dora", "Ora"],
        correctAnswer: "Rrota"
    },
    {
        type: "Tip",
        question: "Rruga",
        audios: ["rruga"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["rruga"],
        answers: ["Rrota", "Ora", "Gropa", "Rruga"],
        correctAnswer: "Rruga"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["rruga", "jone"],
        answers: ["Gropa në rrugë", "Rrota e traktorit", "Rruga jonë", "Goma e rrotës"],
        correctAnswer: "Rruga jonë"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["rrota", "n", "grope1"],
        answers: ["Gropa në rrugë", "Rrota në gropë", "Rruga jonë", "Goma e rrotës"],
        correctAnswer: "Rrota në gropë"
    },
    {
        type: "Write",
        question: "",
        audios: ["rruga", "jone"],
        answers: ["o", "r", "R", "e", "j", "G"],
        correctAnswer: "Rruga jonë",
        givenAnswer: ["", "", "u", "g", "a", " ", "", "o", "n", "ë"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["rruga", "jone", LessonListenConstants.NULL, "rruga", "jone", "ka", "plot", "gropa", LessonListenConstants.NULL, "rrota", "e", "traktorit", "ra", "n", "grope1", LessonListenConstants.NULL, "miri", "e", "ani", "ndihmuan", "dajen", "e", "tyre", LessonListenConstants.NULL, "rrota", "doli", "nga", "gropa", LessonListenConstants.NEW_LINE, "daja", "falenderon", "ata"],
        answers: ['RRUGA', 'JONË', LessonListenConstants.NEW_LINE, 'Rruga', 'jonë', 'ka', 'plot', 'gropa.', LessonListenConstants.NEW_LINE, 'Rrota', 'e', 'traktorit', 'ra', 'në', 'gropë.', LessonListenConstants.NEW_LINE, 'Miri', 'e', 'Ani', 'ndihmuan', 'dajën', 'e', 'tyre.', LessonListenConstants.NEW_LINE, 'Rrota', 'doli', 'nga', 'gropa.', LessonListenConstants.NEW_LINE, 'Daja', 'falënderon', 'ata.']
    }
];