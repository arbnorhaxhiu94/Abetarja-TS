import React from "react";
import Lottie from "lottie-react-native";
import { LegacyRef } from "react";
import { ViewStyle } from "react-native";

class Lotties {
    static ConffetiCircle = (ref?: LegacyRef<Lottie>) => <Lottie ref={ref} autoPlay source={require("./lotties/ConffetiCircle.json")} />
    static PeachesBalloon = (ref?: LegacyRef<Lottie>) => <Lottie ref={ref} autoPlay source={require("./lotties/PeachesBalloon.json")} />
    static ConfettiExplode = (ref?: LegacyRef<Lottie>) => <Lottie ref={ref} autoPlay source={require("./lotties/ConfettiExplode.json")} />
    static CongratsCheck = (ref?: LegacyRef<Lottie>, style?: ViewStyle) => <Lottie ref={ref} autoPlay style={style} source={require("./lotties/CongratsCheck.json")} />
    static ConfettiStars = (ref?: LegacyRef<Lottie>) => <Lottie ref={ref} autoPlay source={require("./lotties/ConfettiStars.json")} />
    static GiraffeCycling = (ref?: LegacyRef<Lottie>) => <Lottie ref={ref} autoPlay source={require("./lotties/GiraffeCycling.json")} />
    static Check = (ref?: LegacyRef<Lottie>, style?: ViewStyle) => <Lottie ref={ref} autoPlay loop={false} style={style} source={require("./lotties/Check.json")} />
    static Ribbon = (ref?: LegacyRef<Lottie>, style?: ViewStyle) => <Lottie ref={ref} autoPlay loop={false} style={style} source={require("./lotties/Ribbon.json")} />
    static Reading = (ref?: LegacyRef<Lottie>, style?: ViewStyle) => <Lottie ref={ref} autoPlay loop={true} style={style} source={require("./lotties/Reading.json")} />
    static Sleeping = (ref?: LegacyRef<Lottie>, style?: ViewStyle) => <Lottie ref={ref} autoPlay loop={true} style={style} source={require("./lotties/Sleeping.json")} />
}

export default Lotties;