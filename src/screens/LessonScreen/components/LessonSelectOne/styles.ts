import { StyleSheet } from "react-native";
import { Colors } from "../../../../assets/Colors";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    answersContainer: {
        flex: 4,
        width: WINDOW.WIDTH,
        justifyContent: "center"
    },
    answersSubContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 20
    },
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
        fontSize: 80
    },
    voiceButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        elevation: 3,
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.3
    }
});