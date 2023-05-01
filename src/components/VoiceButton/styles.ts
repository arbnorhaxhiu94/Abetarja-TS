import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
    voiceButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        elevation: 3,
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 3,
        shadowOpacity: 0.3
    }
})