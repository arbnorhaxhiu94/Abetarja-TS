import { StyleSheet } from "react-native";
import { Colors } from "../../../../assets/Colors";
import Fonts from "../../../../assets/Fonts";
import { WINDOW } from "../../../../config/Constants/ScreenDimensions";
import IphoneType from "../../../../config/IsIphoneX/IphoneType";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.WHITE
    },
    storyContainer: {
        flex: 1,
        width: WINDOW.WIDTH - 40,
        marginVertical: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: Colors.LIGHT_GREEN
    },
    text: {
        fontSize: 22,
        fontFamily: Fonts.MONTSERRAT_SEMIBOLD,
        marginRight: 5,
        lineHeight: 30
    },
    newLineView: {
        height: 1,
        width: WINDOW.WIDTH - 40
    },
    replayButton: {
        width: WINDOW.WIDTH - 40,
        marginBottom: 20
    },
    nextButton: {
        width: WINDOW.WIDTH - 40,
        marginBottom: 20 + IphoneType.getBottomSpace()
    }
});