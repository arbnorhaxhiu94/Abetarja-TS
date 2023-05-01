export type QuestionType = "Tip" | "Select One" | "Select Multiple" | "Select Word" | "Write" | "Listen";

interface Question {
    type: QuestionType
    question: string
    answers?: string[]
    correctAnswer?: string | string[]
    audios?: string[]
    givenAnswer?: string[]
    audioDelays?: number[]
}

export default Question;