import React, { FunctionComponent, useEffect } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import Styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, ReducerStateType } from "../../redux";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Colors } from "../../assets/Colors";
import { BottomNavigationNavigationType } from "../../navigation/Types/NavigationTypes";

interface ErrorViewProps {
    error: string
    onRefreshPress?(): void
    textStyle?: TextStyle
    iconStyle?: ViewStyle
    spacingBetweenIconAndText?: number
}

const ErrorView: FunctionComponent<ErrorViewProps> = ({
    error,
    onRefreshPress,
    textStyle,
    iconStyle,
    spacingBetweenIconAndText
}) => {

    const rootNavigation = useNavigation<BottomNavigationNavigationType>();

    const dispatch = useDispatch();
    const { 
        signOut,
    } = bindActionCreators(actionCreators, dispatch);

    const DLMode = useSelector((state: ReducerStateType) => state.darkLightModeReducer);
    const LANG = useSelector((state: ReducerStateType) => state.languageReducer);
    const user = useSelector((state: ReducerStateType) => state.userReducer);

    const tryToSignOut = async() => {
        signOut();
    }

    useEffect(() => {
        if (error === "Unauthorized") {
            tryToSignOut();
        }
    }, []);

    useEffect(() => {
        if (!user.user?.token) {
            const resetAction = CommonActions.reset({
                index: 1,
                routes: [ 
                    { name: "LandingScreen" }
                ]
            });
            rootNavigation.dispatch(resetAction);
        }
    }, [user]);

    return (
        <View style={[Styles.screen, {
            backgroundColor: DLMode.backgroundColor
        }]} >
            <AntDesign 
                name="exclamationcircleo" 
                size={40} 
                color={Colors.RED}
                style={iconStyle} />
            <View style={{ height: spacingBetweenIconAndText || 20 }} />
            <CustomText 
                text={error}
                fontSize={textStyle?.fontSize || 16}
                color={Colors.RED}
                textAlign={"center"}
                style={{ width: "80%", ...textStyle }} />
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

export default ErrorView;