import { merge } from 'lodash';
import { RECEIVE_STATIC_DROPS } from '../actions/static_drop_actions';


const staticDropsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STATIC_DROPS:
            return merge({}, oldState, action.res);
        default:
            return oldState;
    }
};

export default staticDropsReducer;