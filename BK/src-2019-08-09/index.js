import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';

import AppBAr from './layout/appBar'
import reducers from './reducers';
import Routes from './routes';

const logger = createLogger({
    collapsed: true,
    duration: true
});
const store = applyMiddleware(logger, promiseMiddleware)(createStore)

ReactDOM.render(
        <Provider store={store(reducers)}>
            <BrowserRouter>
                <AppBAr/>
                <Routes/>
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));
