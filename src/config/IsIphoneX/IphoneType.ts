import { ImageStyle, Platform, StatusBar, TextStyle, ViewStyle } from 'react-native';
import { getDeviceId } from 'react-native-device-info';
import { WINDOW } from '../Constants/ScreenDimensions';

type StyleType = ViewStyle | TextStyle | ImageStyle;

class IphoneType {
    static isIphoneXTo13(): boolean {
        return (
            Platform.OS === 'ios' &&
            !Platform.isPad &&
            !Platform.isTV &&
            ((WINDOW.HEIGHT === 780 || WINDOW.WIDTH === 780)
              || (WINDOW.HEIGHT === 812 || WINDOW.WIDTH === 812)
              || ((WINDOW.HEIGHT === 844 || WINDOW.WIDTH === 844) && !getDeviceId().includes("14"))
              || (WINDOW.HEIGHT === 896 || WINDOW.WIDTH === 896)
              || (WINDOW.HEIGHT === 926 || WINDOW.WIDTH === 926))
        );
    }

    static isIphone14(): boolean {
        return (
            Platform.OS === 'ios' &&
            !Platform.isPad &&
            !Platform.isTV &&
            ((WINDOW.HEIGHT === 852 || WINDOW.WIDTH === 852) // Iphone 14 Pro/Plus
              || ((WINDOW.HEIGHT === 844 || WINDOW.WIDTH === 844) && getDeviceId().includes("14")) // Iphone 14
              || (WINDOW.HEIGHT === 932 || WINDOW.WIDTH === 932)) //iphone 14 Pro Max
        );
    }
    
    static ifIphoneXTo13(iphoneXStyle: StyleType, regularStyle: StyleType) {
        if (this.isIphoneXTo13()) return iphoneXStyle;
        else return regularStyle;
    }

    static ifIphone14(iphoneXStyle: StyleType, regularStyle: StyleType) {
        if (this.isIphone14()) return iphoneXStyle;
        else return regularStyle;
    }

    static ifIphoneXto14(iphone14Style: StyleType, iphoneXto13Style: StyleType, regularStyle: StyleType) {
        if (this.isIphone14()) return iphone14Style;
        else if (this.isIphoneXTo13()) return iphoneXto13Style;
        else return regularStyle;
    }
    
    static getStatusBarHeight(): number {
        if (Platform.OS === "android") return StatusBar.currentHeight!;
        else if (Platform.OS === "ios") {
            if (this.isIphoneXTo13()) return 44;
            else if (this.isIphone14()) return 60;
            else return 30;
        }
        else return 0;
    }
    
    static getBottomSpace() {
        return this.isIphoneXTo13() || this.isIphone14() ? 34 : 0;
    }
    
}

export default IphoneType;