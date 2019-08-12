// import { SELECT_LEAGUES } from '../actions/league_actions';


const uiOffsetReducer = (state = 1, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        // case SELECT_OFFSET_ADD:
        //     return action.Offset;
        default:
            return oldState;
    }
};

export default uiOffsetReducer;