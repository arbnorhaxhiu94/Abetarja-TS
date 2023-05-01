import { StyleSheet } from "react-native";
import { WINDOW } from "../../config/Constants/ScreenDimensions";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    modalContainer: {
        borderRadius: 20,
        paddingBottom: 20,
        paddingTop: 1,
        width: WINDOW.WIDTH - 80,
        backgroundColor: Colors.WHITE
    },
    modalImage: {
        width: 100,
        height: 100
    },
    modalStayButton: {
        height: 100,
        width: WINDOW.WIDTH - 80 - 40,
        backgroundColor: Colors.BLUE,
        marginBottom: 20
    },
    modalExitButton: {
        height: 100,
        width: WINDOW.WIDTH - 80 - 40,
    },
    modalLottieIcon: {
        height: 100,
        width: 100
    }
});