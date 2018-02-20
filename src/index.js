import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import salesInventoryApp from './reducers/index';
import logger from './middlewares/logger';
import crashReporter from './middlewares/crashReporter';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(salesInventoryApp, composeEnhancers(
    applyMiddleware(logger, crashReporter)
));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
