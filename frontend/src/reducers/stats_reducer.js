import { merge } from 'lodash';
import { RECEIVE_STATS } from '../actions/stat_actions';


const StatsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STATS:
            return merge({}, oldState, action.res);
        default:
            return oldState;
    }
};

export default StatsReducer;