import { merge } from 'lodash';
import { RECEIVE_ITEMS } from '../actions/item_actions';


const itemsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEMS:
            return merge({}, oldState, action.res);
        default:
            return oldState;
    }
};

export default itemsReducer;