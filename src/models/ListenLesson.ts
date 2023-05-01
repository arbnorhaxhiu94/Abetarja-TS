import { Colors } from "../assets/Colors"
import Question from "./Question"

export interface ListenLesson {
    id: string
    title: string
    color: Colors
    data: Question
}