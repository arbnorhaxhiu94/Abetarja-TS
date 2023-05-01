import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../assets/Colors";
import { styles } from "./styles";

const BottomWhiteShadow = () => (
    <LinearGradient 
        colors={[ Colors.TRANSPARENT_LIGHT_0, Colors.WHITE, Colors.WHITE ]}
        style={styles.background} />
)

export default BottomWhiteShadow;