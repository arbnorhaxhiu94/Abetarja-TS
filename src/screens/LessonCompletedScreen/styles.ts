import { StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { WINDOW } from "../../config/Constants/ScreenDimensions";
import IphoneType from "../../config/IsIphoneX/IphoneType";

export const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: IphoneType.getBottomSpace() + 20
    },
    congratsText: {
        fontSize: 40,
        fontFamily: Fonts.MONTSERRAT_SEMIBOLD,
        marginTop: IphoneType.getStatusBarHeight(),
        alignSelf: "center"
    },
    button: {
        width: WINDOW.WIDTH - 40
    }
});