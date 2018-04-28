import { MainTabNavigator } from '../../navigation/MainTabNavigator';
import { NavigationState, NavigationAction } from 'react-navigation';

export const navigationReducer = (state: NavigationState, action: NavigationAction) => {
    const nextState = MainTabNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
