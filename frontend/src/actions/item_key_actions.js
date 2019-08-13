import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ITEM_KEYS = 'RECEIVE_ITEM_KEYS';
export const RECEIVE_ITEM_LISTINGS = 'RECEIVE_ITEM_LISTINGS';


export const ApplytItemKeys = (itemKeysObj, offset) => dispatch => {
    return SearchApiUtil.getItems(itemKeysObj, offset).then(
        (res) => {
            dispatch(receiveItemListings(res.data))
        }
    );
};

export const receiveItemListings = (res) => {
    return {
        type: RECEIVE_ITEM_LISTINGS,
        res,
    };
};

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