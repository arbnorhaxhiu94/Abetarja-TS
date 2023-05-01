import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
    shadow: {
        width: "100%",
        height: 50,
        borderRadius: 20
    },
    innerContainer: {
        flex: 1,
        borderRadius: 20,
        bottom: 5
    },
    linearGradientContainer: {
        flex: 1,
        padding: 12,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    }
});