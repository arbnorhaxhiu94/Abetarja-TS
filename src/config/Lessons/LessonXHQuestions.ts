import Question from "../../models/Question";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const LessonXHQuestions: Question[] = [
    {
        type: "Tip",
        question: "Xh",
        audios: ["xh", "madhe"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "xh", "madhe"],
        answers: ["Gj", "X", "Xh", "Th"],
        correctAnswer: "Xh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Tip",
        question: "xh",
        audios: ["xh", "vogel"]
    },
    {
        type: "Select One",
        question: "",
        audios: ["cila", "xh", "vogel"],
        answers: ["xh", "x", "th", "dh"],
        correctAnswer: "xh",
        audioDelays: [0, 1.8, 2.3]
    },
    {
        type: "Select Multiple",
        question: "",
        audios: ["prek", "xh"],
        answers: ["X", "th", "xh", "th", "xh", "x", "Xh", "T", "gj"],
        correctAnswer: ["Xh", "xh"],
        audioDelays: [0, 2.5]
    },
    {
        type: "Tip",
        question: "Xhami",
        audios: ["xhami"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["xhami"],
        answers: ["Guximi", "Xhaxhai", "Halla", "Xhami"],
        correctAnswer: "Xhami"
    },
    {
        type: "Tip",
        question: "Xhaxhai",
        audios: ["xhaxhai"]
    },
    {
        type: "Select Word",
        question: "",
        audios: ["xhaxhai"],
        answers: ["Guximi", "Xhaxhai", "Halla", "Xhami"],
        correctAnswer: "Xhaxhai"
    },
    {
        type: "Select Word",
        question: "",
        audios: ["xhaxhai", "i", "mirit1"],
        answers: ["Xhaxhai i Mirit", "Halla e Anit", "Xhaxhai i Anit", "Halla e Mirit"],
        correctAnswer: "Xhaxhai i Mirit"
    },
    {
        type: "Write",
        question: "",
        audios: ["xhaxhai", "i", "mirit1"],
        answers: ["M", "X", "V", "j", "h", "h", "x"],
        correctAnswer: "Xhaxhai i Mirit",
        givenAnswer: ["", "", "a", "", "", "a", "i", " ", "i", " ", "", "i", "r", "i", "t"]
    },
    {
        type: "Listen",
        question: "",
        audios: ["miri", "te", "xhaxhai", LessonListenConstants.NULL, "miri", "te", "xhaxhai", "i", "tij", LessonListenConstants.NULL, "xhaxhai", "i", "mirit1", "ka", "plot", "libra", LessonListenConstants.NULL, "miri", "i", "doo", "librat", LessonListenConstants.NULL, "xhaxhai", "i", "jep1", "mirit1", "nj", "liber", LessonListenConstants.NEW_LINE, "miri", "e", "falenderon"],
        answers: ['MIRI', 'TE', 'XHAXHAI', LessonListenConstants.NEW_LINE, 'Miri', 'te', 'xhaxhai', 'i', 'tij.', LessonListenConstants.NEW_LINE, 'Xhaxhai', 'i', 'Mirit', 'ka', 'plot', 'libra.', LessonListenConstants.NEW_LINE, 'Miri', 'i', 'do', 'librat.', LessonListenConstants.NEW_LINE, 'Xhaxhai', 'i', 'jep', 'Mirit', 'një', 'libër.', LessonListenConstants.NEW_LINE, 'Miri', 'e', 'falënderon.']
    }
];