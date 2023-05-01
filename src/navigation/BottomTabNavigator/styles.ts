import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { WINDOW } from "../../config/Constants/ScreenDimensions";
import IphoneType from "../../config/IsIphoneX/IphoneType";

export const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: Colors.BLACK,
        width: WINDOW.WIDTH - 80,
        height: 70,
        borderRadius: 35,
        ...IphoneType.ifIphoneXto14({ bottom: 30 }, { bottom: 30 }, { bottom: 20 }),
        position: "absolute",
        marginLeft: 40,
        paddingHorizontal: 20
    },
    tabBarItemStyle: {
        height: 70,
        paddingTop: 10
    },
    tabBarOrangeItemStyle: {
        height: 87,
        bottom: 43,
        borderRadius: 35,
        paddingTop: 10
    },
    tabBarIconStyle: {
        width: 65,
        height: 75,
        borderRadius: 45,
        backgroundColor: Colors.RED
    }
})