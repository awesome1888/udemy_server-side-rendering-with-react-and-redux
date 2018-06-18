import React from 'react';
import Home from './component/home.js';
import UserList, { loadData } from './component/user-list.js';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        loadData,
        path: '/users',
        component: UserList,
    }
];
