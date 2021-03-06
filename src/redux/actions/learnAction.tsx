import { Action } from 'redux';
import {
    LEARN_MORE
} from './types';

export interface LearnMoreAction extends Action {
    info: string
}

export function getLearnMoreInternal(): LearnMoreAction {
    return { type: LEARN_MORE, info: 'Action Change' }
}

export const getLearnMore = () => dispatch => {
    console.log('getLearnMore');
    dispatch(getLearnMoreInternal());
};

// type LearnMore = { type: typeof LEARN_MORE, payload: string }

// // let intervalId = null;

// const learnMoreInternal = (): LearnMore => {
//     return {
//         type: LEARN_MORE,
//         payload: 'Reducer change'
//     }
// };

// export const learnMore = () => dispatch => {
//     console.log('LearnMore');
//     clearInterval(intervalId);
//     intervalId = setInterval(() => dispatch(learnMoreInternal()), 100);
//     dispatch(learnMoreInternal());
// };

// export type Actions = typeof learnMoreInternal;
