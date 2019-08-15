// import { UPDATE_OFFSET_BY_ONE } from '../actions/offset_actions';
import { RECEIVE_ITEM_KEYS } from '../actions/item_key_actions';


const uiOffsetReducer = (state = 1, action) => {
    // const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM_KEYS:
            return 0;
        default:
            return 1;
    }
};

export default uiOffsetReducer;