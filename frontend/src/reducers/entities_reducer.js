import { combineReducers } from 'redux';
import itemsReducer from './items_reducer';
import statsReducer from './stats_reducer';
import staticDropsReducer from './static_drops_reducer';

const entitiesReducer = combineReducers({
    items: itemsReducer,
    static_drops: staticDropsReducer,
    stats: statsReducer
});

export default entitiesReducer;