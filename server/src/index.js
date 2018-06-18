import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes.js';
import renderer from './helpers/renderer.js';
import createStore from './helpers/create-store.js';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {

    console.dir(`Path: ${req.path}`);

    const store = createStore();

    // SERVER-SIDE RENDERING STARTS HERE

    // matchRouts will look for the route and return a pack of components which are about to be rendered
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return (route.loadData ? route.loadData(store) : null);
    });

    if (promises.length)
    {
        Promise.all(promises).then(() => {
            res.send(renderer(req, store));
        });
    }
    else
    {
        res.send(renderer(req, store));
    }

    // res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.dir('Listening on 3000');
});
