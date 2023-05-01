import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonGQuestions: Question[] = [
    {
        type: "Tip",
        question: "G",
        audios: ["g", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "g", "madhe"],
        answers: ["T", "G", "S", "D"],
        correctAnswer: "G",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "g",
        audios: ["g", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "g", "vogel"],
        answers: ["g", "j", "b", "c"],
        correctAnswer: "g",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "g"],
        answers: ["g", "K", "a", "S", "G", "e", "Ë", "g", "j"],
        correctAnswer: ["G", "g"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Goma",
        audios: ["goma"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["goma"],
        answers: ["Goma", "Bora", "Dora", "Ora"],
        correctAnswer: "Goma"
    },
    {
        type: "Tip",
        question: "Gropa",
        audios: ["gropa"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["gropa"],
        answers: ["Mali", "Goma", "Gropa", "Treni"],
        correctAnswer: "Gropa"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["lapsi", "e", "goma"],
        answers: ["Lapsi e goma", "Ora e re", "Fletorja e Anës", "Libri i Mirit"],
        correctAnswer: "Lapsi e goma"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["miri", "gabon"],
        answers: ["Topi i futbollit", "Balonat e bukura", "Miri gabon", "Ura e re"],
        correctAnswer: "Miri gabon"
    },
    {
        type: "Write",
        question: "",
        audios: ["lapsi", "e", "goma"],
        answers: ["h", "L", "g", "u", "i", "R"],
        correctAnswer: "Lapsi e goma",
        givenAnswer: ["", "a", "p", "s", "", " ", "e", " ", "", "o", "m", "a"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["lapsi", "e", "goma", LessonListenConstants.NULL, "miri", "gabon", "me", "laps", "n", "fletore", LessonListenConstants.NULL, "miri", "na", "gomen", LessonListenConstants.NULL, "miri", "mori", "gomen", LessonListenConstants.NULL, "ai", "falenderon", "anen", LessonListenConstants.NEW_LINE, "pastaj", "permiresoi", "gabimin", "e", "tij", LessonListenConstants.NEW_LINE, "tani", "miri", "ka", "fletoren", "e", "paster"],
        answers: ['LAPSI', 'E', 'GOMA', LessonListenConstants.NEW_LINE, 'Miri', 'gabon', 'me', 'laps', 'në', 'fletore.', LessonListenConstants.NEW_LINE, 'Miri,', 'na', 'gomën.', LessonListenConstants.NEW_LINE, 'Miri', 'mori', 'gomën.', LessonListenConstants.NEW_LINE, 'Ai', 'falënderon', 'Anën.', LessonListenConstants.NEW_LINE, 'Pastaj,', 'përmirësoi', 'gabimin', 'e', 'tij.', LessonListenConstants.NEW_LINE, 'Tani,', 'Miri', 'ka', 'fletoren', 'e', 'pastër.']
    }
];