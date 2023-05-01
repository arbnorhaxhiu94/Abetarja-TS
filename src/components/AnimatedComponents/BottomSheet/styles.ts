import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/Colors";
import { SCREEN } from "../../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: Colors.TRANSPARENT_SHADOW_5
    },
    bottomSheet: {
        maxHeight: SCREEN.HEIGHT-50,
        height: undefined,
        width: '100%'
    },
    headerDragLine: {
        height: 2,
        width: 40,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: Colors.GRAY
    }
})