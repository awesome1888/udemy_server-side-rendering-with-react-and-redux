// startup point for the client side
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes.js';

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root')
);
