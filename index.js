/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { name as appName } from './app.json';
import App from './src/App';
import { persistor, store } from './src/store/store';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('backgroundHandler:', JSON.stringify(remoteMessage))
    if (remoteMessage) {
        // handleNotifications(remoteMessage);
    }
});

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxApp);
