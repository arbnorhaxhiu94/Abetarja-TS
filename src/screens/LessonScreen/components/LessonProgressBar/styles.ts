import { StyleSheet } from "react-native";
import { Colors } from "../../../../assets/Colors";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    container: {
        width: WINDOW.WIDTH,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GRAY
    },
    closeButton: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    progressBarContainer: {
        width: WINDOW.WIDTH - 20 - 80,
        height: 36,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 18,
        justifyContent: "center",
        marginRight: 20
    },
    progressBar: {
        height: 34,
        borderRadius: 20
    }
});