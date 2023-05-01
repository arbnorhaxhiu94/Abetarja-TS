import { ColorValue, StyleSheet } from "react-native";

export const styles = (bgColor: ColorValue) => {
    return StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20
        }
    });
}