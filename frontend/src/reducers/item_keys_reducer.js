// import { merge } from 'lodash';
import { RECEIVE_ITEM_KEYS } from '../actions/item_key_actions';


const itemKeysReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM_KEYS:
            // debugger
            return action.res.searchItems;
        default:
            return oldState;
    }
};

export default itemKeysReducer;