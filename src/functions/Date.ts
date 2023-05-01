import { LanguageType } from "../models/Language";

class FormatDate {
    static getDay(day: number, LANG: LanguageType): string {
        switch (day) {
            case 1: return LANG.MONDAY;
            case 2: return LANG.TUESDAY;
            case 3: return LANG.WEDNESDAY;
            case 4: return LANG.THURSDAY;
            case 5: return LANG.FRIDAY;
            case 6: return LANG.SATURDAY;
            case 7: return LANG.SUNDAY;
            default: return "";
        }
    }
    
    static getMonth(month: number, LANG: LanguageType): string {
        switch (month) {
            case 0: return LANG.JANUARY;
            case 1: return LANG.FEBRUARY;
            case 2: return LANG.MARCH;
            case 3: return LANG.APRIL;
            case 4: return LANG.MAY;
            case 5: return LANG.JUNE;
            case 6: return LANG.JULY;
            case 7: return LANG.AUGUST;
            case 8: return LANG.SEPTEMBER;
            case 9: return LANG.OCTOBER;
            case 10: return LANG.NOVEMBER;
            case 11: return LANG.DECEMBER;
            default: return "";
        }
    }

    static getTime(date: Date): string {
        let hours = this.shouldAddZeroInFront(date.getHours());
        let minutes = this.shouldAddZeroInFront(date.getMinutes());
        return hours+":"+minutes;
    }

    static getDateAndMonth(date: Date, LANG: LanguageType) {
        let day = date.getDate();
        let month = this.getMonth(date.getMonth(), LANG);
        return day+" "+month.substring(0,3);
    }

    static getMonthAndYear(date: Date, LANG: LanguageType) {
        let month = this.getMonth(date.getMonth(), LANG);
        let year = date.getFullYear();
        return month.substring(0, 3)+" "+year;
    }

    static getDateMonthYear(date: Date, LANG: LanguageType): string {
        let day = this.shouldAddZeroInFront(date.getDate());
        let month = this.getMonth(date.getMonth(), LANG).substring(0,3);
        let year = date.getFullYear();
        return day+" "+month+" "+year;
    }
    
    static shouldAddZeroInFront(value: number): string {
        if (value < 10) return "0"+value; 
        else return value.toString();
    }

    static isToday(date: Date): boolean {
        let today = new Date().toLocaleDateString();
        if (today === date.toLocaleDateString()) return true;
        else return false;
    }

    static isCurrentYear(date: Date): boolean {
        let year = date.getFullYear();
        let currentYear = new Date(Date.now()).getFullYear();
        if (year === currentYear) return true;
        else return false;
    }
}

export default FormatDate;