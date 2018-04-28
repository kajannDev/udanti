import { LEARN_MORE } from '../actions/types';
import { initialState } from './initialState';
export const learnMoreReducer = (state = initialState, action) => {
    console.log('action.type', action.type);
    console.log('action.info', action.info);
    switch (action.type) {
        case LEARN_MORE:
            return Object.assign({}, state, { learnMore: action.info });
        default:
            return state;
    }
};
// export default learnMoreReducer;
//# sourceMappingURL=learnReducer.js.map