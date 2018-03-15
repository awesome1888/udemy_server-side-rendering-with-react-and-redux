import React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/home.js';
import UserList from './component/user-list.js';

export default () => {
    return (
        <div className="">
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />
            <Route path="/hi" component={() => 'hi!'} />
        </div>
    );
};
