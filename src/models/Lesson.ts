import { Colors } from "../assets/Colors"
import Question from "./Question"

export interface Lesson {
    id: string
    title: string
    row1: string
    row2: string
    row3: string
    color: Colors
    completed: boolean
    questions: Question[]
}