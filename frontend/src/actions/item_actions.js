import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const requestItems = () => dispatch => {
    return ItemApiUtil.getItems().then(
        (res) => dispatch(receiveItems(res.data))
    );
};

export const receiveItems = (res) => {
    return {
        type: RECEIVE_ITEMS,
        res,
    };
};