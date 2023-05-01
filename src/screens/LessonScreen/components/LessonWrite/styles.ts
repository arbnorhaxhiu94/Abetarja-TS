import { StyleSheet } from "react-native";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    answersContainer: {
        flex: 4,
        width: WINDOW.WIDTH
    },
    answersSubContainer: {
        flex: 1,
        width: WINDOW.WIDTH,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        paddingHorizontal: 20
    },
    button: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 5
    },
    buttonText: {
        fontSize: 20
    }
});