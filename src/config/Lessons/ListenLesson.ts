import { Colors } from "../../assets/Colors";
import { ListenLesson } from "../../models/ListenLesson";
import LessonListenConstants from "../Constants/LessonListenConstants.enum";

export const ListenLessons: ListenLesson[] = [
    {
        id: 'ListenLesson_1',
        title: 'A, I',
        color: Colors.BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["a", "a", "a", LessonListenConstants.NULL, "i", "i", "i", LessonListenConstants.NULL, "ai", "ai", "ai", LessonListenConstants.NULL, "ia", "ia", "ia"],
            answers: ["A", "A", "A", LessonListenConstants.NEW_LINE, "I", "I", "I", LessonListenConstants.NEW_LINE, "AI", "AI", "AI", LessonListenConstants.NEW_LINE, "IA", "IA", "IA"]
        }
    },
    {
        id: 'ListenLesson_2',
        title: 'N',
        color: Colors.GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["ana", "ani", LessonListenConstants.NULL, "ana", "na", "topin", LessonListenConstants.NULL, "ani", "na", "lapsin", LessonListenConstants.NULL, "a", "ana", "a", "ani"],
            answers: ["ANA,", "ANI", LessonListenConstants.NEW_LINE, "ANA,", "NA", LessonListenConstants.BALL_ICON, LessonListenConstants.NEW_LINE, "ANI,", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "A", "ANA", "A", "ANI"],
        }
    },
    {
        id: 'ListenLesson_3',
        title: 'E',
        color: Colors.PINK,
        data: {
            type: "Listen",
            question: "",
            audios: ["ana", "e", "ani", LessonListenConstants.NULL, "ne", "e", "eni", LessonListenConstants.NULL, "ani", "e", "eni", "mesojne", LessonListenConstants.NULL, "eni", "na", "lapsin", LessonListenConstants.NULL, "ana", "ena", "ani", "eni"],
            answers: ["ANA", "E", "ANI", LessonListenConstants.NEW_LINE, "NE", "E", "ENI", LessonListenConstants.NEW_LINE, "ANI", "E", "ENI", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "ENI", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "ANA", "ENA", "ANI", "ENI"],
        }
    },
    {
        id: 'ListenLesson_4',
        title: 'Ë',
        color: Colors.PURPLE,
        data: {
            type: "Listen",
            question: "",
            audios: ["nena", LessonListenConstants.NULL, "ne", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "ana", "e", "ani", "mesojne", LessonListenConstants.NULL, "nene", "na", "lapsin", LessonListenConstants.NULL, "nena", "ana", "e", "ani"],
            answers: ["NËNA", LessonListenConstants.NEW_LINE, "NE", "E", "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "ANA", "E", "ANI", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "NËNË,", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "NËNA,", "ANA", "E", "ANI"],
        }
    },
    {
        id: 'ListenLesson_5',
        title: 'U',
        color: Colors.RED,
        data: {
            type: "Listen",
            question: "",
            audios: ["une", "e", "nena", LessonListenConstants.NULL, "une", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "une", "mesoj2", LessonListenConstants.NULL, "nene", "na", "lapsin", LessonListenConstants.NULL, "une", "nena", "nena", "une"],
            answers: ["UNË", "E", "NËNA", LessonListenConstants.NEW_LINE, "UNË", "E", "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "UNË", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "NËNË", "NA", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "UNË", "NËNA,", "NËNA", "UNË"]
        }
    },
    {
        id: 'ListenLesson_6',
        title: 'R',
        color: Colors.YELLOW,
        data: {
            type: "Listen",
            question: "",
            audios: ["ura", "e", "re", LessonListenConstants.NULL, "une", "e", "rina", "n", "ure", LessonListenConstants.NULL, "era", "era", LessonListenConstants.NULL, "nena", "n", "shtepi", LessonListenConstants.NULL, "une", "rina", "nena", "ura"],
            answers: ["URA", "E", "RE", LessonListenConstants.NEW_LINE, "UNË", "E", "RINA", "NË", "URË", LessonListenConstants.NEW_LINE, "ERA,", "ERA!", LessonListenConstants.NEW_LINE, "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "UNË", "RINA,", "NËNA", "URA"]
        }
    },
    {
        id: 'ListenLesson_7',
        title: 'M',
        color: Colors.DARK_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "era", "era", LessonListenConstants.NULL, "muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "muri"],
            answers: ["MURI", "I", "RI", LessonListenConstants.NEW_LINE, "MIRA,", "MIRI", "E", "NËNA", "NË", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "ERA,", "ERA!", LessonListenConstants.NEW_LINE, "MURI", "I", "RI", LessonListenConstants.NEW_LINE, "MIRA", "MIRI", "MURI"]
        }
    },
    {
        id: 'ListenLesson_8',
        title: 'A, a, N, n',
        color: Colors.GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["a", "a", "a", LessonListenConstants.NULL, "na", "na", "na", LessonListenConstants.NULL, "ana", "ana", "ana", LessonListenConstants.NULL, "ana", "na", "lapsin"],
            answers: ["A", "a", "a", LessonListenConstants.NEW_LINE, "Na", "na", "na", LessonListenConstants.NEW_LINE, "Ana", "Ana", "Ana", LessonListenConstants.NEW_LINE, "Ana,", "na", LessonListenConstants.PENCIL_ICON]
        }
    },
    {
        id: 'ListenLesson_9',
        title: 'I, i, E, e',
        color: Colors.PINK,
        data: {
            type: "Listen",
            question: "",
            audios: ["ana", "e", "ani", LessonListenConstants.NULL, "ne", "e", "eni", LessonListenConstants.NULL, "ani", "e", "eni", "mesojne", LessonListenConstants.NULL, "eni", "na", "lapsin", LessonListenConstants.NULL, "ana", "ena", "ani", "eni"],
            answers: ["Ana", "e", "Ani", LessonListenConstants.NEW_LINE, "Ne", "e", "Eni", LessonListenConstants.NEW_LINE, "Ani", "e", "Eni", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "Eni", "na", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "Ana", "Ena", "Ani", "Eni"],
        }
    },
    {
        id: 'ListenLesson_10',
        title: 'Ë, ë, U, u',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["une", "e", "nena", LessonListenConstants.NULL, "une", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "une", "mesoj2", LessonListenConstants.NULL, "nene", "na", "lapsin", LessonListenConstants.NULL, "une", "nena", "nena", "une"],
            answers: ["Unë", "e", "nëna", LessonListenConstants.NEW_LINE, "Unë", "e", "nëna", "në", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "Unë", LessonListenConstants.BOOK_ICON, LessonListenConstants.NEW_LINE, "Nënë", "na", LessonListenConstants.PENCIL_ICON, LessonListenConstants.NEW_LINE, "Unë", "nëna,", "nëna", "unë"]
        }
    },
    {
        id: 'ListenLesson_11',
        title: 'R, r, M, m',
        color: Colors.RED,
        data: {
            type: "Listen",
            question: "",
            audios: ["muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "e", "nena", "n", "shtepi", LessonListenConstants.NULL, "era", "era", LessonListenConstants.NULL, "muri", "i", "ri1", LessonListenConstants.NULL, "mira", "miri", "muri", "ura"],
            answers: ["Muri", "i", "ri", LessonListenConstants.NEW_LINE, "Mira,", "Miri", "e", "nëna", "në", LessonListenConstants.HOME_ICON, LessonListenConstants.NEW_LINE, "Era,", "era!", LessonListenConstants.NEW_LINE, "Muri", "i", "ri", LessonListenConstants.NEW_LINE, "Mira,", "Miri,", "muri,", "ura"]
        }
    },
    {
        id: 'ListenLesson_12',
        title: 'O, o',
        color: Colors.YELLOW,
        data: {
            type: "Listen",
            question: "",
            audios: ["ora", "ime1", LessonListenConstants.NULL, "ana", "mori", "oren", LessonListenConstants.NULL, "o", "ana", "ora", "ime1", LessonListenConstants.NULL, "mire", "rina", "na", "oren", LessonListenConstants.NULL, "rina", "mori", "oren", LessonListenConstants.NULL, "rina", "ana", "e1", "ora"],
            answers: ['ORA', 'IME', LessonListenConstants.NEW_LINE, 'Ana', 'mori', 'orën', LessonListenConstants.NEW_LINE, 'O', 'Ana,', 'ora', 'ime', LessonListenConstants.NEW_LINE, 'Mirë', 'Rina,', 'na', 'orën', LessonListenConstants.NEW_LINE, 'Rina', 'mori', 'orën', LessonListenConstants.NEW_LINE, 'Rina,', 'Ana', 'e', 'ora']
        }
    },
    {
        id: 'ListenLesson_13',
        title: 'T, t',
        color: Colors.DARK_GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["treni", "i", "ri1", LessonListenConstants.NULL, "une", "e", "motra", "n", "tren", LessonListenConstants.NULL, "treni", "n", "ure", LessonListenConstants.NULL, "tani", "nate", LessonListenConstants.NULL, "moter", "tani", "nate", LessonListenConstants.NULL, "une", "motra", "e", "treni"],
            answers: ['TRENI', 'I', 'RI', LessonListenConstants.NEW_LINE, 'Unë', 'e', 'motra', 'në', 'tren', LessonListenConstants.NEW_LINE, 'Treni', 'në', 'urë', LessonListenConstants.NEW_LINE, 'Tani', 'natë', LessonListenConstants.NEW_LINE, 'Motër,', 'tani', 'natë', LessonListenConstants.NEW_LINE, 'Unë', 'motra', 'e', 'treni']
        }
    },
    {
        id: 'ListenLesson_14',
        title: 'L, l',
        color: Colors.GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["ne", "n", "lum", LessonListenConstants.NULL, "mira", "e", "ana", "n", "lum", LessonListenConstants.NULL, "rina", "te", "lulet", LessonListenConstants.NULL, "o", "mira", LessonListenConstants.NULL, "mira", "na", "lulet", LessonListenConstants.NULL, "mira", "ana", "e", "rina"],
            answers: ['NE', 'NË', 'LUM', LessonListenConstants.NEW_LINE, 'Mira', 'e', 'Ana', 'në', 'lum', LessonListenConstants.NEW_LINE, 'Rina', 'te', 'lulet', LessonListenConstants.NEW_LINE, 'O,', 'Mira!', LessonListenConstants.NEW_LINE, 'Mira,', 'na', 'lulet', LessonListenConstants.NEW_LINE, 'Mira', 'Ana', 'e', 'Rina']
        }
    },
    {
        id: 'ListenLesson_15',
        title: 'K, k',
        color: Colors.PINK,
        data: {
            type: "Listen",
            question: "",
            audios: ["kali", "n", "mal", LessonListenConstants.NULL, "kali", "im", "iku", "n", "mal", LessonListenConstants.NULL, "une", "n", "mal", LessonListenConstants.NULL, "ku", "ike", "o", "kali", "im", LessonListenConstants.NULL, "une", "mora", "kalin"],
            answers: ['KALI', 'NË', 'MAL', LessonListenConstants.NEW_LINE, 'Kali', 'im', 'iku', 'në', 'mal', LessonListenConstants.NEW_LINE, 'Unë', 'në', 'mal', LessonListenConstants.NEW_LINE, 'Ku', 'ike,', 'o', 'kali', 'im?', LessonListenConstants.NEW_LINE, 'Unë', 'mora', 'kalin']
        }
    },
    {
        id: 'ListenLesson_16',
        title: 'H, h',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["hena", LessonListenConstants.NULL, "nene", "hena", "lart", LessonListenConstants.NULL, "mire", "rina", "tani", "nate", LessonListenConstants.NULL, "nene", "une", "kam", "kohe", "te", "lire", LessonListenConstants.NULL, "rina", "luan", "me", "anen", "e", "nenen"],
            answers: ['HËNA', LessonListenConstants.NEW_LINE, 'Nënë,', 'hëna', 'lart', LessonListenConstants.NEW_LINE, 'Mirë', 'Rina,', 'tani', 'natë', LessonListenConstants.NEW_LINE, 'Nënë,', 'unë', 'kam', 'kohë', 'të', 'lirë', LessonListenConstants.NEW_LINE, 'Rina', 'luan', 'me', 'Anën', 'e', 'nënën']
        }
    },
    {
        id: 'ListenLesson_17',
        title: 'P, p',
        color: Colors.RED,
        data: {
            type: "Listen",
            question: "",
            audios: ["pulat", LessonListenConstants.NULL, "ani", "ka", "plot", "pula", LessonListenConstants.NULL, "pulat", "kane", "pupla", LessonListenConstants.NULL, "pulat", "hapin", "krahet", LessonListenConstants.NULL, "hani", "o", "pulat", "e", "mia", LessonListenConstants.NULL, "pulat", "e", "anit", "hane"],
            answers: ['PULAT', LessonListenConstants.NEW_LINE, 'Ani', 'ka', 'plot', 'pula', LessonListenConstants.NEW_LINE, 'Pulat', 'kanë', 'pupla', LessonListenConstants.NEW_LINE, 'Pulat', 'hapin', 'krahët', LessonListenConstants.NEW_LINE, 'Hani,', 'o', 'pulat', 'e', 'mia', LessonListenConstants.NEW_LINE, 'Pulat', 'e', 'Anit', 'hanë']
        }
    },
    {
        id: 'ListenLesson_18',
        title: 'J, j',
        color: Colors.YELLOW,
        data: {
            type: "Listen",
            question: "",
            audios: ["loja", LessonListenConstants.NULL, "ana", "jeta", "e", "ani", LessonListenConstants.NULL, "ata", "luajne", "me", "top", LessonListenConstants.NULL, "jeta", "mori", "topin", LessonListenConstants.NULL, "ani", "na", "topin", LessonListenConstants.NULL, "ani", "mori", "topin", LessonListenConstants.NULL, "ata", "luajne"],
            answers: ['LOJA', LessonListenConstants.NEW_LINE, 'Ana', 'Jeta', 'e', 'Ani', LessonListenConstants.NEW_LINE, 'Ata', 'luajnë', 'me', 'top', LessonListenConstants.NEW_LINE, 'Jeta', 'mori', 'topin', LessonListenConstants.NEW_LINE, 'Ani', 'na', 'topin', LessonListenConstants.NEW_LINE, 'Ani', 'mori', 'topin', LessonListenConstants.NEW_LINE, 'Ata', 'luajnë']
        }
    },
    {
        id: 'ListenLesson_19',
        title: 'D, d',
        color: Colors.DARK_GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["daja", "i", "anit", LessonListenConstants.NULL, "daja", "i", "anit", "jeton", "n", "mal", LessonListenConstants.NULL, "ai", "ka", "plot", "dele", LessonListenConstants.NULL, "ani", "e", "nderon", "dajen", "e", "tij"],
            answers: ['DAJA', 'I', 'ANIT', LessonListenConstants.NEW_LINE, 'Daja', 'i', 'Anit', 'jeton', 'në', 'mal', LessonListenConstants.NEW_LINE, 'Ai', 'ka', 'plot', 'dele', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'nderon', 'dajën', 'e', 'tij']
        }
    },
    {
        id: 'ListenLesson_20',
        title: 'B, b',
        color: Colors.GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["balonat", LessonListenConstants.NULL, "miri", "bleu", "plot", "balona", LessonListenConstants.NULL, "balonat", "jane", "t", "bukura", LessonListenConstants.NULL, "ana", "na", "balonen", "e", "kalter", LessonListenConstants.NULL, "ana", "luan", "me", "balonen", "e", "kalter"],
            answers: ['BALONAT', LessonListenConstants.NEW_LINE, 'Miri', 'bleu', 'plot', 'balona', LessonListenConstants.NEW_LINE, 'Balonat', 'janë', 'të', 'bukura', LessonListenConstants.NEW_LINE, 'Ana', 'na', 'balonën', 'e', 'kaltër', LessonListenConstants.NEW_LINE, 'Ana', 'luan', 'me', 'balonën', 'e', 'kaltër']
        }
    },
    {
        id: 'ListenLesson_21',
        title: 'F, f',
        color: Colors.PINK,
        data: {
            type: "Listen",
            question: "",
            audios: ["fluturat", LessonListenConstants.NULL, "fluturat", "fluturojne", "lule", "m", "lule", LessonListenConstants.NULL, "fluturat", "hapin", "krahet", LessonListenConstants.NULL, "ato", "ikin", "e", "fluturojne", "lart", LessonListenConstants.NULL, "ana", "i", "do", "fluturat"],
            answers: ['FLUTURAT', LessonListenConstants.NEW_LINE, 'Fluturat', 'fluturojnë', 'lule', 'më', 'lule', LessonListenConstants.NEW_LINE, 'Fluturat', 'hapin', 'krahët', LessonListenConstants.NEW_LINE, 'Ato', 'ikin', 'e', 'fluturojnë', 'lart', LessonListenConstants.NEW_LINE, 'Ana', 'i', 'do', 'fluturat']
        }
    },
    {
        id: 'ListenLesson_22',
        title: 'C, c',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["ani", "te", "miri", LessonListenConstants.NULL, "ani", "troket", "n", "dere", LessonListenConstants.NULL, "nena", "e", "mirit", "doli", LessonListenConstants.NULL, "cili", "je", "ti", LessonListenConstants.NULL, "une", "jam", "ani", LessonListenConstants.NULL, "mire", "eja", "brenda", LessonListenConstants.NULL, "ani", "e", "miri", "luajne"],
            answers: ['ANI', 'TE', 'MIRI', LessonListenConstants.NEW_LINE, 'Ani', 'troket', 'në', 'derë.', LessonListenConstants.NEW_LINE, 'Nëna', 'e', 'Mirit', 'doli.', LessonListenConstants.NEW_LINE, 'Cili', 'je', 'ti?', LessonListenConstants.NEW_LINE, 'Unë', 'jam', 'Ani', LessonListenConstants.NEW_LINE, 'Mirë,', 'eja', 'brenda.', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'luajnë.']
        }
    },
    {
        id: 'ListenLesson_23',
        title: 'S, s',
        color: Colors.RED,
        data: {
            type: "Listen",
            question: "",
            audios: ["lapsi", "i", "anit", LessonListenConstants.NULL, "ani", "ka", "humbur", "lapsin", LessonListenConstants.NULL, "ani", "kerkon", "lapsin", "e", "tij", LessonListenConstants.NULL, "ani", "na", "lapsin", LessonListenConstants.NULL, "ani", "mori", "lapsin", "e", "anes", LessonListenConstants.NULL, "ani", "falenderon", "anen"],
            answers: ['LAPSI', 'I', 'ANIT', LessonListenConstants.NEW_LINE, 'Ani', 'ka', 'humbur', 'lapsin', LessonListenConstants.NEW_LINE, 'Ani', 'kërkon', 'lapsin', 'e', 'tij', LessonListenConstants.NEW_LINE, 'Ani', 'na', 'lapsin', LessonListenConstants.NEW_LINE, 'Ani', 'mori', 'lapsin', 'e', 'Anës', LessonListenConstants.NEW_LINE, 'Ani', 'falënderon', 'Anën']
        }
    },
    {
        id: 'ListenLesson_24',
        title: 'Ç, ç',
        color: Colors.YELLOW,
        data: {
            type: "Listen",
            question: "",
            audios: ["ana", "u", "ftoh", LessonListenConstants.NULL, "ana", "si", "je", LessonListenConstants.NULL, "nene", "u", "ftoha", "pak", LessonListenConstants.NULL, "mire", "pra", "doo", "t", "t", "bej", "qqaj", LessonListenConstants.NULL, "ana", "pi", "qqajin", LessonListenConstants.NULL, "ana", "ben", "m", "mire"],
            answers: ['ANA', 'U', 'FTOH', LessonListenConstants.NEW_LINE, 'Ana,', 'si', 'je?', LessonListenConstants.NEW_LINE, 'Nënë', 'u', 'ftoha', 'pak', LessonListenConstants.NEW_LINE, 'Mirë', 'pra,', 'do', 'të', 'të', 'bëj', 'çaj.', LessonListenConstants.NEW_LINE, 'Ana', 'pi', 'çajin.', LessonListenConstants.NEW_LINE, 'Ana', 'bën', 'më', 'mirë.']
        }
    },
    {
        id: 'ListenLesson_25',
        title: 'Ll, ll',
        color: Colors.DARK_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["ne", "te", "halla", LessonListenConstants.NULL, "ana", "ani", "e", "rina", "te", "halla", LessonListenConstants.NULL, "halle", "ne", "t", "sollem", "ca", "lule", LessonListenConstants.NULL, "halla", "falenderon", "ata", LessonListenConstants.NULL, "ana", "ani", "rina", "e", "duan", "hallen"],
            answers: ['NE', 'TE', 'HALLA', LessonListenConstants.NEW_LINE, 'Ana', 'Ani', 'e', 'Rina', 'te', 'halla.', LessonListenConstants.NEW_LINE, 'Hallë,', 'ne', 'të', 'sollëm', 'ca', 'lule.', LessonListenConstants.NEW_LINE, 'Halla', 'falënderon', 'ata.', LessonListenConstants.NEW_LINE, 'Ana,', 'Ani,', 'Rina', 'e', 'duan', 'hallën.']
        }
    },
    {
        id: 'ListenLesson_26',
        title: 'Y, y',
        color: Colors.BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["pylli", LessonListenConstants.NULL, "ani", "e", "miri", "n", "pyll", LessonListenConstants.NULL, "ata", "luajne", "n", "pyll", "qqdo", "t", "diel", LessonListenConstants.NULL, "pylli", "ka", "plot", "lule", LessonListenConstants.NULL, "ata", "moren", "disa", "lule", LessonListenConstants.NULL, "nene", "na", "lulet", LessonListenConstants.NULL, "ata", "duan", "nenen", "e", "tyre"],
            answers: ['PYLLI', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'në', 'pyll.', LessonListenConstants.NEW_LINE, 'Ata', 'luajnë', 'në', 'pyll', 'çdo', 'të', 'diel.', LessonListenConstants.NEW_LINE, 'Pylli', 'ka', 'plot', 'lule.', LessonListenConstants.NEW_LINE, 'Ata', 'morën', 'disa', 'lule.', LessonListenConstants.NEW_LINE, 'Nënë,', 'na', 'lulet.', LessonListenConstants.NEW_LINE, 'Ata', 'duan', 'nënën', 'e', 'tyre.']
        }
    },
    {
        id: 'ListenLesson_27',
        title: 'G, g',
        color: Colors.PINK,
        data: {
            type: "Listen",
            question: "",
            audios: ["lapsi", "e", "goma", LessonListenConstants.NULL, "miri", "gabon", "me", "laps", "n", "fletore", LessonListenConstants.NULL, "miri", "na", "gomen", LessonListenConstants.NULL, "miri", "mori", "gomen", LessonListenConstants.NULL, "ai", "falenderon", "anen", LessonListenConstants.NEW_LINE, "pastaj", "permiresoi", "gabimin", "e", "tij", LessonListenConstants.NEW_LINE, "tani", "miri", "ka", "fletoren", "e", "paster"],
            answers: ['LAPSI', 'E', 'GOMA', LessonListenConstants.NEW_LINE, 'Miri', 'gabon', 'me', 'laps', 'në', 'fletore.', LessonListenConstants.NEW_LINE, 'Miri,', 'na', 'gomën.', LessonListenConstants.NEW_LINE, 'Miri', 'mori', 'gomën.', LessonListenConstants.NEW_LINE, 'Ai', 'falënderon', 'Anën.', LessonListenConstants.NEW_LINE, 'Pastaj,', 'përmirësoi', 'gabimin', 'e', 'tij.', LessonListenConstants.NEW_LINE, 'Tani,', 'Miri', 'ka', 'fletoren', 'e', 'pastër.']
        }
    },
    {
        id: 'ListenLesson_28',
        title: 'Rr, rr',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["rruga", "jone", LessonListenConstants.NULL, "rruga", "jone", "ka", "plot", "gropa", LessonListenConstants.NULL, "rrota", "e", "traktorit", "ra", "n", "grope1", LessonListenConstants.NULL, "miri", "e", "ani", "ndihmuan", "dajen", "e", "tyre", LessonListenConstants.NULL, "rrota", "doli", "nga", "gropa", LessonListenConstants.NEW_LINE, "daja", "falenderon", "ata"],
            answers: ['RRUGA', 'JONË', LessonListenConstants.NEW_LINE, 'Rruga', 'jonë', 'ka', 'plot', 'gropa.', LessonListenConstants.NEW_LINE, 'Rrota', 'e', 'traktorit', 'ra', 'në', 'gropë.', LessonListenConstants.NEW_LINE, 'Miri', 'e', 'Ani', 'ndihmuan', 'dajën', 'e', 'tyre.', LessonListenConstants.NEW_LINE, 'Rrota', 'doli', 'nga', 'gropa.', LessonListenConstants.NEW_LINE, 'Daja', 'falënderon', 'ata.']
        }
    },
    {
        id: 'ListenLesson_29',
        title: 'Sh, sh',
        color: Colors.RED,
        data: {
            type: "Listen",
            question: "",
            audios: ["ana", "e", "ani", "n", "shkolle", LessonListenConstants.NULL, "ana", "e", "ani", "shkojne", "n", "shkolle", LessonListenConstants.NULL, "ata", "ulen", "n", "banken", "e", "pare", LessonListenConstants.NULL, "ata", "kane", "shume", "shoke", LessonListenConstants.NULL, "ana", "meson", LessonListenConstants.NEW_LINE, "ani", "shkruan", "n", "fletoren", "e", "tij"],
            answers: ['ANA', 'E', 'ANI', 'NË', 'SHKOLLË', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'shkojnë', 'në', 'shkollë.', LessonListenConstants.NEW_LINE, 'Ata', 'ulen', 'në', 'bankën', 'e', 'parë.', LessonListenConstants.NEW_LINE, 'Ata', 'kanë', 'shumë', 'shokë.', LessonListenConstants.NEW_LINE, 'Ana', 'mëson.', LessonListenConstants.NEW_LINE, 'Ani', 'shkruan', 'në', 'fletoren', 'e', 'tij.']
        }
    },
    {
        id: 'ListenLesson_30',
        title: 'Z, z',
        color: Colors.YELLOW,
        data: {
            type: "Listen",
            question: "",
            audios: ["zogu", "i", "lire", LessonListenConstants.NULL, "zogu", "fluturon", "i", "lire", LessonListenConstants.NULL, "ana", "e", "rina", "pane", "zogun", LessonListenConstants.NULL, "zogu", "zbriti", "n", "toke", LessonListenConstants.NULL, "ato", "iu", "afruan", "zogut", LessonListenConstants.NEW_LINE, "por", "zogu", "u", "frikesua", LessonListenConstants.NULL, "zogu", "filloi", "t", "fluturoje", "perseri"],
            answers: ['ZOGU', 'I', 'LIRË', LessonListenConstants.NEW_LINE, 'Zogu', 'fluturon', 'i', 'lirë.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Rina', 'panë', 'zogun.', LessonListenConstants.NEW_LINE, 'Zogu', 'zbriti', 'në', 'tokë.', LessonListenConstants.NEW_LINE, 'Ato', 'iu', 'afruan', 'zogut.', LessonListenConstants.NEW_LINE, 'Por,', 'zogu', 'u', 'frikësua.', LessonListenConstants.NEW_LINE, 'Zogu', 'filloi', 'të', 'fluturojë', 'përsëri.']
        }
    },
    {
        id: 'ListenLesson_31',
        title: 'V, v',
        color: Colors.PURPLE,
        data: {
            type: "Listen",
            question: "",
            audios: ["ani", "vrapon", LessonListenConstants.NULL, "ani", "vrapon", "n", "pyll", LessonListenConstants.NULL, "pse", "vrapon", "e", "pyeten", "shoket", LessonListenConstants.NULL, "sepse", "vrapimi", "eshte", "i", "dobishem", "ua", "priti", "ani", LessonListenConstants.NULL, "tani", "shoket", "vrapojne", "s", "bashku", "me", "anin", "n", "pyll"],
            answers: ['ANI', 'VRAPON', LessonListenConstants.NEW_LINE, 'Ani', 'vrapon', 'në', 'pyll.', LessonListenConstants.NEW_LINE, '"Pse', 'vrapon?" -', 'e', 'pyetën', 'shokët.', LessonListenConstants.NEW_LINE, '"Sepse', 'vrapimi', 'është', 'i', 'dobishëm." -', 'ua', 'priti', 'Ani.', LessonListenConstants.NEW_LINE, 'Tani,', 'shokët', 'vrapojnë', 'së', 'bashku', 'me', 'Anin', 'në', 'pyll.']
        }
    },
    {
        id: 'ListenLesson_32',
        title: 'Q, q',
        color: Colors.DARK_GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["shoqja", "e", "anes", LessonListenConstants.NULL, "shoqja", "e", "anes", "quhet", "rina", LessonListenConstants.NULL, "ana", "e", "rina", "jane", "shoqe", "banke", LessonListenConstants.NULL, "rina", "ka", "plot", "lapsa", "t", "kuq", LessonListenConstants.NULL, "rina", "ia", "jep", "anes", "dy", "lapsa", "t", "kuq", LessonListenConstants.NEW_LINE, "ana", "falenderon", "rinen"],
            answers: ['SHOQJA', 'E', 'ANËS', LessonListenConstants.NEW_LINE, 'Shoqja', 'e', 'Anës', 'quhet', 'Rina.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Rina', 'janë', 'shoqe', 'banke.', LessonListenConstants.NEW_LINE, 'Rina', 'ka', 'plot', 'lapsa', 'të', 'kuq', LessonListenConstants.NEW_LINE, 'Rina', 'ia', 'jep', 'Anës', 'dy', 'lapsa', 'të', 'kuq.', LessonListenConstants.NEW_LINE, 'Ana', 'falënderon', 'Rinën.']
        }
    },
    {
        id: 'ListenLesson_33',
        title: 'Dh, dh',
        color: Colors.PINK,
        data: {
            type: "Listen",
            question: "",
            audios: ["dhuratat", LessonListenConstants.NULL, "tani", "erdhi", "muaji", "dhjetor", LessonListenConstants.NULL, "n", "dhjetor", "eshte", "viti", "i", "ri", LessonListenConstants.NULL, "ana", "e", "ani", "jane", "femije", "t", "mire", LessonListenConstants.NULL, "prandaj", "babadimri", "u", "solli", "plot", "dhurata", LessonListenConstants.NEW_LINE, "ata", "falenderuan", "babadimrin"],
            answers: ['DHURATAT', LessonListenConstants.NEW_LINE, 'Tani', 'erdhi', 'muaji', 'Dhjetor.', LessonListenConstants.NEW_LINE, 'Në', 'Dhjetor', 'është', 'Viti', 'i', 'ri.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'janë', 'fëmijë', 'të', 'mirë.', LessonListenConstants.NEW_LINE, 'Prandaj,', 'Babadimri', 'u', 'solli', 'plot', 'dhurata.', LessonListenConstants.NEW_LINE, 'Ata', 'falënderuan', 'Babadimrin.']
        }
    },
    {
        id: 'ListenLesson_34',
        title: 'Nj, nj',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["nj", "zog", LessonListenConstants.NULL, "ani", "e", "miri", "shkuan", "n", "mal", LessonListenConstants.NULL, "ata", "pane", "nj", "shtepi", LessonListenConstants.NULL, "nga", "aty", "vinte", "nj", "z", LessonListenConstants.NULL, "ata", "u", "afruan", "t", "frikesuar", LessonListenConstants.NEW_LINE, "por", "pane", "vetem", "nj", "zog", LessonListenConstants.NULL, "pastaj", "qeshen", "me", "njeri", "tjetrin"],
            answers: ['NJË', 'ZOG', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'shkuan', 'në', 'mal.', LessonListenConstants.NEW_LINE, 'Ata', 'panë', 'një', 'shtëpi.', LessonListenConstants.NEW_LINE, 'Nga', 'aty', 'vinte', 'një', 'zë.', LessonListenConstants.NEW_LINE, 'Ata', 'u', 'afruan', 'të', 'frikësuar.', LessonListenConstants.NEW_LINE, 'Por,', 'panë', 'vetëm', 'një', 'zog.', LessonListenConstants.NEW_LINE, 'Pastaj,', 'qeshën', 'me', 'njëri', 'tjetrin.']
        }
    },
    {
        id: 'ListenLesson_35',
        title: 'Gj, gj',
        color: Colors.RED,
        data: {
            type: "Listen",
            question: "",
            audios: ["ngjyra", "e", "kuqe", LessonListenConstants.NULL, "ana", "te", "tezja", "e", "saj", LessonListenConstants.NULL, "tezja", "e", "anes", "ka", "plot", "pula", LessonListenConstants.NULL, "pulat", "i", "ruan", "gjeli", LessonListenConstants.NULL, "pulat", "kane", "ngjyre", "t", "kuqe", LessonListenConstants.NEW_LINE, "gjeli", "ka", "ngjyre", "te", "bardhe"],
            answers: ['NGJYRA', 'E', 'KUQE', LessonListenConstants.NEW_LINE, 'Ana', 'te', 'tezja', 'e', 'saj.', LessonListenConstants.NEW_LINE, 'Tezja', 'e', 'Anës', 'ka', 'plot', 'pula.', LessonListenConstants.NEW_LINE, 'Pulat', 'i', 'ruan', 'gjeli.', LessonListenConstants.NEW_LINE, 'Pulat', 'kanë', 'ngjyrë', 'të', 'kuqe.', LessonListenConstants.NEW_LINE, 'Gjeli', 'ka', 'ngjyrë', 'të', 'bardhë.']
        }
    },
    {
        id: 'ListenLesson_36',
        title: 'Th, th',
        color: Colors.YELLOW,
        data: {
            type: "Listen",
            question: "",
            audios: ["gjethet", LessonListenConstants.NULL, "tani", "eshte", "vjeshte", LessonListenConstants.NULL, "n", "vjeshte", "gjethet", "bien", "n", "toke", LessonListenConstants.NULL, "ana", "e", "ani", "mbledhin", "gjethet", LessonListenConstants.NULL, "sa", "shume", "gjethe", "tha", "ani", LessonListenConstants.NEW_LINE, "por", "ata", "pastruan", "tere", "oborrin"],
            answers: ['GJETHET', LessonListenConstants.NEW_LINE, 'Tani', 'është', 'vjeshtë.', LessonListenConstants.NEW_LINE, 'Në', 'vjeshtë,', 'gjethet', 'bien', 'në', 'tokë.', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'mbledhin', 'gjethet.', LessonListenConstants.NEW_LINE, '"Sa', 'shumë', 'gjethe" -', 'tha', 'Ani.', LessonListenConstants.NEW_LINE, 'Por,', 'ata', 'pastruan', 'tërë', 'oborrin.']
        }
    },
    {
        id: 'ListenLesson_37',
        title: 'X, x',
        color: Colors.DARK_BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["nxito", "ani", LessonListenConstants.NULL, "ani", "e", "miri", "luajne", "me", "top", LessonListenConstants.NULL, "ani", "ka", "topin", LessonListenConstants.NULL, "nxito", "ani", "tha", "miri", LessonListenConstants.NULL, "m", "gjuaj", "topin", "tha", "perseri", "miri", LessonListenConstants.NEW_LINE, "ani", "gjuan", "topin", "te", "miri", LessonListenConstants.NULL, "miri", "mori", "topin", LessonListenConstants.NULL, "miri", "falenderon", "anin"],
            answers: ['NXITO', 'ANI', LessonListenConstants.NEW_LINE, 'Ani', 'e', 'Miri', 'luajnë', 'me', 'top.', LessonListenConstants.NEW_LINE, 'Ani', 'ka', 'topin.', LessonListenConstants.NEW_LINE, '"Nxito,', 'Ani" -', 'tha', 'Miri.', LessonListenConstants.NEW_LINE, '"Më', 'gjuaj', 'topin" -', 'tha', 'përsëri', 'Miri.', LessonListenConstants.NEW_LINE, 'Ani', 'gjuan', 'topin', 'te', 'Miri.', LessonListenConstants.NEW_LINE, 'Miri', 'mori', 'topin.', LessonListenConstants.NEW_LINE, "Miri", "falënderon", "Anin."]
        }
    },
    {
        id: 'ListenLesson_38',
        title: 'Xh, xh',
        color: Colors.BLUE,
        data: {
            type: "Listen",
            question: "",
            audios: ["miri", "te", "xhaxhai", LessonListenConstants.NULL, "miri", "te", "xhaxhai", "i", "tij", LessonListenConstants.NULL, "xhaxhai", "i", "mirit1", "ka", "plot", "libra", LessonListenConstants.NULL, "miri", "i", "doo", "librat", LessonListenConstants.NULL, "xhaxhai", "i", "jep1", "mirit1", "nj", "liber", LessonListenConstants.NEW_LINE, "miri", "e", "falenderon"],
            answers: ['MIRI', 'TE', 'XHAXHAI', LessonListenConstants.NEW_LINE, 'Miri', 'te', 'xhaxhai', 'i', 'tij.', LessonListenConstants.NEW_LINE, 'Xhaxhai', 'i', 'Mirit', 'ka', 'plot', 'libra.', LessonListenConstants.NEW_LINE, 'Miri', 'i', 'do', 'librat.', LessonListenConstants.NEW_LINE, 'Xhaxhai', 'i', 'jep', 'Mirit', 'një', 'libër.', LessonListenConstants.NEW_LINE, 'Miri', 'e', 'falënderon.']
        }
    },
    {
        id: 'ListenLesson_39',
        title: 'Zh, zh',
        color: Colors.DARK_GREEN,
        data: {
            type: "Listen",
            question: "",
            audios: ["vazhdo", "ani", LessonListenConstants.NULL, "ana", "e", "ani", "vrapojne", "n", "pyll", LessonListenConstants.NULL, "ani", "degjoi", "nj", "zhurme", LessonListenConstants.NULL, "ai", "u", "ndal", LessonListenConstants.NULL, "vazhdo", "ani", "eshte", "vetem", "nj", "zog", "tha", "ana", LessonListenConstants.NEW_LINE, "ani", "pa", "zogun", "dhe", "filloi", "t", "vrapoje", "perseri"],
            answers: ['VAZHDO', 'ANI', LessonListenConstants.NEW_LINE, 'Ana', 'e', 'Ani', 'vrapojnë', 'në', 'pyll.', LessonListenConstants.NEW_LINE, 'Ani', 'dëgjoi', 'një', 'zhurmë.', LessonListenConstants.NEW_LINE, 'Ai', 'u', 'ndal.', LessonListenConstants.NEW_LINE, '"Vazhdo', 'Ani,', 'është', 'vetëm', 'një', 'zog." -', 'tha', 'Ana.', LessonListenConstants.NEW_LINE, 'Ani', 'pa', 'zogun', 'dhe', 'filloi', 'të', 'vrapojë', 'përsëri.']
        }
    }
];