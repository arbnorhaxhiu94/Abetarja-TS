import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEYS } from "./LocalStorageKeys";

class LessonsLocalStorage {
    static getFinishedLessons = async(): Promise<string[]> => {
        let localStorageData = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.FINISHED_LESSONS);
        if (localStorageData) return JSON.parse(localStorageData) as string[];
        else return [];
    }

    static addFinishedLesson = async(lessonId: string) => {
        let finishedLessons = await this.getFinishedLessons();
        finishedLessons.push(lessonId);
        AsyncStorage.setItem(LOCAL_STORAGE_KEYS.FINISHED_LESSONS, JSON.stringify(finishedLessons));
    }

    static isLessonFinished = async (lessonId: string) => {
        let finishedLessons = await this.getFinishedLessons();
        return finishedLessons.includes(lessonId);
    }

    static removeAll = () => {
        AsyncStorage.removeItem(LOCAL_STORAGE_KEYS.FINISHED_LESSONS);
    }
}

export default LessonsLocalStorage;