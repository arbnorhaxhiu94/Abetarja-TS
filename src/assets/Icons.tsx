import { Colors } from "./Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Image, ViewStyle } from "react-native";
import { Images } from "./Images";

type IconProps = {
    size?: number
    color?: Colors | string
    style?: ViewStyle
}

export type IconDirectoriesType = "FontAwesome" | "Ionicons" | "MaterialIcons" | "MaterialCommunityIcons" | "Entypo";

class Icons {
    static Home = (props?: IconProps) => <FontAwesome name="home" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Write = (props?: IconProps) => <MaterialCommunityIcons name="lead-pencil" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Close = (props?: IconProps) => <FontAwesome name="close" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Voice = (props?: IconProps) => <MaterialIcons name="keyboard-voice" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static ArrowRight = (props?: IconProps) => <FontAwesome name="arrow-right" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Check = (props?: IconProps) => <FontAwesome name="check" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Happy = (props?: IconProps) => <MaterialCommunityIcons name="emoticon-excited-outline" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Sad = (props?: IconProps) => <MaterialCommunityIcons name="emoticon-sad-outline" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Leave = (props?: IconProps) => <MaterialCommunityIcons name="run-fast" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Study = (props?: IconProps) => <MaterialCommunityIcons name="book-open-page-variant-outline" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Play = (props?: IconProps) => <FontAwesome name="play" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Stop = (props?: IconProps) => <FontAwesome name="stop" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static PencilOutline = (props?: IconProps) => <MaterialCommunityIcons name="pencil-outline" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static PencilFill = (props?: IconProps) => <MaterialCommunityIcons name="pencil" size={props?.size || 24} color={props?.color} style={props?.style} />;
    static Book = (props?: IconProps) => <Ionicons name="book-sharp" size={props?.size || 24} color={props?.color} style={props?.style} />;

    static VoiceOutline = (props?: IconProps) => <Image source={Images.VOICE_THIN} style={{ width: props?.size || 40, height: props?.size || 40 }} />
    static VoiceFill = (props?: IconProps) => <Image source={Images.VOICE_FILL} style={{ width: props?.size || 40, height: props?.size || 40 }} />
    
    static Other = (directory: IconDirectoriesType, name: string, color?: Colors, size?: number, style?: ViewStyle) => this.getIcon(directory, name, color, size, style);

    static getIcon = (
        directory: IconDirectoriesType, 
        name: string,
        color: Colors = Colors.BLACK,
        size: number = 24,
        style?: ViewStyle
    ) => {
        if (directory === "FontAwesome") return <FontAwesome name={name} color={color} size={size} style={style} />
        if (directory === "Ionicons") return <Ionicons name={name} color={color} size={size} style={style} />
        if (directory === "MaterialIcons") return <MaterialIcons name={name} color={color} size={size} style={style} />
        if (directory === "MaterialCommunityIcons") return <MaterialCommunityIcons name={name} color={color} size={size} style={style} />
        if (directory === "Entypo") return <Entypo name={name} color={color} size={size} style={style} />
        else return null;
    }
}

export default Icons;