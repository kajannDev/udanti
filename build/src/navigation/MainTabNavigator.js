import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/LinksScreen';
import PhotoScreen from '../screens/SettingsScreen';
import LikesScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/SettingsScreen';
export const MainTabNavigator = TabNavigator({
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Photo: { screen: PhotoScreen },
    Likes: { screen: LikesScreen },
    Profile: { screen: ProfileScreen }
}, {
    navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch (routeName) {
                case 'Home':
                    iconName =
                        Platform.OS === 'ios'
                            ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
                    break;
                case 'Search':
                    iconName = Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
                    break;
                case 'Photo':
                    iconName =
                        Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'md-add-circle';
                    break;
                case 'Likes':
                    iconName =
                        Platform.OS === 'ios' ? `ios-heart${focused ? '' : '-outline'}` : 'md-heart';
                    break;
                case 'Profile':
                    iconName =
                        Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
                    break;
            }
            return (React.createElement(Ionicons, { name: iconName, size: 28, style: { marginBottom: -3 }, color: focused ? Colors.tabIconSelected : Colors.tabIconDefault }));
        },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
});
//# sourceMappingURL=MainTabNavigator.js.map