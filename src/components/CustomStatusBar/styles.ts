import { StyleSheet } from "react-native";
import IphoneType from "../../config/IsIphoneX/IphoneType";

export const styles = StyleSheet.create({
    statusBar: {
        height: IphoneType.getStatusBarHeight(),
    }
});