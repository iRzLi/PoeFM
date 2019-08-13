import { combineReducers } from 'redux';
import itemsReducer from './items_reducer';
import statsReducer from './stats_reducer';
import staticDropsReducer from './static_drops_reducer';
import leaguesReducer from './leagues_reducer';
import itemKeysReducer from './item_keys_reducer';
import itemListingsReducer from './item_listings_reducer'

const entitiesReducer = combineReducers({
    items: itemsReducer,
    static_drops: staticDropsReducer,
    stats: statsReducer,
    leagues: leaguesReducer,
    item_keys: itemKeysReducer,
    item_listings: itemListingsReducer,
});

export default entitiesReducer;