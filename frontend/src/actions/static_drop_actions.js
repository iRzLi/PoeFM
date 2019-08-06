import * as StaticDropsApiUtil from '../util/static_drops_api_util';

export const RECEIVE_STATIC_DROPS = 'RECEIVE_STATIC_DROPS';

export const requestStaticDrops = () => dispatch => {
    return StaticDropsApiUtil.getStaticDrops().then(
        (res) => dispatch(receiveStaticDrops(res.data))
    );
};

export const receiveStaticDrops = (res) => {
    return {
        type: RECEIVE_STATIC_DROPS,
        res,
    };
};