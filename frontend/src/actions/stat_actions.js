import * as StatsApiUtil from '../util/stats_api_util';

export const RECEIVE_STATS = 'RECEIVE_STATS';

export const requestStats = () => dispatch => {
    return StatsApiUtil.getStats().then(
        (res) => dispatch(receiveStats(res.data))
    );
};

export const receiveStats = (res) => {
    return {
        type: RECEIVE_STATS,
        res,
    };
};