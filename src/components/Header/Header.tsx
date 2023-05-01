import React, { FunctionComponent } from "react";
import { Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../assets/Colors";
import { Images } from "../../assets/Images";
import CustomStatusBar from "../CustomStatusBar";
import CustomText from "../CustomText";
import { styles } from "./styles";

type HeaderIconType = {
    icon: any
    onPress(): void
}

interface Header2Props {
    title?: string | Images
    titleIcon?: JSX.Element
    rightIcon?: HeaderIconType
    leftIcon?: HeaderIconType
}

const Header: FunctionComponent<Header2Props> = ({
    title,
    titleIcon,
    rightIcon,
    leftIcon,
}) => {
    return (
        <>
        <CustomStatusBar />
        <LinearGradient 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[ Colors.RED, Colors.RED ]}
            style={styles.header} >
            {leftIcon ? 
            <TouchableOpacity 
                onPress={leftIcon.onPress}
                style={[styles.icon, {
                    left: 0
                }]} >
                {leftIcon.icon}
            </TouchableOpacity> : null}
            {typeof(title) === "string" ? 
                <CustomText 
                    text={title}
                    style={styles.headerTitle}
                    numberOfLines={1}
                    ellipsizeMode={"tail"} />
            : title ?
                <Image 
                    source={title}
                    style={styles.headerImage}
                    resizeMode={"contain"} />
            : titleIcon ?
                titleIcon 
            : null}
            {rightIcon ? 
            <TouchableOpacity 
                onPress={rightIcon.onPress}
                style={[styles.icon, {
                    right: 0
                }]} >
                {rightIcon.icon}
            </TouchableOpacity> : null}
        </LinearGradient>
        </>
    )
}

export default Header;