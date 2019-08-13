// import { SELECT_LEAGUES } from '../actions/league_actions';
import { RECEIVE_ITEM_KEYS } from '../actions/item_key_actions';


const uiOffsetReducer = (state = 0, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        // case SELECT_OFFSET_ADD:
        //     return action.Offset;
        case RECEIVE_ITEM_KEYS:
            return 1;
        default:
            return oldState;
    }
};

export default uiOffsetReducer;