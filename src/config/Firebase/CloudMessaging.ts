import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';

class FirebaseCloudMessaging {
    private static requestUserPermission = async (): Promise<boolean> => {
        if (Platform.OS === "ios") {
            const authStatus = await messaging().requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            return enabled;
        } else {
            if (parseInt(Platform.Version.toString()) >= 32) {
                const authStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION);
                if (authStatus === "granted") return true;
                else return false;
            }
            return true;
        }
    }

    static listen = async () => {
        if (!await this.requestUserPermission()) return;
        this.notificationListener();
        this.getToken();
    }

    private static getToken = () => {
        messaging()
            .getToken()
            .then(token => {
                console.log('device token: ' + token);
            })
            .catch(e => console.log('Messaging error: ' + e));

        return messaging().onTokenRefresh(token => {
            console.log('device token: ' + token)
        })

    }

    private static notificationListener = () => {
        messaging().onMessage(remoteMessage => {
            console.log('When Open:', JSON.stringify(remoteMessage))
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('When Open App:', JSON.stringify(remoteMessage))
        });

        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                console.log('From quite state:', JSON.stringify(remoteMessage))
            });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('backgroundHandler:', JSON.stringify(remoteMessage))
        });
    }

}

export default FirebaseCloudMessaging;