import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    letterContainer: {
        width: (WINDOW.WIDTH - 60) / 2 - 10,
        height: (WINDOW.WIDTH - 60) / 2 - 10,
        borderRadius: 25,
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.WHITE,
        elevation: 3,
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.3
    },
    letter: {
        fontSize: 60
    },
    checkIconLarge: {
        position: "absolute",
        right: 2,
        top: 2,
        width: 40,
        height: 40
    },
    checkIconSmall: {
        position: "absolute",
        right: 3,
        top: 3,
        width: 30,
        height: 30
    },
    checkIconRight: {
        position: "absolute",
        right: 3,
        top: 2,
        width: 30,
        height: 30
    }
});