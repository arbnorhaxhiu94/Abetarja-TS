import { StyleSheet } from "react-native";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    letterContainer: {
        width: WINDOW.WIDTH - 100,
        height: WINDOW.WIDTH - 100,
        borderRadius: 25,
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    voiceIcon: {
        position: "absolute",
        top: 15,
        right: 15
    }
});