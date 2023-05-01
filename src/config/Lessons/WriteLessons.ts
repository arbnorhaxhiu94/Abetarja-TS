import { Colors } from "../../assets/Colors";
import { WriteLesson } from "../../models/WriteLesson";

export const WriteLessons: WriteLesson[] = [
    {
        id: 'WriteLesson_1',
        title: 'A, I',
        color: Colors.BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["ai"],
            answers: ["A", "E", "N", "I"],
            correctAnswer: "AI",
            givenAnswer: ["A", ""]
        }
    },
    {
        id: 'WriteLesson_2',
        title: 'N',
        color: Colors.GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["ana"],
            answers: ["I", "N", "A"],
            correctAnswer: "ANA",
            givenAnswer: ["A", "", "A"]
        }
    },
    {
        id: 'WriteLesson_3',
        title: 'E',
        color: Colors.PINK,
        data: {
            type: "Write",
            question: "",
            audios: ["ne", "e", "ana"],
            answers: ["I", "N", "A", "E", "I", "E"],
            correctAnswer: "NE E ANA",
            givenAnswer: ["", "", " ", "", " ", "A", "N", "A"]
        }
    },
    {
        id: 'WriteLesson_4',
        title: 'Ë',
        color: Colors.PURPLE,
        data: {
            type: "Write",
            question: "",
            audios: ["ne", "e", "nena"],
            answers: ["I", "N", "Ë", "E", "A"],
            correctAnswer: "NE E NËNA",
            givenAnswer: ["", "E", " ", "E", " ", "N", "", "N", "A"]
        }
    },
    {
        id: 'WriteLesson_5',
        title: 'U',
        color: Colors.RED,
        data: {
            type: "Write",
            question: "",
            audios: ["une", "e", "nena"],
            answers: ["I", "U", "Ë", "E", "N"],
            correctAnswer: "UNË E NËNA",
            givenAnswer: ["", "N", "Ë", " ", "", " ", "N", "Ë", "", "A"]
        }
    },
    {
        id: 'WriteLesson_6',
        title: 'R',
        color: Colors.YELLOW,
        data: {
            type: "Write",
            question: "",
            audios: ["ura", "e", "re"],
            answers: ["R", "A", "R", "E", "I"],
            correctAnswer: "URA E RE",
            givenAnswer: ["U", "", "A", " ", "E", " ", "", ""]
        }
    },
    {
        id: 'WriteLesson_7',
        title: 'M',
        color: Colors.DARK_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["muri", "i", "ri1"],
            answers: ["R", "M", "A", "E", "I"],
            correctAnswer: "MURI I RI",
            givenAnswer: ["", "U", "R", "I", " ", "", " ", "", "I"]
        }
    },
    {
        id: 'WriteLesson_8',
        title: 'A, a, N, n',
        color: Colors.GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["ana"],
            answers: ["n", "a", "A"],
            correctAnswer: "Ana",
            givenAnswer: ["A", "", ""]
        }
    },
    {
        id: 'WriteLesson_9',
        title: 'I, i, E, e',
        color: Colors.PINK,
        data: {
            type: "Write",
            question: "",
            audios: ["ena", "e", "eni"],
            answers: ["n", "E", "e", "i", "E", "A"],
            correctAnswer: "Ena e Eni",
            givenAnswer: ["", "n", "a", " ", "", " ", "", "n", "i"]
        }
    },
    {
        id: 'WriteLesson_10',
        title: 'Ë, ë, U, u',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["une", "e", "nena"],
            answers: ["a", "U", "ë", "i", "ë", "A"],
            correctAnswer: "Unë e nëna",
            givenAnswer: ["", "n", "", " ", "e", " ", "n", "", "n", "a"]
        }
    },
    {
        id: 'WriteLesson_11',
        title: 'R, r, M, m',
        color: Colors.RED,
        data: {
            type: "Write",
            question: "",
            audios: ["muri", "i", "ri"],
            answers: ["i", "E", "r", "M", "ë"],
            correctAnswer: "Muri i ri",
            givenAnswer: ["", "u", "r", "i", " ", "", " ", "", "i"]
        }
    },
    {
        id: 'WriteLesson_12',
        title: 'O, o',
        color: Colors.YELLOW,
        data: {
            type: "Write",
            question: "",
            audios: ["ora", "e", "re"],
            answers: ["O", "m", "r", "u", "e"],
            correctAnswer: "Ora e re",
            givenAnswer: ["", "r", "a", " ", "e", " ", "", ""]
        }
    },
    {
        id: 'WriteLesson_13',
        title: 'T, t',
        color: Colors.DARK_GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["treni", "i", "ri1"],
            answers: ["r", "m", "T", "i", "e"],
            correctAnswer: "Treni i ri",
            givenAnswer: ["", "r", "e", "n", "", " ", "i", " ", "", "i"]
        }
    },
    {
        id: 'WriteLesson_14',
        title: 'L, l',
        color: Colors.GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["ne", "te", "lumi"],
            answers: ["r", "l", "t", "i", "N"],
            correctAnswer: "Ne te lumi",
            givenAnswer: ["", "e", " ", "", "e", " ", "", "u", "m", "i"]
        }
    },
    {
        id: 'WriteLesson_15',
        title: 'K, k',
        color: Colors.PINK,
        data: {
            type: "Write",
            question: "",
            audios: ["kali", "i", "kalter"],
            answers: ["a", "t", "k", "u", "K"],
            correctAnswer: "Kali i kaltër",
            givenAnswer: ["", "a", "l", "i", " ", "i", " ", "", "a", "l", "", "ë", "r"]
        }
    },
    {
        id: 'WriteLesson_16',
        title: 'H, h',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["hena", "lart"],
            answers: ["t", "u", "H", "a", "e"],
            correctAnswer: "Hëna lart",
            givenAnswer: ["", "ë", "n", "a", " ", "l", "", "r", ""]
        }
    },
    {
        id: 'WriteLesson_17',
        title: 'P, p',
        color: Colors.RED,
        data: {
            type: "Write",
            question: "",
            audios: ["ani", "ka", "plot", "pula"],
            answers: ["k", "A", "p", "r", "p", "o", "m"],
            correctAnswer: "Ani ka plot pula",
            givenAnswer: ["", "n", "i", " ", "", "a", " ", "", "l", "o", "t", " ", "", "u", "l", "a"]
        }
    },
    {
        id: 'WriteLesson_18',
        title: 'J, j',
        color: Colors.YELLOW,
        data: {
            type: "Write",
            question: "",
            audios: ["loja", "me", "top"],
            answers: ["t", "r", "e", "j", "m", "P"],
            correctAnswer: "Loja me top",
            givenAnswer: ["L", "o", "", "a", " ", "", "e", " ", "", "o", "p"]
        }
    },
    {
        id: 'WriteLesson_19',
        title: 'D, d',
        color: Colors.DARK_GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["daja", "i", "anit"],
            answers: ["i", "m", "t", "o", "D", "k"],
            correctAnswer: "Daja i Anit",
            givenAnswer: ["", "a", "j", "a", " ", "", " ", "A", "n", "i", ""]
        }
    },
    {
        id: 'WriteLesson_20',
        title: 'B, b',
        color: Colors.GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["balonat", "e", "bukura"],
            answers: ["m", "o", "b", "a", "K", "B"],
            correctAnswer: "Balonat e bukura",
            givenAnswer: ["", "a", "l", "", "n", "a", "t", " ", "e", " ", "", "u", "k", "u", "r", ""]
        }
    },
    {
        id: 'WriteLesson_21',
        title: 'F, f',
        color: Colors.PINK,
        data: {
            type: "Write",
            question: "",
            audios: ["fluturat"],
            answers: ["m", "t", "j", "a", "u", "F"],
            correctAnswer: "Fluturat",
            givenAnswer: ["", "l", "u", "", "u", "r", "", "t"]
        }
    },
    {
        id: 'WriteLesson_22',
        title: 'C, c',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["cili", "je", "ti"],
            answers: ["C", "t", "o", "M", "j", "a"],
            correctAnswer: "Cili je ti?",
            givenAnswer: ["", "i", "l", "i", " ", "", "e", " ", "", "i", "?"]
        }
    },
    {
        id: 'WriteLesson_23',
        title: 'S, s',
        color: Colors.RED,
        data: {
            type: "Write",
            question: "",
            audios: ["ani", "meson"],
            answers: ["J", "i", "n", "k", "s", "T"],
            correctAnswer: "Ani mëson",
            givenAnswer: ["A", "n", "", " ", "m", "ë", "", "o", ""]
        }
    },
    {
        id: 'WriteLesson_24',
        title: 'Ç, ç',
        color: Colors.YELLOW,
        data: {
            type: "Write",
            question: "",
            audios: ["qqekiqqi", "i", "anit"],
            answers: ["H", "A", "ç", "e", "Ç", "b"],
            correctAnswer: "Çekiçi i Anit",
            givenAnswer: ["", "e", "k", "i", "", "i", " ", "i", " ", "", "n", "i", "t"]
        }
    },
    {
        id: 'WriteLesson_25',
        title: 'Ll, ll',
        color: Colors.DARK_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["miri", "luan1", "futboll"],
            answers: ["l", "T", "l", "p", "M", "l"],
            correctAnswer: "Miri luan futboll",
            givenAnswer: ["", "i", "r", "i", " ", "", "u", "a", "n", " ", "f", "u", "t", "b", "o", "", ""]
        }
    },
    {
        id: 'WriteLesson_26',
        title: 'Y, y',
        color: Colors.BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["ne", "n", "pyll"],
            answers: ["N", "s", "y", "p", "ë", "o"],
            correctAnswer: "Ne në pyll",
            givenAnswer: ["", "e", " ", "n", "", " ", "p", "", "l", "l"]
        }
    },
    {
        id: 'WriteLesson_27',
        title: 'G, g',
        color: Colors.PINK,
        data: {
            type: "Write",
            question: "",
            audios: ["lapsi", "e", "goma"],
            answers: ["h", "L", "g", "u", "i", "R"],
            correctAnswer: "Lapsi e goma",
            givenAnswer: ["", "a", "p", "s", "", " ", "e", " ", "", "o", "m", "a"]
        }
    },
    {
        id: 'WriteLesson_28',
        title: 'Rr, rr',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["rruga", "jone"],
            answers: ["o", "r", "R", "e", "j", "G"],
            correctAnswer: "Rruga jonë",
            givenAnswer: ["", "", "u", "g", "a", " ", "", "o", "n", "ë"]
        }
    },
    {
        id: 'WriteLesson_29',
        title: 'Sh, sh',
        color: Colors.RED,
        data: {
            type: "Write",
            question: "",
            audios: ["shoket", "e", "anit"],
            answers: ["o", "h", "R", "e", "n", "S"],
            correctAnswer: "Shokët e Anit",
            givenAnswer: ["", "", "o", "k", "ë", "t", " ", "", " ", "A", "", "i", "t"]
        }
    },
    {
        id: 'WriteLesson_30',
        title: 'Z, z',
        color: Colors.YELLOW,
        data: {
            type: "Write",
            question: "",
            audios: ["zogu", "i", "lire"],
            answers: ["S", "u", "Z", "i", "p", "h", "j", "l"],
            correctAnswer: "Zogu i lirë",
            givenAnswer: ["", "o", "g", "", " ", "", " ", "", "i", "r", "ë"]
        }
    },
    {
        id: 'WriteLesson_31',
        title: 'V, v',
        color: Colors.PURPLE,
        data: {
            type: "Write",
            question: "",
            audios: ["ani", "vrapon"],
            answers: ["u", "v", "Z", "h", "p", "n", "T", "A"],
            correctAnswer: "Ani vrapon",
            givenAnswer: ["A", "", "i", " ", "", "r", "a", "", "o", "n"]
        }
    },
    {
        id: 'WriteLesson_32',
        title: 'Q, q',
        color: Colors.DARK_GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["qeni", "i", "mirit"],
            answers: ["t", "y", "Q", "i", "H", "n", "M", "A"],
            correctAnswer: "Qeni i Mirit",
            givenAnswer: ["", "e", "n", "", " ", "i", " ", "", "i", "r", "i", ""]
        }
    },
    {
        id: 'WriteLesson_33',
        title: 'Dh, dh',
        color: Colors.PINK,
        data: {
            type: "Write",
            question: "",
            audios: ["dhurata", "ime1"],
            answers: ["m", "y", "a", "i", "D", "n", "h", "E"],
            correctAnswer: "Dhurata ime",
            givenAnswer: ["", "", "u", "r", "a", "t", "", " ", "i", "", "e"]
        }
    },
    {
        id: 'WriteLesson_34',
        title: 'Nj, nj',
        color: Colors.GREEN_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["nj", "fletore"],
            answers: ["o", "y", "N", "i", "M", "j", "h", "f"],
            correctAnswer: "Një fletore",
            givenAnswer: ["", "", "ë", " ", "", "l", "e", "t", "", "r", "e"]
        }
    },
    {
        id: 'WriteLesson_35',
        title: 'Gj, gj',
        color: Colors.RED,
        data: {
            type: "Write",
            question: "",
            audios: ["gjeli", "e", "pula"],
            answers: ["p", "y", "g", "G", "j", "u", "a"],
            correctAnswer: "Gjeli e pula",
            givenAnswer: ["", "", "e", "l", "i", " ", "e", " ", "", "u", "l", ""]
        }
    },
    {
        id: 'WriteLesson_36',
        title: 'Th, th',
        color: Colors.YELLOW,
        data: {
            type: "Write",
            question: "",
            audios: ["gjethet", "n", "toke"],
            answers: ["ë", "t", "a", "d", "t", "u", "h"],
            correctAnswer: "Gjethet në tokë",
            givenAnswer: ["G", "j", "e", "", "", "e", "t", " ", "n", "", " ", "", "o", "k", "ë"]
        }
    },
    {
        id: 'WriteLesson_37',
        title: 'X, x',
        color: Colors.DARK_BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["ani", "ka", "guxim"],
            answers: ["n", "o", "k", "d", "g", "u", "x"],
            correctAnswer: "Ani ka guxim",
            givenAnswer: ["A", "", "i", " ", "", "a", " ", "", "u", "", "i", "m"]
        }
    },
    {
        id: 'WriteLesson_38',
        title: 'Xh, xh',
        color: Colors.BLUE,
        data: {
            type: "Write",
            question: "",
            audios: ["xhaxhai", "i", "mirit1"],
            answers: ["M", "X", "V", "j", "h", "h", "x"],
            correctAnswer: "Xhaxhai i Mirit",
            givenAnswer: ["", "", "a", "", "", "a", "i", " ", "i", " ", "", "i", "r", "i", "t"]
        }
    },
    {
        id: 'WriteLesson_39',
        title: 'Zh, zh',
        color: Colors.DARK_GREEN,
        data: {
            type: "Write",
            question: "",
            audios: ["vazhdo", "ani"],
            answers: ["o", "X", "z", "j", "h", "n", "i"],
            correctAnswer: "Vazhdo Ani",
            givenAnswer: ["V", "a", "", "", "d", "", " ", "A", "", ""]
        }
    }
];