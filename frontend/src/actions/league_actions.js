import * as LeagueApiUtil from '../util/league_api_util';

export const RECEIVE_LEAGUES = 'RECEIVE_LEAGUES';
export const SELECT_LEAGUES = 'SELECT_LEAGUES';

export const requestLeagues = () => dispatch => {
    return LeagueApiUtil.getLeagues().then(
        (res) => dispatch(receiveLeagues(res.data))
    );
};

export const receiveLeagues = (res) => {
    return {
        type: RECEIVE_LEAGUES,
        res,
    };
};

export const selectLeague = (leagueString) => {
    return {
        type: SELECT_LEAGUES,
        leagueString,
    };
};