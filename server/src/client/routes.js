import React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/home.js';

export default () => {
    return (
        <div className="">
            <Route exact path="/" component={Home} />
            <Route exact path="/hi" component={() => 'hi!'} />
        </div>
    );
};
