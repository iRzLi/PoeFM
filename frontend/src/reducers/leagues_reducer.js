import { merge } from 'lodash';
import { RECEIVE_LEAGUES } from '../actions/league_actions';


const leaguesReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LEAGUES:
            return merge({}, oldState, action.res);
        default:
            return oldState;
    }
};

export default leaguesReducer;