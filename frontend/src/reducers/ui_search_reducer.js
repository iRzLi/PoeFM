import { UPDATE_SEARCH_STRING } from '../actions/search_actions';


const uiSearchReducer = (state = "", action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case UPDATE_SEARCH_STRING:
            return action.searchString;
        default:
            return oldState;
    }
};

export default uiSearchReducer;