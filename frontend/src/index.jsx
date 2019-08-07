import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import axios from "axios";
import configureStore from './store/store';

import * as ModalActions from './actions/modal_actions';
import * as ItemActions from './actions/item_actions';
import {getItems} from './util/item_api_util';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

window.store = store;
window.axios = axios;
window.reqItems = getItems;
window.ItemActions = ItemActions;
window.ModalActions = ModalActions;


// axios.get("/api/items").then(res => console.log(res.data))
// window.reqItems().then(res => console.log(res)).catch(err => {
//     debugger
//     console.log(err);
//      return err})

