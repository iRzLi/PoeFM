import { combineReducers } from 'redux';

import modal from './modal_reducer';
import ui_league_reducer from './ui_league_reducer';
import ui_search_reducer from './ui_search_reducer';

export default combineReducers({
    modal,
    league: ui_league_reducer,
    search: ui_search_reducer,
});