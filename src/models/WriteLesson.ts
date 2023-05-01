import { Colors } from "../assets/Colors"
import Question from "./Question"

export interface WriteLesson {
    id: string
    title: string 
    color: Colors
    data: Question
}