import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";
import { SCREEN } from "../../config/Constants/ScreenDimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 200,
        alignSelf: 'center'
    },
    loaderContainer: {
        position: 'absolute',
        bottom: 50,
        width: SCREEN.WIDTH*3/4,
        height: 30,
        borderWidth: 3,
        borderColor: Colors.RED,
        borderRadius: 15,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    loader: {
        width: 30,
        height: 30,
        backgroundColor: Colors.RED
    }
});