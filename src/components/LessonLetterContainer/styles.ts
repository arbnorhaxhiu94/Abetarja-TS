import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import Fonts from "../../assets/Fonts";

export const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 2
    },
    letter: {
        fontSize: 24,
        fontFamily: Fonts.MONTSERRAT_SEMIBOLD
    }
});