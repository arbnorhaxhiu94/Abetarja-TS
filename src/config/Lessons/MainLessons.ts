import { Colors } from "../../assets/Colors";
import { Lesson } from "../../models/Lesson";
import { LessonAIQuestions } from "./LessonAIQuestions";
import { LessonANQuestions } from "./LessonANQuestions";
import { LessonBQuestions } from "./LessonBQuestions";
import { LessonCQuestions } from "./LessonCQuestions";
import { LessonDHQuestions } from "./LessonDHQuestions";
import { LessonDQuestions } from "./LessonDQuestions";
import { LessonEQuestions } from "./LessonEQuestions";
import { LessonFQuestions } from "./LessonFQuestions";
import { LessonGJQuestions } from "./LessonGJQuestions";
import { LessonGQuestions } from "./LessonGQuestions";
import { LessonHQuestions } from "./LessonHQuestions";
import { LessonIEQuestions } from "./LessonIEQuestions";
import { LessonJQuestions } from "./LessonJQuestions";
import { LessonKQuestions } from "./LessonKQuestions";
import { LessonLLQuestions } from "./LessonLLQuestions";
import { LessonLQuestions } from "./LessonLQuestions";
import { LessonMQuestions } from "./LessonMQuestions";
import { LessonNJQuestions } from "./LessonNJQuestions";
import { LessonNQuestions } from "./LessonNQuestions";
import { LessonOQuestions } from "./LessonOQuestions";
import { LessonPQuestions } from "./LessonPQuestions";
import { LessonQQuestions } from "./LessonQQuestions";
import { LessonRMQuestions } from "./LessonRMQuestions";
import { LessonRQuestions } from "./LessonRQuestions";
import { LessonRRQuestions } from "./LessonRRQuestions";
import { LessonSHQuestions } from "./LessonSHQuestions";
import { LessonSQuestions } from "./LessonSQuestions";
import { LessonTHQuestions } from "./LessonTHQuestions";
import { LessonTQuestions } from "./LessonTQuestions";
import { LessonUQuestions } from "./LessonUQuestions";
import { LessonVQuestions } from "./LessonVQuestions";
import { LessonXHQuestions } from "./LessonXHQuestions";
import { LessonXQuestions } from "./LessonXQuestions";
import { LessonYQuestions } from "./LessonYQuestions";
import { LessonZHQuestions } from "./LessonZHQuestions";
import { LessonZQuestions } from "./LessonZQuestions";
import { LessonÇQuestions } from "./LessonÇQuesttions";
import { LessonËQuestions } from "./LessonËQuestions";
import { LessonËUQuestions } from "./LessonËUQuestions";

export const MainLessons: Lesson[] = [
    {   
        id:'Lesson_1', 
        title: 'A, I', 
        row1: 'A, I', row2: 'AI, AI, AI', row3: 'IA, IA, IA', 
        color: Colors.BLUE,
        completed: false,
        questions: LessonAIQuestions
    },
    {
        id:'Lesson_2', 
        title: 'N', 
        row1: 'N', row2: 'NA, ANA', row3: 'NANA, ANI', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonNQuestions
    },
    {
        id:'Lesson_3', 
        title: 'E', 
        row1: 'E', row2: 'NE, ENA, ENI', row3: 'ANA E ANI', 
        color: Colors.PINK,
        completed: false,
        questions: LessonEQuestions
    },
    {
        id:'Lesson_4', 
        title: 'Ë', 
        row1: 'Ë', row2: 'NË, NËNA, NËNË', row3: 'NËNA E ANA', 
        color: Colors.PURPLE,
        completed: false,
        questions: LessonËQuestions
    },
    {
        id:'Lesson_5', 
        title: 'U', 
        row1: 'U', row2: 'UNË, UNË E ANA', row3: 'UNË E NËNA', 
        color: Colors.RED,
        completed: false,
        questions: LessonUQuestions
    },
    {
        id:'Lesson_6', 
        title: 'R', 
        row1: 'R', row2: 'URA, URA E RE', row3: 'RINA, NË URË', 
        color: Colors.YELLOW,
        completed: false,
        questions: LessonRQuestions
    },
    {
        id:'Lesson_7', 
        title: 'M', 
        row1: 'M', row2: 'MIRI, MIRA', row3: 'MURI I RI', 
        color: Colors.DARK_BLUE,
        completed: false,
        questions: LessonMQuestions
    },
    {
        id:'Lesson_8', 
        title: 'A, a, N, n', 
        row1: 'A, a, N, n', row2: 'A, Ana', row3: 'Na, Ana', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonANQuestions
    },
    {
        id:'Lesson_9', 
        title: 'I, i, E, e', 
        row1: 'I, i, E, e', row2: 'Ena, Eni', row3: 'Ne e Eni', 
        color: Colors.PINK,
        completed: false,
        questions: LessonIEQuestions
    },
    {
        id:'Lesson_10', 
        title: 'Ë, ë, U, u', 
        row1: 'Ë, ë, U, u', row2: 'Unë, Nëna', row3: 'Unë, Ani e Nëna', 
        color: Colors.GREEN_BLUE,
        completed: false,
        questions: LessonËUQuestions
    },
    {
        id:'Lesson_11', 
        title: 'R, r, M, m', 
        row1: 'R, r, M, m', row2: 'Miri, Mira', row3: 'Rina, Muri i ri', 
        color: Colors.RED,
        completed: false,
        questions: LessonRMQuestions
    },
    {
        id:'Lesson_12', 
        title: 'O, o', 
        row1: 'O, o', row2: 'Ora, Nora', row3: 'Ora ime, \nUnë mora orën', 
        color: Colors.YELLOW,
        completed: false,
        questions: LessonOQuestions
    },
    {
        id:'Lesson_13', 
        title: 'T, t', 
        row1: 'T, t', row2: 'Treni, Teuta', row3: 'Treni i ri, Motra ime', 
        color: Colors.DARK_GREEN,
        completed: false,
        questions: LessonTQuestions
    },
    {
        id:'Lesson_14', 
        title: 'L, l', 
        row1: 'L, l', row2: 'Lumi, Lulet', row3: 'Lulet e mia, Luani', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonLQuestions
    },
    {
        id:'Lesson_15', 
        title: 'K, k', 
        row1: 'K, k', row2: 'Kali, Kamioni', row3: 'Kali im në mal', 
        color: Colors.PINK,
        completed: false,
        questions: LessonKQuestions
    },
    {
        id:'Lesson_16', 
        title: 'H, h', 
        row1: 'H, h', row2: 'Hëna, Koha', row3: 'Hëna lart, Koha e lirë', 
        color: Colors.GREEN_BLUE,
        completed: false,
        questions: LessonHQuestions
    },
    {
        id:'Lesson_17', 
        title: 'P, p', 
        row1: 'P, p', row2: 'Pulat, Pema', row3: 'Pulat e mia, Pema e re', 
        color: Colors.RED,
        completed: false,
        questions: LessonPQuestions
    },
    {
        id:'Lesson_18', 
        title: 'J, j', 
        row1: 'J, j', row2: 'Jeta, Loja', row3: 'Ne luajmë me top', 
        color: Colors.YELLOW,
        completed: false,
        questions: LessonJQuestions
    },
    {
        id:'Lesson_19', 
        title: 'D, d', 
        row1: 'D, d', row2: 'Drita, Mirëdita', row3: 'Dita e Diel', 
        color: Colors.DARK_GREEN,
        completed: false,
        questions: LessonDQuestions
    },
    {
        id:'Lesson_20', 
        title: 'B, b', 
        row1: 'B, b', row2: 'Bleta, Bukur', row3: 'Balonat e bukura', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonBQuestions
    },
    {
        id:'Lesson_21', 
        title: 'F, f', 
        row1: 'F, f', row2: 'Fluturat, Fletore', row3: 'Fëmijët luajnë me top', 
        color: Colors.PINK,
        completed: false,
        questions: LessonFQuestions
    },
    {
        id:'Lesson_22', 
        title: 'C, c', 
        row1: 'C, c', row2: 'Cicërima', row3: 'Harabeli cicëron', 
        color: Colors.GREEN_BLUE,
        completed: false,
        questions: LessonCQuestions
    },
    {
        id:'Lesson_23', 
        title: 'S, s', 
        row1: 'S, s', row2: 'Mësimi, Sa mirë', row3: 'Unë kujdesem për lulet', 
        color: Colors.RED,
        completed: false,
        questions: LessonSQuestions
    },
    {
        id:'Lesson_24', 
        title: 'Ç, ç', 
        row1: 'Ç, ç', row2: 'Çekiçi, Çaji', row3: 'Unë pi çaj, Çaji i ftohtë', 
        color: Colors.YELLOW,
        completed: false,
        questions: LessonÇQuestions
    },
    {
        id:'Lesson_25', 
        title: 'Ll, ll', 
        row1: 'Ll, ll', row2: 'Halla, Llamba', row3: 'Unë ha akullore', 
        color: Colors.DARK_GREEN,
        completed: false,
        questions: LessonLLQuestions
    },
    {
        id:'Lesson_26', 
        title: 'Y, y', 
        row1: 'Y, y', row2: 'Pylli, Ylberi', row3: 'Hëna e yjet lartë', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonYQuestions
    },
    {
        id:'Lesson_27', 
        title: 'G, g', 
        row1: 'G, g', row2: 'Gabimi, Goma', row3: 'Lapsi e goma', 
        color: Colors.PINK,
        completed: false,
        questions: LessonGQuestions
    },
    {
        id:'Lesson_28', 
        title: 'Rr, rr', 
        row1: 'Rr, rr', row2: 'Rrota, Rruga', row3: 'Rruga jonë plot baltë', 
        color: Colors.GREEN_BLUE,
        completed: false,
        questions: LessonRRQuestions
    },
    {
        id:'Lesson_29', 
        title: 'Sh, sh', 
        row1: 'Sh, sh', row2: 'Shokët, Shiu', row3: 'Shokët e bankës', 
        color: Colors.RED,
        completed: false,
        questions: LessonSHQuestions
    },
    {
        id:'Lesson_30', 
        title: 'Z, z', 
        row1: 'Z, z', row2: 'Zogu, Tezja', row3: 'Zana shkoi te tezja', 
        color: Colors.YELLOW,
        completed: false,
        questions: LessonZQuestions
    },
    {
        id:'Lesson_31', 
        title: 'V, v', 
        row1: 'V, v', row2: 'Vera, Vëllai', row3: 'Stina e verës', 
        color: Colors.DARK_GREEN,
        completed: false,
        questions: LessonVQuestions
    },
    {
        id:'Lesson_32', 
        title: 'Q, q', 
        row1: 'Q, q', row2: 'Qeni, Shoqet', row3: 'Qeni im i vogël', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonQQuestions
    },
    {
        id:'Lesson_33', 
        title: 'Dh, dh', 
        row1: 'Dh, dh', row2: 'Dhurata, Dhëmbi', row3: 'Dhurata e Vitit të Ri', 
        color: Colors.PINK,
        completed: false,
        questions: LessonDHQuestions
    },
    {
        id:'Lesson_34', 
        title: 'Nj, nj', 
        row1: 'Nj, nj', row2: 'Një, Njomza', row3: 'Një ditë e bukur', 
        color: Colors.GREEN_BLUE,
        completed: false,
        questions: LessonNJQuestions
    },
    {
        id:'Lesson_35', 
        title: 'Gj, gj', 
        row1: 'Gj, gj', row2: 'Gjeli, Ngjyra', row3: 'Gjeli e pulat', 
        color: Colors.RED,
        completed: false,
        questions: LessonGJQuestions
    },
    {
        id:'Lesson_36', 
        title: 'Th, th', 
        row1: 'Th, th', row2: 'Gjethet, Thirrja', row3: 'Nëna na thërret', 
        color: Colors.YELLOW,
        completed: false,
        questions: LessonTHQuestions
    },
    {
        id:'Lesson_37', 
        title: 'X, x', 
        row1: 'X, x', row2: 'Guximi, Nxitimi', row3: 'Ne jemi guximtarë', 
        color: Colors.DARK_GREEN,
        completed: false,
        questions: LessonXQuestions
    },
    {
        id:'Lesson_38', 
        title: 'Xh, xh', 
        row1: 'Xh, xh', row2: 'Xhami, Xhaxhai', row3: 'Dritaret me xhama', 
        color: Colors.GREEN,
        completed: false,
        questions: LessonXHQuestions
    },
    {
        id:'Lesson_39', 
        title: 'Zh, zh', 
        row1: 'Zh, zh', row2: 'Zhurma, Vazhdo', row3: 'Zhurma pengon mësuesen', 
        color: Colors.PINK,
        completed: false,
        questions: LessonZHQuestions
    }
]