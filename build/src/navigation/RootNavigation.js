import { Notifications } from 'expo';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MainTabNavigator } from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
const RootStackNavigator = StackNavigator({
    Main: {
        screen: MainTabNavigator
    }
});
export class RootNavigation extends React.Component {
    constructor() {
        super(...arguments);
        this._handleNotification = ({ origin, data }) => {
            console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
        };
    }
    componentDidMount() {
        this._notificationSubscription = this._registerForPushNotifications();
    }
    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(RootStackNavigator, null)));
    }
    _registerForPushNotifications() {
        // Send our push token over to our backend so we can receive notifications
        // You can comment the following line out if you want to stop receiving
        // a notification every time you open the app. Check out the source
        // for this function in api/registerForPushNotificationsAsync.js
        registerForPushNotificationsAsync();
        // Watch for incoming notifications
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    statusBarUnderlay: {}
});
//# sourceMappingURL=RootNavigation.js.map