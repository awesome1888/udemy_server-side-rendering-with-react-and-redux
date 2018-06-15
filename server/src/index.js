import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes.js';
import renderer from './helpers/renderer.js';
import createStore from './helpers/create-store.js';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();

    // some logic to initialize and load data into the store

    // matchRouts will look for the route and return a pack of components which are about to be rendered
    matchRoutes(Routes, req.path);

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.dir('Listening on 3000');
});
