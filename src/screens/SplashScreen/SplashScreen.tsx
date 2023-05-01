import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, View } from "react-native";
import { Images } from "../../assets/Images";
import AnimatedView from "../../components/AnimatedComponents/AnimatedView";
import { SCREEN } from "../../config/Constants/ScreenDimensions";
import { SplashScreenNavigationType } from "../../navigation/Types/NavigationTypes";
import { useAppSelector } from "../../store/store";
import { styles } from "./styles";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { Colors } from "../../assets/Colors";

const CustomSplashScreen = () => {

    const navigation = useNavigation<SplashScreenNavigationType>();

    const { backgroundColor } = useAppSelector((state) => state.DLMode);
    const user = useAppSelector((state) => state.User);

    const translateYAnimation = useRef(new Animated.Value(1)).current;
    const translateXAnimation = useRef(new Animated.Value(0)).current

    const loading = () => {
        Animated.timing(translateXAnimation, {
            toValue: SCREEN.WIDTH/19,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic)
        }).start();
    }

    useEffect(() => {
        setTimeout(() => { loading(); }, 300);
        setTimeout(() => { navigation.replace("BottomTabNavigator"); }, 3000);
      }, []);

      useEffect(() => {
        changeNavigationBarColor(
            backgroundColor, 
            backgroundColor === Colors.DARK_MODE_BG_COLOR ? false : true, 
            true
        );
    }, [backgroundColor]);

    return (
        <View style={[styles.screen, { backgroundColor }]}>
            <AnimatedView 
                dimensions={{ width: 300, height: 200 }}
                animations={{ scale: { value: 0.9 } }}
                repeatType={'repeat-many'} >
                <Image 
                    source={Images.LOGO}
                    style={styles.logo} />
            </AnimatedView>
            <View style={styles.loaderContainer}>
                <Animated.View 
                    style={[
                        styles.loader, 
                        { transform: [ { scaleX: translateXAnimation } ]}
                    ]} />
            </View>
        </View>
    )
}

export default CustomSplashScreen;