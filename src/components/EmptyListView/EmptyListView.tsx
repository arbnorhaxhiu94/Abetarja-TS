import React, { FunctionComponent, useEffect } from "react";
import { View, ViewStyle } from "react-native";
import Styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import { useSelector } from "react-redux";
import { ReducerStateType } from "../../redux";
import { Colors } from "../../assets/Colors";

interface EmptyListViewProps {
    text: string
    style?: ViewStyle
    onRefreshPress?(): void
}

const EmptyListView: FunctionComponent<EmptyListViewProps> = ({
    text,
    style,
    onRefreshPress
}) => {

    const DLMode = useSelector((state: ReducerStateType) => state.darkLightModeReducer);
    const LANG = useSelector((state: ReducerStateType) => state.languageReducer);

    return (
        <View style={[
            Styles.screen, 
            {
                backgroundColor: DLMode.backgroundColor
            },
            style
        ]} >
            <MaterialCommunityIcons 
                name="delete-empty-outline" 
                size={50} 
                color={Colors.RED} />
            <View style={{ height: 20 }} />
            <CustomText 
                text={text}
                fontSize={16}
                color={Colors.RED}
                textAlign={"center"}
                style={{ width: "80%" }} />
            <View style={{ height: 20 }} />
            {onRefreshPress ? 
                <CustomButton 
                    buttonText={LANG.REFRESH}
                    textColor={Colors.WHITE}
                    style={Styles.refreshButton}
                    onPress={onRefreshPress} /> :null}
        </View>
    );
}

export default EmptyListView;