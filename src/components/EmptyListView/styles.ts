import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { SCREEN } from "../../config/Constants/ScreenDimensions";

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center"
    },
    refreshButton: {
        width: SCREEN.WIDTH/2,
        padding: 5
    }
});