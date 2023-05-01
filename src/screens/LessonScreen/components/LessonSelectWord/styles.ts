import { StyleSheet } from "react-native";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    answersContainer: {
        flex: 4,
        width: WINDOW.WIDTH,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: WINDOW.WIDTH - 60,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15
    },
    buttonText: {
        fontSize: 24
    }
});