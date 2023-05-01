import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    container: {
        width: WINDOW.WIDTH - 40,
        height: 150,
        marginVertical: 20,
        alignSelf: "center",
        borderRadius: 25,
        backgroundColor: Colors.WHITE,
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 5
    },
    linearGradient: {
        width: WINDOW.WIDTH - 40,
        height: 150,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        padding: 2
    },
    titleContainer: {
        width: (WINDOW.WIDTH - 40 - 20) / 2,
        backgroundColor: Colors.WHITE,
        height: "100%",
        borderRadius: 25,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 3
    },
    titleText: {
        fontSize: 60,
        color: Colors.WHITE
    },
    contentContainer: {
        width: "50%",
        height: "100%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    contentText: {
        fontSize: 20,
        color: Colors.WHITE,
        textAlign: "center"
    },
    ribbon: {
        position: "absolute",
        top: 2,
        right: 2,
        width: 40,
        height: 40
    }
});