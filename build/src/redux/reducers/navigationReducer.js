import { MainTabNavigator } from '../../navigation/MainTabNavigator';
export const navigationReducer = (state, action) => {
    const nextState = MainTabNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
//# sourceMappingURL=navigationReducer.js.map