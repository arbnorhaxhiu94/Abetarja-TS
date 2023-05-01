import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { SCREEN } from "../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    header: {
        zIndex: 2,
        width: SCREEN.WIDTH,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    icon: {
        position: 'absolute',
        height: 60,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 18,
        width: SCREEN.WIDTH-100,
        alignSelf: "center",
        textAlign: "center",
        color: Colors.WHITE
    },
    headerImage: {
        width: 80,
        height: 50
    }
});