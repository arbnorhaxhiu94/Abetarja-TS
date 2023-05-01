import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        width: WINDOW.WIDTH - 40,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 25
    },
    textInputIcon: {
        width: 40
    },
    textInput: {
        height: 50
    }
});