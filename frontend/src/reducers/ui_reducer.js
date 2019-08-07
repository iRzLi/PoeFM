import { combineReducers } from 'redux';

import modal from './modal_reducer';
import ui_league_reducer from './ui_league_reducer';

export default combineReducers({
    modal,
    league: ui_league_reducer,
});