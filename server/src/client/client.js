// startup point for the client side
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from './routes.js';
import reducers from './reducers/index.js';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
