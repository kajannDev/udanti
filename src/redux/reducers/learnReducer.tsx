import { Reducer } from 'redux';
import { LEARN_MORE } from '../actions/types';
import { LearnMoreAction } from '../actions/learnAction';
import {initialState, ApplicationState} from './initialState';

export const learnMoreReducer: Reducer<ApplicationState> = (
    state: ApplicationState = initialState, 
    action: LearnMoreAction
) => {
    console.log('action.type', action.type);
    console.log('action.info', action.info);
    switch (action.type) {
        case LEARN_MORE:
            return { ...state, learnMore: action.info};
        default:
            return state;
    }
}

// export default learnMoreReducer;
