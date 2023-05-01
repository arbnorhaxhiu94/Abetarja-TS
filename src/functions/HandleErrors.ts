import { LanguageType } from "../models/Language";

export const handleErrors = (e: any, LANG: LanguageType): string => {

    console.log("Error:", e)
    if (e.code === "auth/user-not-found") {
        return LANG.INVALID_EMAIL;
    } else if (e.code === "auth/wrong-password") {
        return LANG.INVALID_PASSWORD;
    } else if (e.code === "auth/email-already-in-use") {
        return LANG.EMAIL_TAKEN;
    } else {
        return JSON.stringify(e);
    }
}