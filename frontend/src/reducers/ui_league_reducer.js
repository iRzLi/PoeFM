import { SELECT_LEAGUES } from '../actions/league_actions';


const leaguesReducer = (state = "Standard", action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case SELECT_LEAGUES:
            return action.leagueString;
        default:
            return oldState;
    }
};

export default leaguesReducer;