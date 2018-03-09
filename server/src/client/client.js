// startup point for the client side
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './component/home.js';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));
