
import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
// import errorsReducer from './errors_reducer';
import ui_reducer from './ui_reducer';


const rootReducer = combineReducers({
    entities: entitiesReducer,
    // errors: errorsReducer,
    ui: ui_reducer,
});

export default rootReducer;