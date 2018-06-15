import React from 'react';
import Home from './component/home.js';
import UserList from './component/user-list.js';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/users',
        component: UserList,
    }
];
