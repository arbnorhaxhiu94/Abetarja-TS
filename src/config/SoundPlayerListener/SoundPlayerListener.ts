import { EmitterSubscription, Platform } from "react-native";
import SoundPlayer from "react-native-sound-player";

class SoundPlayerListener {
    private static onFinishedPlayingSubscription: EmitterSubscription | null = null;
    private static onFinishedLoadingSubscription: EmitterSubscription | null = null;
    private static onFinishedLoadingFileSubscription: EmitterSubscription | null = null;
    private static onFinishedLoadingURLSubscription: EmitterSubscription | null = null;

    static add = () => {
        this.onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', () => {});
        this.onFinishedLoadingSubscription = SoundPlayer.addEventListener('FinishedLoading', () => {});
        this.onFinishedLoadingFileSubscription = SoundPlayer.addEventListener('FinishedLoadingFile', () => {});
        this.onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', () => {});
    }

    static remove = () => {
        this.onFinishedPlayingSubscription!.remove();
        this.onFinishedLoadingSubscription!.remove();
        this.onFinishedLoadingURLSubscription!.remove();
        this.onFinishedLoadingFileSubscription!.remove();
        this.stopSound();
    }

    static playSound = (audioFileName: string) =>  SoundPlayer.playSoundFile(audioFileName, "m4a");

    static playMultipleSounds = (audioFiles: string[]) => {
        audioFiles.forEach((audioFileName, index) => {
            if (audioFileName !== "null") {
                setTimeout(() => { SoundPlayer.playSoundFile(audioFileName, "m4a"); }, 1000*index);
            }
        });
    }

    static playMultipleSoundsWithCustomDelay = (audioFiles: string[], delays: number[]) => {
        audioFiles.forEach((audioFileName, index) => {
            if (audioFileName !== "null") {
                setTimeout(() => { SoundPlayer.playSoundFile(audioFileName, "m4a"); }, 1000*delays[index]);
            }
        });
    }

    static stopSound = () => SoundPlayer.stop();

    static playCorrectAnswerSound = () => SoundPlayer.playSoundFile("check", "m4a");

    static playIncorrectAnswerSound = () => SoundPlayer.playSoundFile("pop", "m4a");

    static playLessonCompletedSound = () => {
        const name = Platform.OS === "android" ? "lesson_completed" : "lesson-completed";
        SoundPlayer.playSoundFile(name, "m4a");
    }
}

export default SoundPlayerListener;