import { RECEIVE_ITEM_LISTINGS, RECEIVE_ITEM_KEYS } from '../actions/item_key_actions';
// import {merge} from lodash;

const itemListingsReducer = (state = [], action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM_LISTINGS:
            return oldState.concat(action.res.result);
        case RECEIVE_ITEM_KEYS:
            return [];
        default:
            return oldState;
    }
};

export default itemListingsReducer;