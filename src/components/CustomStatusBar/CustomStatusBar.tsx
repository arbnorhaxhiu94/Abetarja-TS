import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../assets/Colors';
import { styles } from './styles';

interface CustomStatusBarProps {
    backgroundColor?: [Colors, Colors]
    barStyle?: "light-content" | "dark-content"
}

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
    backgroundColor,
    barStyle = "light-content"
}) => {
    return (
        <LinearGradient 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={backgroundColor ? [backgroundColor[0], backgroundColor[1]] : [ Colors.RED, Colors.RED ]}
            style={styles.statusBar} >
            <StatusBar 
                translucent 
                backgroundColor={Colors.TRANSPARENT}
                barStyle={barStyle} />
        </LinearGradient>
    );
}
export default CustomStatusBar;