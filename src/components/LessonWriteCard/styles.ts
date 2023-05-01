import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    container: {
        width: (WINDOW.WIDTH/2) - 40,
        height: (WINDOW.WIDTH/2) - 40,
        marginVertical: 20,
        marginHorizontal: 20,
        alignSelf: "center",
        borderRadius: 25,
        backgroundColor: Colors.WHITE,
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 5
    },
    linearGradient: {
        width: (WINDOW.WIDTH/2) - 40,
        height: (WINDOW.WIDTH/2) - 40,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    titleContainer: {
        width: (WINDOW.WIDTH / 2) - 44,
        backgroundColor: Colors.WHITE,
        height: (WINDOW.WIDTH/2) - 44,
        borderRadius: 24,
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
        color: Colors.WHITE,
        textAlign: "center"
    },
    pencilIcon: {
        position: "absolute",
        bottom: 10,
        left: 10
    },
    ribbon: {
        position: "absolute",
        top: 2,
        right: 2,
        width: 40,
        height: 40
    },
    imageBackground: {
        zIndex: 2,
        position: "absolute",
        width: (WINDOW.WIDTH/2) - 40,
        height: 150,
        opacity: 0.06
    }
});