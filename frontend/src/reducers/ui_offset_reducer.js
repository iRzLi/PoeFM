import { UPDATE_OFFSET_BY_ONE } from '../actions/offset_actions';
import { RECEIVE_ITEM_KEYS } from '../actions/item_key_actions';


const uiOffsetReducer = (state = 0, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case UPDATE_OFFSET_BY_ONE:
            return oldState+1;
        case RECEIVE_ITEM_KEYS:
            return 1;
        default:
            return oldState;
    }
};

export default uiOffsetReducer;