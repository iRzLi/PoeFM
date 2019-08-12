import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ITEM_KEYS = 'RECEIVE_ITEM_KEYS';

export const requestItemKeys = (itemObj) => dispatch => {
    return SearchApiUtil.getItemKeys(itemObj).then(
        (res) => {
            // debugger
            dispatch(receiveItemKeys(res.data))
        }
    );
};

export const receiveItemKeys = (res) => {
    return {
        type: RECEIVE_ITEM_KEYS,
        res,
    };
};