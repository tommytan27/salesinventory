import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.css';
import SystemApp from './containers/SystemApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import salesInventoryApp from './reducers/index';
import logger from './middlewares/logger';
import crashReporter from './middlewares/crashReporter';
import adminTimer from './middlewares/adminTimer';
import WebFontLoader from 'webfontloader';
import { loginHub } from './middlewares/loginHub';
import { userHub } from './middlewares/userHub';
import { customerHub } from './middlewares/customerHub';
import { supplierHub } from './middlewares/supplierHub';
import { brandHub } from './middlewares/brandHub';
import { itemHub } from './middlewares/itemHub';
import { stockHub } from './middlewares/stockHub';
import { salesHub } from './middlewares/salesHub';
import { creditHub } from './middlewares/creditHub';
import { searchHub } from './middlewares/searchHub';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(salesInventoryApp, composeEnhancers(
    applyMiddleware(loginHub, userHub, customerHub, supplierHub, brandHub, itemHub,
        stockHub, salesHub, creditHub, searchHub,
        logger, crashReporter, 
        adminTimer)
));

ReactDOM.render(
        <Provider store={store}>
            <SystemApp />
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
